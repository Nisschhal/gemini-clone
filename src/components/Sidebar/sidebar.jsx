import React from "react"
import "./sidebar.css"
import { assets } from "../../assets/assets"

const Sidebar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setOpen(!open)}
          src={assets.menu_icon}
          alt="menu"
          className="menu"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} className="icon" alt="" />
          {open ? <p>New Chat</p> : null}
        </div>
        {open ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message" />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      {/* Buttom */}
      <div className="buttom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} className="question" alt="question" />
          {open ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} className="history" alt="history" />
          {open ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} className="setting" alt="setting" />

          {open ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
