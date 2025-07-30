import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const initialMessages: Message[] = [
  {
    sender: 'bot',
    text: 'Hi! 👋 I am Civiconnect Assistant. How can I help you today? You can ask me about reporting issues, exploring the app, or any other question!'
  }
];

function getBotResponse(input: string): string {
  const text = input.toLowerCase();
  if (text.includes('report') || text.includes('issue')) {
    return 'To report an issue, click the "Report an Issue" button on the homepage or use the "+" icon in the navigation. Fill in the details and submit!';
  }
  if (text.includes('explore') || text.includes('browse')) {
    return 'To explore issues, click on the "Explore" tab in the navigation. You can filter and view all reported issues there.';
  }
  if (text.includes('login') || text.includes('sign in')) {
    return 'To log in, click the "Login" button in the top right or in the navigation menu. Enter your credentials to access your account.';
  }
  if (text.includes('signup') || text.includes('register') || text.includes('sign up')) {
    return 'To sign up, click the "Sign Up" button in the top right or in the navigation menu. Fill in your details to create an account.';
  }
  if (text.includes('profile')) {
    return 'To view or edit your profile, click on the "Profile" tab in the navigation.';
  }
  if (text.includes('suggestion')) {
    return 'To view or submit suggestions, use the "Suggestions" tab in the navigation.';
  }
  if (text.includes('help') || text.includes('guide')) {
    return 'You can ask me about reporting issues, exploring, signing up, logging in, or anything else about Civiconnect!';
  }
  if (text.includes('contact') || text.includes('support')) {
    return 'For further support, please use the contact form on our website or email support@civiconnect.com.';
  }
  if (text.includes('dark mode')) {
    return 'Dark mode is coming soon! Stay tuned for updates.';
  }
  if (text.includes('logout')) {
    return 'To log out, go to your profile and click the "Logout" button.';
  }
  if (text.includes('thank')) {
    return 'You’re welcome! 😊 If you have more questions, just ask.';
  }
  return 'Sorry, I didn’t understand that. You can ask me about reporting issues, exploring, signing up, logging in, or anything else about Civiconnect!';
}

const ChatBotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setTimeout(() => {
      const botReply: Message = { sender: 'bot', text: getBotResponse(input) };
      setMessages((msgs) => [...msgs, botReply]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-white rounded-full p-4 shadow-glow hover:scale-110 transition-all flex items-center"
        onClick={() => setOpen(true)}
        aria-label="Open chat bot"
        style={{ display: open ? 'none' : 'flex' }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-large border border-primary-100 animate-scale-in flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-100 bg-gradient-primary text-white rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <span className="font-semibold">Civiconnect Assistant</span>
            </div>
            <button
              className="p-1 rounded-full hover:bg-white/20 transition"
              onClick={() => setOpen(false)}
              aria-label="Close chat bot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50 scrollbar-thin" style={{ maxHeight: 350 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-xl px-4 py-2 max-w-[80%] text-sm shadow-soft ${
                  msg.sender === 'user'
                    ? 'bg-primary-500 text-white rounded-br-none'
                    : 'bg-white text-neutral-800 border border-primary-100 rounded-bl-none'
                }`}>
                  {msg.sender === 'user' && (
                    <span className="inline-flex items-center mr-2 align-middle"><User size={14} className="inline" /></span>
                  )}
                  {msg.text}
                  {msg.sender === 'bot' && (
                    <span className="inline-flex items-center ml-2 align-middle"><Bot size={14} className="inline text-primary-400" /></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center p-3 border-t border-primary-100 bg-white rounded-b-2xl">
            <input
              type="text"
              className="form-input flex-1 mr-2"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Type your question"
            />
            <button
              className="btn-primary btn-sm flex items-center justify-center"
              onClick={handleSend}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotWidget; 