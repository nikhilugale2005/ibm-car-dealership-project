import React from "react";

function Register() {
    return (
        <div>
            <h1>Sign-up</h1>

            <form>
                <label>Username</label>
                <input type="text" name="username" />

                <label>First Name</label>
                <input type="text" name="firstName" />

                <label>Last Name</label>
                <input type="text" name="lastName" />

                <label>Email</label>
                <input type="email" name="email" />

                <label>Password</label>
                <input type="password" name="password" />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
