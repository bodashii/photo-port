import React, { useState} from "react";

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { name, email, message } =formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        console.log(formState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    
    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange} defaultValue={name} />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onChange={handleChange} defaultValue={email} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onChange={handleChange} defaultValue={message} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
export default ContactForm;