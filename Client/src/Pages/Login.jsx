import { useState } from "react"

export const Login = ()=>{
    const [user, setUser]= useState({
        email:"",
        password:""
    })

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
       <>
        <section>
        <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src = "/images/login.png"
                                alt = "A man is logging the page"
                                width= "500"
                                height= "500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login Form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
                            <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="text"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <button type = "submit" className="btn btn-submit">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
       </>
    )
}