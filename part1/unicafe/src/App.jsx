import { useState, useEffect } from 'react'

const StatisticLine = ({text, value}) => {
  if(text == "positive"){
    return <tr><td>{text}</td><td>{value}%</td></tr>
  }else return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({good, bad, neutral, avrg, positivePros}) => {
  if(good + bad + neutral != 0){
    return (
      <table>
        <tbody>
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {good + neutral + bad}/>
        <StatisticLine text = "average" value = {avrg}/>
        <StatisticLine text = "positive" value = {positivePros}/>
        </tbody>
      </table>
    )
  }else return <p>No feedback given</p> 
}

const Button = ({renderButtonCLick, text}) => {
  return <button onClick={renderButtonCLick}>{text}</button>
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avrg, setAvrg] = useState(0)
  const [positivePros, setPositivePros] = useState(0)

  useEffect(() => {
    if(good + bad + neutral > 0){
      let newAverage = (good - bad)/(good + neutral + bad)
      let newProcents = good * 100/(good + neutral + bad) 
      setPositivePros(newProcents)
      setAvrg(newAverage)
    }
  }, [good, bad, neutral])

  function renderButtonCLick(event){
    if(event.target.textContent){
      switch (event.target.textContent){
        case "good":
          setGood(good + 1)
          break;
        case "neutral":
          setNeutral(neutral + 1)
          break;
        case "bad":
          setBad(bad + 1)
          break;
        default:
          break;
      }
    }
  }

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button renderButtonCLick = {renderButtonCLick} text = "good"/>
        <Button renderButtonCLick = {renderButtonCLick} text = "neutral"/>
        <Button renderButtonCLick = {renderButtonCLick} text = "bad"/>
      </div>
      <div>
        <h2>statistics</h2>
        <Statistics good = {good} bad = {bad} neutral = {neutral} avrg = {avrg} positivePros = {positivePros}/>
      </div>
    </div>
  )
}

export default App