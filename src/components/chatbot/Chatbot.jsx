import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "./chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null); 
  const inputRef = useRef(null); 

  const toggleChatbot = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`,
        { contents: [{ parts: [{ text: input }] }] }
      );

      const botMessage = {
        text: response.data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't understand.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
      text: "Message quota or limit exceeded",
      sender: "bot",
    };
    setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      sendMessage();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput("");
      setIsLoading(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); 

  return (
    <>
      <div className="chatbot-button" onClick={toggleChatbot}>
        <FaRobot size={24} />
        <span className="chatbot-text">Chit-Chat</span>
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Welcome Buddy Let's Chat</h3>
            <FaTimes size={20} onClick={toggleChatbot} className="close-btn" />
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <em>Thinking...</em>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={handleKeyPress}
              ref={inputRef}
            />
            <FaPaperPlane size={20} onClick={sendMessage} className="send-btn" />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
