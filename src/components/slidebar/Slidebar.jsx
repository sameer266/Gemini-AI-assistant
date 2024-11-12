import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import '../slidebar/slidebar.css';
import { MyContext } from '../../apiData/ContextData';

function Slidebar() {
  const { questions } = useContext(MyContext);
  const [extended, setExtended] = useState(true);

  return (
    <div className='slidebar'>
      <div className='top'>
        <img onClick={() => setExtended(!extended)} className="menu" src={assets.menu_icon} alt="menu" />
        
        <div className='new-chat'>
          <img src={assets.plus_icon} alt="new chat" />
          {extended && <p> New Chat</p>}
        </div>

        {extended && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            <div className='recent-entry'>
              <img src={assets.message_icon} alt="message" />
              {/* Display the most recent question */}
              {questions.length > 0 ? (
                <p>{questions[questions.length - 1]}</p>  // Last question in the array
              ) : (
                <p>No recent questions</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
