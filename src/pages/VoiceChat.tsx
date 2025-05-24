
import React, { useState, useRef, useEffect } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { Mic, MicOff, Volume2, VolumeX, Send, User, Bot } from 'lucide-react';

const VoiceChat = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! I\'m your AI healthcare assistant. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false);
      addMessage('user', 'I have been experiencing headaches lately');
      setTimeout(() => {
        setIsSpeaking(true);
        addMessage('bot', 'I understand you\'re experiencing headaches. Can you tell me more about when they occur and their intensity? This will help me provide better assistance.');
        setTimeout(() => setIsSpeaking(false), 3000);
      }, 1000);
    }, 3000);
  };

  const addMessage = (type: 'user' | 'bot', content: string) => {
    const newMessage = {
      id: Date.now(),
      type,
      content
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendText = () => {
    if (inputText.trim()) {
      addMessage('user', inputText);
      setInputText('');
      
      setTimeout(() => {
        setIsSpeaking(true);
        addMessage('bot', 'Thank you for that information. Based on what you\'ve described, I recommend consulting with a healthcare provider for a proper evaluation.');
        setTimeout(() => setIsSpeaking(false), 3000);
      }, 1000);
    }
  };

  return (
    <SidebarLayout>
      <div className="min-h-screen p-6 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="font-orbitron text-4xl font-bold text-vital-light mb-2">
              Voice Chat Assistant
            </h1>
            <p className="font-exo text-lg text-vital-light/70">
              Speak with our AI healthcare assistant in your preferred language
            </p>
          </div>

          {/* Voice Control Center */}
          <div className="mb-8 p-8 rounded-xl bg-vital-dark/50 backdrop-blur-sm border border-vital-vibrant/30 text-center">
            <div className="relative inline-block">
              {/* Concentric Circle Animations */}
              <div className={`absolute inset-0 rounded-full border-2 border-vital-vibrant/30 ${isRecording || isSpeaking ? 'animate-ping' : ''}`}></div>
              <div className={`absolute inset-0 rounded-full border-2 border-vital-muted/20 ${isRecording || isSpeaking ? 'animate-ping' : ''}`} style={{ transform: 'scale(1.2)', animationDelay: '0.2s' }}></div>
              <div className={`absolute inset-0 rounded-full border-2 border-vital-pastel/10 ${isRecording || isSpeaking ? 'animate-ping' : ''}`} style={{ transform: 'scale(1.4)', animationDelay: '0.4s' }}></div>
              
              {/* Main Voice Button */}
              <button
                onClick={handleStartRecording}
                disabled={isRecording}
                className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isRecording 
                    ? 'bg-red-500 animate-pulse' 
                    : isSpeaking
                    ? 'bg-vital-muted animate-pulse'
                    : 'bg-gradient-to-r from-vital-vibrant to-vital-muted hover:scale-110'
                }`}
              >
                {isRecording ? (
                  <MicOff className="w-12 h-12 text-white" />
                ) : (
                  <Mic className="w-12 h-12 text-white" />
                )}
              </button>
            </div>
            
            <div className="mt-6">
              <p className="font-exo text-lg text-vital-light mb-2">
                {isRecording ? 'Listening...' : isSpeaking ? 'AI is speaking...' : 'Tap to speak'}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-vital-vibrant/20 hover:bg-vital-vibrant/30 transition-colors">
                  <Volume2 className="w-4 h-4 text-vital-vibrant" />
                  <span className="font-exo text-sm text-vital-light">Audio On</span>
                </button>
                <select className="px-4 py-2 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light font-exo">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Hindi</option>
                  <option>Mandarin</option>
                </select>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="mb-6 max-h-96 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 animate-fade-in ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 rounded-full ${
                  message.type === 'user' 
                    ? 'bg-vital-vibrant/20' 
                    : 'bg-vital-muted/20'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-6 h-6 text-vital-vibrant" />
                  ) : (
                    <Bot className="w-6 h-6 text-vital-muted" />
                  )}
                </div>
                <div className={`max-w-md p-4 rounded-xl ${
                  message.type === 'user'
                    ? 'bg-vital-vibrant/20 border border-vital-vibrant/30'
                    : 'bg-vital-dark/50 border border-vital-muted/30'
                }`}>
                  <p className="font-exo text-vital-light">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Text Input */}
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendText()}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 rounded-lg bg-vital-dark border border-vital-vibrant/30 text-vital-light placeholder-vital-light/50 focus:outline-none focus:border-vital-vibrant"
            />
            <button
              onClick={handleSendText}
              className="px-6 py-3 bg-gradient-to-r from-vital-vibrant to-vital-muted rounded-lg font-exo font-semibold text-vital-light hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default VoiceChat;
