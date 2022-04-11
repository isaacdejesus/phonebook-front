import React from 'react'
const PersonForm = ({newPhone, newName, handleNewPhone, handleNewPerson, handleSubmit}) => {
    return(
        <div>
        <form onSubmit = {handleSubmit}>
            <div>
            name: 
                <input 
                    value = {newName} 
                    onChange = {handleNewPerson}
                />
            </div>
            <div>
            number: 
                <input
                    value = {newPhone}
                    onChange = {handleNewPhone}
                />
            </div>
            <div>
            <button type="submit"> add</button>
            </div>
        </form>
        </div>
    )
}

export default PersonForm
