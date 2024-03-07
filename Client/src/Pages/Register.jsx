import { useState } from "react"

export const Register = ()=>{
    const [user,setUser] = useState({
        phone:"",
        password:"",
        email:"",
        phone:""
    })

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        console.log(e);

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user);
    }

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src = "/images/register.png"
                                alt = "A girl is registring herself"
                                width= "500"
                                height= "500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
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
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number"
                                        name="phone"
                                        placeholder="Enter your phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
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
    )
}