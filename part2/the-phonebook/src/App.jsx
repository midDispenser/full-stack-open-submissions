import { useState } from 'react';

function PeopleList ({ people }){
    return (
        <div>
            {people.map(p =>
                <PersonData key={p.id} name={p.name} />
            )}
        </div>
    );
};

function PersonData ({ name }) {
    return <p> {name}: number xdd </p>;
}

const App = () => {
    const [persons, setPersons] = useState([{ id:0, name: 'John Doe' }]);
    const [newName, setNewName] = useState('');
    
    const addName = (event) => {
        event.preventDefault();

        const isDupe = persons.some((p) => p.name === newName);
        if(isDupe) {
            alert(`${newName} is already added to phonebook`);
            setNewName('');
            return;
        }

        const newPerson = {
            id: Math.floor(Math.random() * 100),
            name: newName,
        };

        setPersons(persons.concat(newPerson));
        setNewName('');
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    <label for='nameInput'>name: </label>
                    <input name='nameInput' value={newName}
                                 onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div>debug: {newName}</div>

                <div>
                    <button type="submit" onClick={addName}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <PeopleList people={persons} />
        </div>
    );
};

export default App;
