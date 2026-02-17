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
    { id: 1, text: "أنت تكون صداقات جديدة بشكل منتظم ؟", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 2, text: "إن الأفكار المعقدة والجديدة تثير اهتمامك أكثر من الأفكار البسيطة.", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 3, text: "تقتنع بالعاطفة أكثر من المنطق.", color: "yellow", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 4, text: "تفضل التخطيط على العفوية.", color: "blue", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 5, text: "تحب العمل بمفردك.", color: "purple", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 6, text: "تستمتع بالمناسبات الاجتماعية الكبيرة.", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 7, text: "غالباً ما تنغمس في أفكارك لدرجة تجاهل محيطك.", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 8, text: "تفضل العمل في بيئة هادئة.", color: "yellow", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 9, text:  "تتخذ قراراتك بناءً على مشاعر الآخرين.", color: "blue", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 10, text: "تلتزم بالجدول الزمني بدقة.", color: "purple", reselta: [-3, -2, -1, 0, 1, 2, 3] },
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