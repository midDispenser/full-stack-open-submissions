const SearchBar = ({ query, setQuery }) => {
    return (
        <div>
            <label htmlFor="searchBar"> search name </label>
            <input name="searchBar" value={query}
                onChange={(e) => setQuery(e.target.value)} />
        </div>
    );
};

export default SearchBar;
