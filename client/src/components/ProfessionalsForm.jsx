import React, { useCallback } from "react"
import { withRouter } from "react-router"
import app from "../firebase"

const ProfessionalsForm = ({history}) => {
    
    const handleProfessionalsForm = useCallback(async event => {
        event.preventDefault()
        const { name, occupation, employer, avatar, phonenumber, address } = event.target.elements
        try {
            await app
                .auth()
                .createProfessionalsForm(name.value, occupation.value, employer.value, avatar.value, phonenumber.value, address.value)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div>
        <h1>Professionals Form</h1>
            <form onSubmit={handleProfessionalsForm} >
                <label>
                    Name
                    <input name='name' type='text' placeholder='Name' />
                </label>
                <label>
                    Occupation
                    <input name='occupation' type='text' placeholder='Occupation' />
                </label>
                <label>
                    Employer
                    <input name='employer' type='text' placeholder='Employer' />
                </label>
                <label>
                    Avatar
                    <input name='avatar' type='image' placeholder='Avatar' />
                </label>
                <label>
                    Phone Number
                    <input name='phone number' type='tel' placeholder='Phone Number' />
                </label>
                <label>
                    Address
                    <input name='address' type='text' placeholder='Address' />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(ProfessionalsForm)