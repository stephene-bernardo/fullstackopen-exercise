import React, {useState} from 'react'

const StatisticLine = ({text, value}) => (<p>{text} {value}</p>)


const Statistics = ({good, neutral, bad}) => {

  let total = good + neutral + bad;
  let hasFeedback = good || neutral || bad
  
  if(hasFeedback){
    return (
      <div>
          <h1>statistics</h1>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={((good *1) + (neutral*0) + (bad*-1))/total || 0}/>
          <StatisticLine text="positive" value={(good/total*100 || 0) + ' %'}/>
      </div>
      )
  }
  return <p>No feedback given</p>
 

}

function App() {
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})

  const handleFeedback = (feedbackType) => {
    if(feedbackType === 'good') {
      setFeedback({...feedback, good: ++feedback.good})
    }
    else if(feedbackType === 'bad'){
      setFeedback({...feedback, bad: ++feedback.bad})
    }
    else if(feedbackType === 'neutral') {
      setFeedback({...feedback, neutral: ++feedback.neutral})
    }
  }

  return (
    <div className="App">
      <h1>give feedback</h1>
      <button onClick={()=> handleFeedback('good')}>good</button>
      <button onClick={()=> handleFeedback('neutral')}>neutral</button>
      <button onClick={()=> handleFeedback('bad')}>bad</button>

      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>
    </div>
  );
}

export default App;
