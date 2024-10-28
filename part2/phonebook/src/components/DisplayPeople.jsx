import phonebookServices from "../services/phonebook"
const DisplayPeople = ({persons, searchName, setPersons}) => {
    
    function removePerson(person){
        if (window.confirm(`Do you really want to delete ${person.name}?`)) {
            phonebookServices.remove(person.id)
                         .then(resp => {
                            console.log(resp)
                            setPersons(persons.filter(person => person.id != resp.id))
                         })
        }
    }

    return (
        <>
            {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
            .map(person => 
            <p key={person.name}>{person.name} {person.number} <button onClick={() => removePerson(person)}>Delete</button></p>)}
        </>
    )
}

export default DisplayPeople