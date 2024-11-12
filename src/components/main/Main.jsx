import React, { useContext, useState } from 'react';
import '../main/main.css';
import { assets } from '../../assets/assets';
import { PostData } from '../../apiData/ApiData.js';
import { MyContext } from '../../apiData/ContextData.js';

function Main() {
  const { addQuestion } = useContext(MyContext);  // Use addQuestion to add a new question
  const [qaList, setQaList] = useState([]);  // Array to hold questions and answers
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");  // Local state for question input

  const handleOnSubmit = async () => {
    try {
      setLoading(true);  // Set loading state to true before making API call
      console.log("API Key:", process.env.REACT_APP_GEMINI_API_KEY);

      const objData = await PostData(question);  // Sends the question to the API
      if (objData && objData.candidates) {
        const answer = objData.candidates[0].content.parts[0].text;

        setQaList((prevList) => [...prevList, { question, answer }]);

        // Add question to context after receiving the answer
        addQuestion(question);

        // Clear the input field
        setQuestion('');
      } else {
        console.error("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>

          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>

          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>

          {/* Add other card items as necessary */}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}  // Update question state
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              <img
                src={assets.send_icon}
                alt="Send Icon"
                onClick={handleOnSubmit}  // Trigger data submission
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        {/* Display loading spinner */}
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}

        {/* Display list of questions and answers */}
        <div className="qa-list mt-4">
          {qaList.map((qa, index) => (
            <div key={index} className="qa-item mb-4">
              <p><strong>Q:</strong> {qa.question}</p>
              <p><strong>A:</strong> {qa.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
