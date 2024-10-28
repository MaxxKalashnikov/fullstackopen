import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import DisplayPeople from './components/DisplayPeople'
import phonebookServices from './services/phonebook'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchName, setSearchName] = useState('')
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  useEffect(() => {
    phonebookServices.getAll()
                     .then(people => setPersons(people))
                     .catch(error => {
                      console.log(error)
                    })
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
        <DisplayPeople persons={persons} searchName={searchName} setPersons={setPersons}/>
    </div>
  )
}

export default App