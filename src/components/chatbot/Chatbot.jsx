import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './chatbot.css';

const quickQuestions = [
  "What's your rate?",
  'Are you available?',
  'What can you build?',
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const sendMessage = async (messageText) => {
    const text = messageText || input;
    if (!text.trim()) return;

    const userMessage = { text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`,
        { contents: [{ parts: [{ text }] }] }
      );

      const botMessage = {
        text:
          response.data.candidates[0]?.content?.parts[0]?.text ||
          "Sorry, I couldn't understand.",
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = {
        text: 'Message quota or limit exceeded',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
  };

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput('');
      setIsLoading(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <div className="chatbot-fab" onClick={toggleChatbot} id="chatbot-toggle-btn">
        <div className="chatbot-fab__glow"></div>
        {isOpen ? <FaTimes size={22} /> : <FaRobot size={22} />}
      </div>

      {isOpen && (
        <div className="chatbot-window glass-card" id="chatbot-window">
          <div className="chatbot-window__header">
            <div className="chatbot-window__header-info">
              <FaRobot className="chatbot-window__header-icon" />
              <div>
                <h4 className="chatbot-window__title">Ask me anything about Rajan</h4>
                <span className="chatbot-window__status">
                  <span className="chatbot-window__status-dot"></span>
                  Online
                </span>
              </div>
            </div>
            <FaTimes
              size={18}
              onClick={toggleChatbot}
              className="chatbot-window__close"
            />
          </div>

          <div className="chatbot-window__messages">
            {messages.length === 0 && (
              <div className="chatbot-window__quick-questions">
                <p className="chatbot-window__quick-label">Quick questions:</p>
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    className="chatbot-window__quick-btn"
                    onClick={() => handleQuickQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-window__msg chatbot-window__msg--${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-window__msg chatbot-window__msg--bot">
                <div className="chatbot-window__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-window__input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={handleKeyPress}
              ref={inputRef}
              className="chatbot-window__input"
              id="chatbot-input"
            />
            <button
              onClick={() => sendMessage()}
              className="chatbot-window__send"
              id="chatbot-send-btn"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
