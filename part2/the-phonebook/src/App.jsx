import { useState } from 'react';

function PeopleList ({ people }){
    return (
        <div>
            {people.map(p =>
                <PersonData key={p.id}
                    name={p.name} phone={p.number} />
            )}
        </div>
    );
};

function PersonData ({ name, phone }) {
    return <p> {name}: {phone} </p>;
}

const App = () => {
    const [persons, setPersons] = useState([{
        id:0,
        name: 'John Doe',
        number:'+1 555 555'
    }]);

    const [newPhone, setNewPhone] = useState('');
    const [newName, setNewName] = useState('');

    const addPerson = (event) => {
        event.preventDefault();

        const dupeName = persons.some((p) => p.name === newName);
        if(dupeName) {
            alert(`The name ${newName} is already added to phonebook`);
            setNewName('');
            return;
        }
        // Im aware duplicating this means going through the array twice over,
        // a more efficient option would be to use either a filter, a forEach
        // or make a separate function. however, for now this is simpler for me.
        const dupePhone = persons.some((p) => p.number === newPhone);
        if (dupePhone) {
            alert(`The number ${newPhone} is already added to phonebook`);
            setNewPhone('');
            return;
        }

        const newPerson = {
            id: Math.floor(Math.random() * 100),
            name: newName,
            number: newPhone,
        };

        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewPhone('');
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
                <div>
                    <label for='nameInput'>number: </label>
                    <input name='phoneInput' value={newPhone} type="tel"
                        onChange={(e) => setNewPhone(e.target.value)} />
                </div>
                <div>debug: {newName}</div>
                <div>debug: {newPhone}</div>

                <div>
                    <button type="submit" onClick={addPerson}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <PeopleList people={persons} />
        </div>
    );
};

export default App;
