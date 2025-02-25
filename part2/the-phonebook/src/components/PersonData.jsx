import personService from '../services/persons';

function PersonData ({ id, name, phone, people, setPeople }) {

    const deletePerson = () => {
        personService
            .kill(id)
            .then((result) => {
                setPeople(people.filter((p) => p.id !== result.id));
            });
    };

    const confirmDeletion = () => {
        if(window.confirm(`delete ${name}?`)) deletePerson();
    };
    
    return <p> {name}: {phone} <button onClick={confirmDeletion}>delete</button> </p>;
}

export default PersonData;
