const Filter = ({searchName, setSearchName}) => { 
    return (
        <>
            <div>
            filter by name: <input 
                                type='text'
                                value={searchName} 
                                onChange={event => {
                                setSearchName(event.target.value)
                                }}
                            />
            </div>
        </>
    )
}

export default Filter