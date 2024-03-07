import { useState } from "react"

export const Contact = ()=>{
    const [contact, setContact] = useState({
        username:"",
        email:"",
        message:""
    })

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading"></h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img
                            src = "/images/support.png"
                            alt = "we are here to help you"
                            width="500"
                            height="500"
                        />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text"
                                    name="username"
                                    placeholder="enter your username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name ="message"
                                    id="message"
                                    required
                                    autoComplete="off"
                                    cols="40"
                                    row="5"
                                    value={contact.message}
                                    onChange={handleInput}
                                ></textarea>
                            </div>
                            <button type = "submit" className="btn btn-submit">Submit</button>
                        </form>
                    </section> 
                </div>

                <section className="mb-3">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8488029730156!2d77.44338137570048!3d28.634293284000304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709801700355!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        allowfullscreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </section>
        </>
    )
}