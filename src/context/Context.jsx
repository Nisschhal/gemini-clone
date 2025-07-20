// import { createContext, useState } from "react"
// import runChat from "../config/gemini"

// export const Context = createContext()

// const ContextProvider = ({ children }) => {
//   const [input, setInput] = useState("")
//   const [recentPrompts, setRecentPrompts] = useState("")
//   const [prevPrompts, setPrevPrompts] = useState([])
//   const [showResult, setShowResult] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [resultData, setResultData] = useState("")
//   const onSent = async (prompt) => {
//     setResultData("")
//     setLoading(true)
//     setShowResult(true)
//     setRecentPrompts(prompt)
//     const response = await runChat(prompt)
//     setResultData(response)
//     setLoading(false)
//     setInput("")
//   }

//   // onSent("what is react?")
//   console.log("hello")

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompts,
//     recentPrompts,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput,
//   }
//   return <Context.Provider value={contextValue}>{children}</Context.Provider>
// }

// export default ContextProvider

import { createContext, useState } from "react"
import runChat from "../config/gemini"

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("")
  const [recentPrompts, setRecentPrompts] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompts(prompt)
    setInput("")

    await runChat(prompt, (word) => {
      setResultData((prev) => prev + word)
    })

    setLoading(false)
  }

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        recentPrompts,
        showResult,
        resultData,
        loading,
        onSent,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
