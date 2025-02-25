import PersonData from './PersonData.jsx';

function PeopleList ({ people, setPeople, query }){

    const filteredPeople = (query == '') ? people:people.filter(insideQuery);

    return (
        <div>
            {filteredPeople.map(p =>
                <PersonData key={p.id} id={p.id}
                    name={p.name} phone={p.number}
                    people={people} setPeople={setPeople} />
            )}
        </div>
    );
};

export default PeopleList;
