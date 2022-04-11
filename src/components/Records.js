import React from 'react'
const Records = ({persons, handleDel}) =>
{
    return(
        <div>
        {persons.map(person => 
           <p 
                key={person.id}> 
                {person.name} 
                {person.number}
                <button onClick={() => handleDel(person.id)}> Delete</button>
            </p>)}
        </div>
        )
}
export default Records
