import { useState, useEffect } from 'react';
import personService from '../services/persons';
import axios from 'axios';

const PersonForm = ({persons, setPersons}) => {
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
        };

        const newPerson = {
            name: newName,
            number: newPhone,
        };

        personService
            .create(newPerson)
            .then(response => {
                setPersons(persons.concat(response));
                setNewName('');
                setNewPhone('');
            });
        
    };

    return (
        <form>
            <div>
                <label htmlFor='nameInput'>name: </label>
                <input name='nameInput' value={newName}
                    onChange={(e) => setNewName(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor='nameInput'>number: </label>
                <input name='phoneInput' value={newPhone} type="tel"
                    onChange={(e) => setNewPhone(e.target.value)} />
            </div>
            
            <div>
                <button type="submit" onClick={addPerson}>add</button>
            </div>
        </form>
    );
};

export default PersonForm;
