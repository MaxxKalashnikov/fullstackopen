import phonebookServices from "../services/phonebook"
const PersonForm = ({newName, setNewName, phone, setPhone, persons, setPersons}) => {

    function addName(event){
        event.preventDefault()

        let newEntry = { 
          name: newName.trim(),
          number: phone 
        }
    
        const checkUniq = persons.filter(person => person.name == newName.trim())
    
        if(checkUniq.length > 0){
          if (window.confirm(`${checkUniq[0].name} is already added to the phonebook, replace the old number with a new one?`)) {
            const objectToUpdate = { ...checkUniq[0], number: phone}
            console.log(objectToUpdate)
            phonebookServices.update(checkUniq[0].id, objectToUpdate)
            .then(res => {
              const newPersonsList = persons.filter(person => person.name != res.name)
              setPersons(newPersonsList.concat(res))
            })
          }else{
              console.log('the answer was no')
          }
        }else{
          phonebookServices.create(newEntry).then(updatedPersonsList => setPersons(persons.concat(updatedPersonsList)))
          .catch(error => {
            console.log(error)
          })
        }  
    
        setNewName('')
        setPhone('')
      }


    return (
        <form onSubmit={addName}>
            <div>
            name: <input 
                    type='text' 
                    value={newName} 
                    onChange={event => setNewName(event.target.value)}
                    />
            </div>
            <div>
            number: <input 
                        type='text'
                        value={phone}
                        onChange={event => setPhone(event.target.value.trim())}
                    />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm