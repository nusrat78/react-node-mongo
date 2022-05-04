import React from 'react';


const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        fetch(' http://localhost:5000/user ',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })
    }
    return (
        <div>
            <h1>please add a user</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' required></input>
                <br />
                <input type="email" name='email' placeholder='Email' required></input>
                <br></br>
                <input type="submit" value='Add user'></input>
            </form>
        </div>
    );
};

export default AddUser;