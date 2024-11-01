import React from "react";

export const ContactList = ({ contacts, goFetch }) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE",
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.ok) {
                alert("Contact deleted successfully");
                goFetch()

            } else {
                alert("An error occurred");
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (!contacts.length) {
        return <p>No contacts</p>;
    }

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button onClick={() => updateContact(contact)}>Edit</button>
                                <button onClick={() => onDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}