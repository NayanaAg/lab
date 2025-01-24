import {useState} from "react";

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

export default ({ onSearch}: SearchProps) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Search..." value={query} onChange={handleInputChange} />
        </div>
    )
}