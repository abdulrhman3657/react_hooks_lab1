import { useState } from "react"


function Home() {

  const [counter, setCounter] = useState(0)

  function addnum() {
    setCounter(5 + 10)
  }

  function subnum() {
    setCounter(5 - 10)
  }

  function multNum() {
    setCounter(5 * 10)
  }

  function divNum() {
    setCounter(5 / 10)
  }

  return (
    <div className="p-5 flex flex-col items-start gap-2">
      <h1>number 1 = 5</h1>
      <h1>number 2 = 10</h1>
      <h1>results = {counter}</h1>
      <button className="bg-blue-300 p-1 hover:bg-blue-700" onClick={() => addnum()}>add</button>
      <button className="bg-blue-300 p-1 hover:bg-blue-700" onClick={() => subnum()}>sub</button>
      <button className="bg-blue-300 p-1 hover:bg-blue-700" onClick={() => multNum()}>mult</button>
      <button className="bg-blue-300 p-1 hover:bg-blue-700" onClick={() => divNum()}>div</button>
    </div>
  )
}

export default Home