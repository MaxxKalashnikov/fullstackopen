const PersonForm = ({newName, setNewName, phone, setPhone, persons, setPersons}) => {

    function addName(event){
        event.preventDefault()
        let newEntry = { 
          name: newName,
          number: phone 
        }
    
        const checkUniq = persons.filter(person => person.name == newName)
    
        if(checkUniq.length > 0){
          alert(`${newName} is already added to phonebook!`)
        }else{
          setPersons(persons.concat(newEntry))
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
                        onChange={event => setPhone(event.target.value)}
                    />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm