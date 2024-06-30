// eslint-disable-next-line react/prop-types
function SearchBar({onSearch}) {

    return (
        <>
            <div className="control">
                <input className="input container mb-5" type="text" placeholder="Character Name"
                       onChange={(event) => {
                           onSearch(event.target.value);
                       }}/>
            </div>
        </>
    );
}

export default SearchBar;