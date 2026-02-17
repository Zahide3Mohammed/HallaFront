import { useState } from 'react';
import axios from 'axios';
import './Questions.Module.css';
import Header from '../../Elementes/header';
import Footer from '../../Elementes/footer';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

export default function Questions() {
  const [currentPage, setCurrentPage] = useState(0); 
  const questionsPerPage = 5;
  
  // 1. Kan-jibu l-user w l-function li kat-update l-context
  const { user, loginContext ,token} = useAuth(); 

  const [scores, setScores] = useState({ red: 0, green: 0, yellow: 0, blue: 0, purple: 0 });
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
const questions = [
    { id: 1, text: "هل تفضل أن تكون أنت القائد في أي مجموعة بدلاً من أن ثقاد؟", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 2, text: "هل تتجنب الدخول في نقاشات حادة أو صراعات وتفضل مسايرة الأمور", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 3, text: "هل تشعر بالحيوية والنشاط عندما تكون وسط مجموعة كبيرة من الناس ؟", color: "yellow", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 4, text:" هل تهتم بالدقة والتفاصيل أكثر من سرعة الإنجاز", color: "blue", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 5, text: "هل تعتبر نفسك شخصاًمختلفاً أوفريداً ولا تحب التقليد ؟", color: "purple", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 6, text:"هل تتخذ قراراتك بسرعة وثقة حتى في المواقف الصعبة ؟", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 7, text: "هل تفضل العمل ضمن فريق متعاون بدلاً من المنافسة الفردية", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 8, text: "هل تفضل البدء بمشاريع جديدة ومبتكرة بدلاً من إنهاء المهام الروتينية ؟", color: "yellow", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 9, text:  "هل تزعجك الفوضى أو غياب الجدول الزمني في يومك ", color: "blue", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 10, text: "هل تنجذب للفنون الموسيقى الغامضة، أو القصص التي تحتوي على خیال واسع ؟", color: "purple", reselta: [-3, -2, -1, 0, 1, 2, 3] },
     { id: 11, text:  "هل تعتبر أن القواعد والأنظمة وجدت لتطبق حرفياً ولا يجب تجاوزها تحت أي ظرف ؟", color: "blue", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 12, text:"هل تشعر بدافع قوي للمنافسة والفوز في أي تحد أو نقاش؟", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 13, text: "هل تصف نفسك بأنك شخص عفوي وتتخذ قراراتك بناءً على حماسك ؟", color: "yellow", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 14, text: "هل تشعر بأن طاقتك تتجدد بمجرد التواجد في مكان مفتوح بحر، غابة جبل ؟", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 15, text: "هل تميل للتفكير في معنى الحياة والغيبيات أكثر من الأمور اليومية", color: "purple", reselta: [-3, -2, -1, 0, 1, 2, 3] }
  ];

  const startIndex = currentPage * questionsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  const handleSelect = (questionId, color, value) => {
    const oldValue = answers[questionId] || 0;
    setScores(prev => ({
      ...prev,
      [color]: prev[color] + value - oldValue,
    }));
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const nextStep = () => {
    if (startIndex + questionsPerPage < questions.length) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); 
    } else {
      submitResults();
    }
  };

  const prevStep = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); 
    }
  };

  const submitResults = async () => {
    console.log("TOKEN FROM CONTEXT:", token);
    if (Object.keys(answers).length < questions.length) {
      alert("يرجى الإجابة على جميع الأسئلة قبل المتابعة");
      return;
    }
    
    setLoading(true);
    const topColor = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    try {
      const res = await axios.post("http://localhost:8000/api/personalitytest", 
        { color: topColor }, 
        {
          headers: {Authorization: `Bearer ${token}`,
          'Accept': "application/json",
        'Content-Type': 'application/json',
        },
        });
      if (loginContext) {
        loginContext(res.data.user,res.data.token);
      }
      navigate("/Profile");
    } catch (error) {
      console.error("Update Error:", error.response?.data);
      alert("حدث خطأ أثناء الحفظ");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-8 bg-white text-right" dir="rtl">
        <img src={user?.photo} width={100} alt="Logo" />
        <h1>أهلاً {user?.nom || 'المستخدم'}</h1>
        <h1 className="titre">اختبار شخصية مجاني</h1>
        <article className="steps"> 
          <div className="card"><h1>الخطوة 1</h1><h3>أكمل الاختبار</h3></div> 
          <div className="card"><h1>الخطوة 2</h1><h3>النتائج</h3></div>
          <div className="card"><h1>الخطوة 3</h1><h3>تطوير الذات</h3></div> 
        </article>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${((startIndex + currentQuestions.length) / questions.length) * 100}%` }}></div>
        
        </div>

        {currentQuestions.map((q) => (
          <div key={q.id} className="qus">
            <p className="text-xl text-center mb-6">{q.text}</p>
            <div className="container-ijabat">
              <span style={{color: 'red'}}>غير موافق</span>
              {q.reselta.map((val) => (
                <button
                  key={val} className='buttijaba'
                  type="button"
                  onClick={() => handleSelect(q.id, q.color, val)}
                  style={{
                    width: `${50 + Math.abs(val) * 5}px`,
                    height: `${50 + Math.abs(val) * 5}px`,
                    borderRadius: '50%',
                    border: '1px solid #cfb8b8',
                    backgroundColor: answers[q.id] === val ? (val == 0 ? '#6f00e6' : (val>0 ? "#01d57c" : "#fb0000")) : 'white'
                  }}
                />
              ))}
              <span style={{color: 'green'}}>موافق</span>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-10">
          {currentPage > 0 && <button onClick={prevStep} className="btn-back">السابق</button>}
          <button onClick={nextStep} className="btnn" disabled={loading}>
            {loading ? "جاري..." : (startIndex + questionsPerPage < questions.length ? "التالي" : "عرض النتائج")}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}