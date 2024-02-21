import { useState } from "react";

export const SearchInput = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            <button type="submit"></button>
        </form>

    )
}