import {useState} from 'react';

// eslint-disable-next-line react/prop-types
function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(searchTerm);

    };
    return (
        <>
            <div className="control">
                <input className="input container mb-5" type="text" placeholder="Character Name"
                       onChange={handleChange}/>
            </div>

        </>
    );
}

export default SearchBar;