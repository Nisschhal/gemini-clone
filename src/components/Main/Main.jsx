import React, { useContext } from "react"
import "./Main.css"
import { assets } from "../../assets/assets"
import { Context } from "../../context/context"
const Main = () => {
  const {
    onSent,
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context)
  return (
    <main className="main">
      <nav className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </nav>

      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
            </div>
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              //   <div className="result-data">
              // <img src={assets.gemini_icon} alt="" />
              <p style={{ whiteSpace: "pre-wrap" }}>{resultData}</p>
              //   </div>
            )}
            {/* {resultData} */}
          </div>
        ) : (
          <>
            <div className="greet">
              <div>
                <span>Hello, there.</span>
                <p>How can I help you today?</p>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to for my upcoming date. </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstrom team bonding activities for our work retreat. </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Breifly tell me about yourself. </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the quality of my code. </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>

            <div className="main-bottom">
              <div className="search-box">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Enter a prompt here"
                />
                <div>
                  <img src={assets.gallery_icon} alt="gallery" />
                  <img src={assets.mic_icon} alt="mic" />
                  <img
                    onClick={() => onSent(input)}
                    src={assets.send_icon}
                    alt="send"
                  />
                </div>
              </div>
              <p className="bottom-info">
                Gemini may display inaccurate information about people, places,
                or events, so please use caution when relying on this
                information.
              </p>
              <p className="bottom-info">
                This is not a full-fledge AI chatbot, so set your expectations
                accordingly.
              </p>
            </div>
          </>
        )}{" "}
      </div>
    </main>
  )
}

export default Main
