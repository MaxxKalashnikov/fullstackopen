const DisplayPeople = ({persons, searchName}) => {
    return (
        <>
            {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
            .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </>
    )
}

export default DisplayPeople