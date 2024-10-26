const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part}/>)}
        <p><b>
          total of {parts.reduce((acc, currentValue) => acc + currentValue.exercises, 0)} exercises
        </b></p>
      </div>
    )
  }
  
  const Header = ({header}) => {
    return (
      <h2>{header}</h2>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
      </div>
    )
  }

export default Course