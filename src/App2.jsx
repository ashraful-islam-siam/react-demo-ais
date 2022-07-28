import React, { useState } from "react";
import ContactForm from "./components/contact-form/ContactFrom";
import Table from "./components/contact-form/Table";
const App = () => {
    const [contacts, setContacts] = useState([]);
    const getContact = (contact) => {
        setContacts([].concat(contacts, contact))
    }
  return <div>
    <h1>Contact App</h1>
    <ContactForm getContact={getContact} />
    <Table contacts={contacts}/>
  </div>;
};

export default App;
