import { useEffect, useState } from 'react';
import './App.css';
import { toast } from 'react-toastify';

function Submit() {

    const [username, SetuserName] = useState("")
    const [email, SetEmail] = useState("")

    const HandleSubmit = (e) => {
        e.preventDefault()
        if (email === "") return toast.error("email is requierd")
        fetch("http://localhost:8000/new/users", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username: username,
                email: email
            })

        }).then((response) => response.json())
            .finally(toast.success('success'))
    }


    return (
        <div>

            <div className='d-flex mt-10 justify-content-center item-center'>

                <form method='post' onSubmit={HandleSubmit} >

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">UserName</label>
                        <input type="text" onChange={(e) => SetuserName(e.target.value)} name="username" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="" >
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" onChange={(e) => SetEmail(e.target.value)} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Submit;
