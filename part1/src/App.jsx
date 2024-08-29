const Header = (props) =>{
  console.log(props.course.name)
  return (
    <h1>
      {props.course.name}
    </h1>  
  )
} 

const Part = (props) =>{
  return (
    <p>
      {props.part.name} {props.part.exercises}
   </p>
  )
}

const Content = (props) =>{
  console.log(props.course.parts[0])
  return (
    <div>
      <Part part = {props.course.parts[0]}/>
      <Part part = {props.course.parts[1]}/>
      <Part part = {props.course.parts[2]}/>
    </div>
  )
}

const Total = (props) =>{
  console.log(props.course.parts[0].exercises)
  const totalNum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return (
  <p>
    Number of exercises {totalNum}
  </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App