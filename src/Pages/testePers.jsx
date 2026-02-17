import './profile.Module.css';

export default function TestPers(){
    
    
    
    return<>
    <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-full max-w-3xl z-10">
        <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
        <div>
        <span className="text-primary font-bold text-sm uppercase tracking-widest">In Progress</span>
        <h3 className="text-2xl font-bold">Question 3 of 15</h3>
        </div>
        <span className="text-slate-400 font-medium">20% Complete</span>
        </div>
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-primary w-1/5 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(37,140,244,0.4)]"></div>
        </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-10 sm:p-16 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 text-center border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-16 dark:text-white">
        "I find it easy to introduce myself to new people."
        </h1>
        <div className="relative py-8">
        <div className="absolute -top-4 left-0 w-full flex justify-between px-2">
        <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-tighter">Strongly Agree</span>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Neutral</span>
        <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-tighter">Strongly Disagree</span>
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-6">
        <label className="group cursor-pointer flex flex-col items-center">
        <input className="hidden peer" name="answer" type="radio"/>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-transparent bg-green-500/10 text-green-600 flex items-center justify-center transition-all peer-checked:bg-green-500 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-green-500/30 group-hover:scale-110">
        <span className="material-symbols-outlined text-4xl">sentiment_very_satisfied</span>
        </div>
        </label>
        <label className="group cursor-pointer flex flex-col items-center">
        <input className="hidden peer" name="answer" type="radio"/>
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-transparent bg-green-400/10 text-green-500 flex items-center justify-center transition-all peer-checked:bg-green-400 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-green-400/30 group-hover:scale-110">
        <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
        </div>
        </label>
        <label className="group cursor-pointer flex flex-col items-center">
        <input className="hidden peer" name="answer" type="radio"/>
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-transparent bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-primary/30 group-hover:scale-110">
        <span className="material-symbols-outlined text-2xl">sentiment_neutral</span>
        </div>
        </label>
        <label className="group cursor-pointer flex flex-col items-center">
        <input className="hidden peer" name="answer" type="radio"/>
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-transparent bg-red-400/10 text-red-400 flex items-center justify-center transition-all peer-checked:bg-red-400 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-red-400/30 group-hover:scale-110">
        <span className="material-symbols-outlined text-3xl">sentiment_dissatisfied</span>
        </div>
        </label>
        <label className="group cursor-pointer flex flex-col items-center">
        <input className="hidden peer" name="answer" type="radio"/>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-transparent bg-red-500/10 text-red-600 flex items-center justify-center transition-all peer-checked:bg-red-500 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-red-500/30 group-hover:scale-110">
        <span className="material-symbols-outlined text-4xl">sentiment_very_dissatisfied</span>
        </div>
        </label>
        </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-16">
        <button className="flex items-center gap-2 px-6 py-3 font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
        <span className="material-symbols-outlined">arrow_back</span>
            Back
        </button>
        <button className="flex items-center gap-2 px-10 py-3 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 group">
            Next<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        </div>
        <p className="text-center mt-8 text-slate-400 text-sm italic">
            "Be as honest as possible for the most accurate color profile result."
        </p>
        </div>
        </main>
    
    </>
}