import axios from "axios";
import {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard.jsx";
import SearchBar from "./SearchBar.jsx"
import "./App.css";

function App() {
    const [characterInfos, setCharacterInfos] = useState([]);
    const [filteredCharacterInfos, setFilteredCharacterInfos] = useState([]);

    useEffect(() => {
        const fetchAllCharacters = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character`);
                setCharacterInfos(response.data.results);
                setFilteredCharacterInfos(response.data.results);
            } catch (error) {
                console.error("Veri çekerken hata oluştu:", error);
            }
        }

        fetchAllCharacters().then();
    }, []);

    const handleSearch = (searchTerm) => {
        const filteredCharacters = characterInfos.filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCharacterInfos(filteredCharacters);
    };

    return (
        <div className="box is-radiusless">
            <SearchBar onSearch={handleSearch}/>
            <CharacterCard characterInfos={filteredCharacterInfos}/>
        </div>
    );
}

export default App;