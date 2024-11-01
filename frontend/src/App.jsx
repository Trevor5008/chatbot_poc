import { useState, useEffect } from 'react'
import { ContactList } from './components/ContactList'
import { ContactForm } from './components/ContactForm'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [plsFetch, setPlsFetch] = useState(true)

  useEffect(() => {
    if (plsFetch) {
      fetchContacts()
      setPlsFetch(false)
    }
  }, [plsFetch])

  const fetchContacts = async () => {
    fetch('http://127.0.0.1:5000/contacts')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok')
        }
        return resp.json()
      })
      .then((data) => {
        setContacts(data.contacts)
      })
  }

  return (
    <>
      <ContactForm goFetch={() => setPlsFetch(true)} />
      <ContactList contacts={contacts} goFetch={() => setPlsFetch(true)} />
    </>
  )
}

export default App
