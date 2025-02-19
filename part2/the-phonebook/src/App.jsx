import { useState } from 'react';
import PeopleList from './components/PeopleList.jsx';
import SearchBar from './components/SearchBar.jsx';
import PersonForm from './components/PersonForm.jsx';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas',  number: '040-123456',    id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov',  number: '12-43-234345',  id: 3 },
        { name: 'Mary Poppeck', number: '39-23-6423122', id: 4 }
    ]);

    const [query, setQuery] = useState('');
    
    const insideQuery = (person) => person.name.toLowerCase().includes(query);

    return (
        <div>
            <h1>Phonebook</h1>

            <h2>search</h2>
            <SearchBar query={query} setQuery={setQuery}/>

            <h2>add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons} />

            <h2>Numbers</h2>
            <PeopleList people={(query == '') ? persons:persons.filter(insideQuery)}/>
        </div>
    );
};

export default App;
