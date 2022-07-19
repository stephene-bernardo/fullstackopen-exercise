import { useState } from 'react'

const AnecdoteLine = ({anecdote, vote}) => (
  <>
    <p>{anecdote}</p>
    <p>Has {vote} votes</p>
  </>
)

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  let highestVotesIndex = -1;
  for(let x=0; x<votes.length; x++){
    if((highestVotesIndex === -1 && votes[x] > 0 )|| votes[x] > votes[highestVotesIndex]){
      highestVotesIndex = x;
    }
  }

  const generateRandomAnecdotes = () => {
    const randomAnecdotes = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdotes)
  }

  const addVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] = copyVotes[selected] + 1 
    setVotes(copyVotes)
  } 

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <AnecdoteLine anecdote={anecdotes[selected]} vote={votes[selected]}/>
        <button onClick={addVote}>vote</button>
        <button onClick={generateRandomAnecdotes}>next anecdotes</button>
      </div>

      <div>
        <h1>Anecdotes with most votes</h1>
        {
          highestVotesIndex !== -1? (<AnecdoteLine anecdote={anecdotes[highestVotesIndex]} vote={votes[highestVotesIndex]}/>) :<></>
        }

      </div>

    </div>
  );
}

export default App;
