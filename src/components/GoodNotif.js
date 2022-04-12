import React from "react";

const GoodNotif = ({ message}) => {
    if(message === null)
        return null
    return(
        <div className='success'>
            {message}
        </div>
    )
}
 export default GoodNotif