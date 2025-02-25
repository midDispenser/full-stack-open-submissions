import { useState, useEffect } from 'react';
import personService from '../services/persons';
import axios from 'axios';

const PersonForm = ({persons, setPersons}) => {
    const [newPhone, setNewPhone] = useState('');
    const [newName, setNewName] = useState('');

    const editPhone = (dupe) => {
        // reusing inefficient duplicated code for simplicity
 
        if (dupe) {
            const updatedPerson = {
                name: dupe.name,
                number: newPhone,
            };

            personService
                .update(dupe.id, updatedPerson)
                .then(updated => {
                    setPersons(persons.map(curr => curr.id === dupe.id ? updated : curr));
                    setNewName('');
                    setNewPhone('');
                });
        }
    };

    const addPerson = () => {
        console.log("sex");
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

    const insertHandler = (event) => {
        event.preventDefault();

        const dupePhone = persons.some((p) => p.number === newPhone && p.name === newName);
        if (dupePhone) {
            alert(`The registry "${newName}: ${newPhone}" is already added to phonebook`);
            setNewName('');
            setNewPhone('');
            return;
        };

        const dupe = persons.find(({ name }) => name === newName);
        if (dupe && window.confirm(`${dupe?.name} is already added to the phonebook, ` +
            `replace the old number with ${newPhone}?`)) {
                editPhone(dupe);
                return;
        };

        if(!dupe) addPerson();
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
                <button type="submit" onClick={insertHandler}>add</button>
            </div>
        </form>
    );
};

export default PersonForm;
