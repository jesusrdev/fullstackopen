import { useState } from 'react'


const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({ statistics }) => {

  const [good, neutral, bad, total, average, positive] = statistics


  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given, please press a button</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='All' value={total} />
      <StatisticLine text='Average' value={average} />
      <StatisticLine text='Positive' value={positive} />
    </div>
  )
}


const Button = (props) => <button onClick={props.onSmash}>{props.text}</button>



const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const goodComment = () => {
    const newGood = good + 1;
    setGood(newGood);

    const newTotal = newGood + bad + neutral;
    setTotal(newTotal);
    
    setAverage(newGood/newTotal - bad/newTotal);

    setPositive( (newGood*100)/newTotal )
  }
  
  
  const badComment = () => {
    const newBad = bad + 1;
    setBad(newBad);

    const newTotal = good + newBad + neutral;
    setTotal(newTotal);
    
    setAverage(good/newTotal - newBad/newTotal);

    setPositive( (good*100)/newTotal )
  }

  const neutralComment = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);

    const newTotal = good + bad + newNeutral;
    setTotal(newTotal);
    
    setAverage(good/newTotal - bad/newTotal);

    setPositive( (good*100)/newTotal )
  }


  return (
    <>
      <h1>give feedback</h1>
      <Button onSmash={goodComment} text='Good' />
      <Button onSmash={neutralComment} text='Neutral' />
      <Button onSmash={badComment} text='Bad' />

      <Statistics statistics={[good, neutral, bad, total, average, positive]} />
    </>
  )
}

export default App
