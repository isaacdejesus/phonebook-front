import {useState, useEffect} from 'react'
import axios from 'axios'
import personsService from './services/persons.js'
import PersonForm from './components/PersonForm.js'
import GoodNotif from './components/GoodNotif'
import BadNotif from './components/BadNotif'
import Records from './components/Records.js'
const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [successMsg, setSuccessMsg] = useState(null)
    const [errMsg, setErrMsg] = useState(null)
    useEffect(() => {
            personsService
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])
    const handleNewPerson = (event) => {
        setNewName(event.target.value) 
    }
    const handleNewPhone = (event) => {
        setNewPhone(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const checkName = persons.find(person => person.name === newName)
        if(checkName){
            const updateNum = window.confirm(`${newName} is already in the phonebook. would you like to replace the old number with the new one?`)
            if(!updateNum)
                return
            const updatedPerson = { ...checkName, number:newPhone  }
            personsService
                .update(checkName.id, updatedPerson)
                .then(returnedPerson => {
                    setPersons(persons.map(person => person.id !== checkName.id ? person : returnedPerson))
                    setNewName('')
                    setNewPhone('')
                    setSuccessMsg(`Record '${checkName.name}' successfully updated`)
                    setTimeout(() => {
                        setSuccessMsg(null)
                    }, 2000)
                })
                .catch(error => {
                    setErrMsg(`Record does not exist`)
                    setTimeout(() => {
                    setErrMsg(null)
                    }, 3000);
                    setPersons(persons.filter(person => person.id !==checkName.id))
                    setNewName('')
                    setNewPhone('')
                })
        }
        else if(!checkName){
        const newPerson = {
            name: newName,
            number: newPhone,
            id: persons.length+ 1
        }
        personsService
            .create(newPerson)
            .then(returnedPerson => {
                console.log("promise success")
                setPersons(persons.concat(returnedPerson))
                setSuccessMsg(`Record '${returnedPerson.name}' has been added`)
                setTimeout(() => {
                    setSuccessMsg(null)
                }, 3000)
                setNewName('')
                setNewPhone('')
                //setPersons(persons.concat(newPerson))
                })
            .catch(error => {
                alert("somethi")
            })
            }
    }
    const handleDel = id => {
        const maybe = window.confirm("Do you really want to delete record?")
        if(!maybe)
            return
        const toDel = persons.find(person => person.id === id)
        //console.log(toDel.name)
        personsService
            .del(id)
            .then(persontoDel => {
                setPersons(persons.filter(person => person.id !== toDel.id ))
            })
            .catch(error => {
                alert(`person '${toDel.name}' has already been deleted`)
                setPersons(persons.filter(person => person.id !== toDel.id ))
            })
    }
   return(
        <div>
            <h2> Phonebook </h2>
            <GoodNotif message = {successMsg}/>
            <BadNotif message={errMsg}/>
            <PersonForm 
                newName = {newName}
                newPhone = {newPhone}
                handleNewPhone = {handleNewPhone}
                handleNewPerson = {handleNewPerson}
                handleSubmit = {handleSubmit}
            />
            <h3> Records </h3>
            <Records persons = {persons} handleDel= {handleDel}/>
        </div>
    )
}

export default App














































