import {useState} from 'react'
import PersonForm from './components/PersonForm.js'
import Records from './components/Records.js'
const App = () => {
    const [persons, setPersons] = useState([
            {name: "Isaac Reyes", number: "09-22722", id: 1},
            {name: "Teresa Mur", number: "08-22022", id: 2},
            {name: "Tristan Uno", number: "03-28222", id: 3},
            {name: "Joseph Roj", number: "07-22622", id: 4},
        ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const handleNewPerson = (event) => {
        setNewName(event.target.value) 
    }
    const handleNewPhone = (event) => {
        setNewPhone(event.target.value)
        console.log(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const checkName = persons.find(person => person.name === newName)
        if(checkName)
            alert(`${newName} is already in the phonebook`)
        else if(!checkName){
        const newPerson = {
            name: newName,
            number: newPhone,
            id: persons.length+ 1
        }
        setPersons(persons.concat(newPerson))
            }}
   return(
        <div>
            <h2> Phonebook </h2>
            <PersonForm 
                newName = {newName}
                newPhone = {newPhone}
                handleNewPhone = {handleNewPhone}
                handleNewPerson = {handleNewPerson}
                handleSubmit = {handleSubmit}
            />
            <h3> Records </h3>
            <Records persons = {persons}/>
        </div>
    )
}

export default App














































