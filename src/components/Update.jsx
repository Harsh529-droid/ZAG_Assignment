import React from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

    const { id } = useParams();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter new company name'/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Update