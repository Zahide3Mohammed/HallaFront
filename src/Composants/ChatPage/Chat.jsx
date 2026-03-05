import React, { useState } from 'react';
import './Chat.css';

// SVGs
const IconPlus = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconSmile = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="1.5" fill="currentColor"/><circle cx="15" cy="9" r="1.5" fill="currentColor"/></svg>;
const IconSend = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;
const IconStar = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Youssef', text: 'Salam everyone! I just found this amazing Tanjia spot near Jemaa el-Fna.', time: '2:14 PM', isMe: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Youssef' },
    { id: '2', sender: 'You', text: "I'm in! Let me just finish my tour of the Bahia Palace. 🏛️", time: '2:18 PM', isMe: true }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', text: input, time: '2:22 PM', isMe: true }]);
    setInput('');
  };

  return (
    <div className="app-container-chat">
      <div className="main-main-content">
        <aside className="sidebar-left">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <h2 style={{fontWeight: 'bold'}}>Members</h2>
            <span className="badge">6 Active</span>
          </div>
          {/* Members list hna... */}
          <button style={{marginTop: 'auto', padding: '12px', border: '2px dashed var(--border)', borderRadius: '20px', background: 'transparent', color: 'var(--text-gray)', fontWeight: '600'}}>+ Invite Friend</button>
        </aside>

        <main className="chat-window">
          <div className="messages-area">
            <div className="date-badge"><span>Day 3 in Marrakesh</span></div>
            {messages.map(m => (
              <div key={m.id} className={`msg-row ${m.isMe ? 'me' : 'not-me'}`}>
                <img src={m.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'} className="msg-avatar" />
                <div className="msg-content">
                   <div className="msg-bubble">{m.text}</div>
                   <span style={{fontSize: '10px', color: 'var(--text-gray)', marginTop: '4px', display: 'block'}}>{m.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="input-container">
            <div className="input-pill">
              <button style={{background: 'none', border: 'none', color: 'var(--text-gray)'}}><IconPlus /></button>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Send a message..." />
              <button style={{background: 'none', border: 'none', color: 'var(--text-gray)'}}><IconSmile /></button>
              <button onClick={send} className="btn-send"><IconSend /></button>
            </div>
          </div>
        </main>

        <aside className="sidebar-right">
          <div className="goal-card">
            <h4 style={{fontSize: '10px', color: 'var(--brand)', fontWeight: '800', marginBottom: '16px'}}>TODAY'S GOAL</h4>
            <div style={{display: 'flex', gap: '12px', marginBottom: '20px'}}>
              <div style={{background: 'var(--brand)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px'}}>🎯</div>
              <div>
                <div style={{fontWeight: 'bold', fontSize: '14px'}}>Meet at Fan Zone</div>
                <div style={{fontSize: '12px', color: 'var(--text-gray)'}}>Pre-game Tanjia & Vibes</div>
              </div>
            </div>
            <button className="btn-goal">Count Me In!</button>
          </div>
        </aside>
      </div>
    </div>
  );
}