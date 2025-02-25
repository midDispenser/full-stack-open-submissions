import { useState, useEffect } from 'react';
import axios from 'axios'
import PeopleList from './components/PeopleList.jsx';
import SearchBar from './components/SearchBar.jsx';
import PersonForm from './components/PersonForm.jsx';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Loading',  number: '...',    id: 1 },
    ]);
    
    useEffect(()=>{
        axios.get('http://localhost:3001/persons').then((response) =>{
            console.log('initializing axios get');
            setPersons(response.data);
        });
    }, []);

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
