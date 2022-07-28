import { useState } from "react";

const Table = ({contacts}) => {
    const [filter, setFilter] = useState("All");
    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    const [searchTerm, setSearchTerm] = useState("");
    const search = (contact) => {
        contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
    }
    let filteredArr = [];
    if(filter === "All") {
        filteredArr = searchTerm ? contacts.filter(contact => contact.group === filter) : contacts
    } else {
        filteredArr = contacts.filter((contact) => contact.group === filter && search(contact))
    }

    // if(searchTerm) {
    //     filteredArr = filteredArr.filter(search)
    // }


    return (
        <>
            <br />
            <div>
                <br />
                Filters:
                <select value={filter} onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
                <input type="search" placeholder="Search" value={searchTerm} onChange={handleChange} />
            </div>
            <table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Email:</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredArr.map((contact, index) =>(
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}
export default Table;