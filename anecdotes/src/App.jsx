import { useState } from "react"

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(8).fill(0))

  const handleSelected = () => {
    const randNum = Math.floor(Math.random() * 8)
    setSelected(randNum)
  }
  const handleVote = (i) => {
    const newVote = [...vote]
    newVote[i] += 1
    setVote(newVote)
  }

  const highestVote = (anec) => {
    for (let n = 0; n < vote.length; n++) {
      if (vote[n] === Math.max(...vote)) {
        return anec[n]
      }
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <p>
        <button onClick={() => handleVote(selected)}>vote</button>{" "}
        <button onClick={handleSelected}>next anecdote</button>
      </p>

      <h2>Anecdote with most votes</h2>
      {highestVote(anecdotes)}
      <p>has {Math.max(...vote)} vote(s)</p>
    </div>
  )
}

export default App
