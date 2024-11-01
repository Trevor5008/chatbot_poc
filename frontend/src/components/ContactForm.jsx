import { useState } from 'react';
import '../styles/ContactForm.css';

export const ContactForm = ({ goFetch }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const resetForm = () => { 
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { 
            firstName, lastName, email
         };

        const url = "http://127.0.0.1:5000/create_contact";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, options);

        if (response.ok) {
            alert("Contact added successfully");
            // Reset fields
            resetForm();
            // Trigger a fetch
            goFetch()
        } else {
            alert("An error occurred");
        }

        goFetch()
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text" 
                    id="first_name" 
                    name="first_name"
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text" 
                    id="last_name" 
                    name="last_name" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">Add Contact</button>
        </form>
        </section>
    )
}