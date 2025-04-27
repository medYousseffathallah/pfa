import React, { useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) {
      setResponse('Please enter a message.');
      return;
    }

    setIsLoading(true);
    setResponse('Loading...');

    try {
      const apiResponse = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: {/*ur API key */},
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'deepseek/deepseek-r1:free',
            messages: [{ role: 'user', content: userInput }],
          }),
        }
      );

      const data = await apiResponse.json();
      const markdownText = data.choices?.[0]?.message?.content || 'No response received.';
      setResponse(marked.parse(markdownText));
    } catch (error) {
      setResponse('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-popup-container">
      <button 
        className="btn btn-primary chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat Assistant
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h5>AI Assistant</h5>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
          
          <div className="chat-body">
            <div 
              className="chat-response"
              dangerouslySetInnerHTML={{ __html: response }}
            />
            
            <div className="chat-input-group">
              <input
                type="text"
                className="form-control"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button 
                className="btn btn-success send-btn"
                onClick={sendMessage}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;