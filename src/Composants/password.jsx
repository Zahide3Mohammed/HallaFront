import { Link } from 'react-router-dom';
import './password.Module.css'
import { translationsLogin } from '../Elementes/translationsLogin';
import { useLanguage } from '../Elementes/LanguageContext';


const images = ["/images/chta.png"];


export default function Password() {
const { language } = useLanguage();
const t = translationsLogin[language];
    
    return (
        <div className="app-layout">
            {/* --- LEFT SIDE: LED Slider --- */}
            <div className="slider-side">
                <div className="led-border"></div>
                <div className="slider-content">
                    {images.map((img, i) => (
                        <img key={i} src={img} className="bg-img active" alt="slide" />
                    ))}
                    <div className="dark-overlay"></div>
                    <div className="hero-text">
                        
                        <h1>Sécurité</h1>
                        <p>eizhfiohzepojfp</p>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: DYNAMIC FORM --- */}
            
        </div>
    );
}