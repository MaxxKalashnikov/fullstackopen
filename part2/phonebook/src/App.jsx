import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import DisplayPeople from './components/DisplayPeople'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchName, setSearchName] = useState('')
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
         .then(response => setPersons(response.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchName={searchName} setSearchName={setSearchName}/>
        <h3>Add new</h3>
        <PersonForm 
          newName={newName} 
          setNewName={setNewName} 
          phone={phone} 
          setPhone={setPhone} 
          persons={persons}
          setPersons={setPersons}
        />
      <h2>Numbers</h2>
        <DisplayPeople persons={persons} searchName={searchName}/>
    </div>
  )
}

export default App