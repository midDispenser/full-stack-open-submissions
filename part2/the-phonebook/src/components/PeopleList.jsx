import PersonData from './PersonData.jsx';

function PeopleList ({ people, setPeople, query }){

    return (
        <div>
            {query.map(p =>
                <PersonData key={p.id} id={p.id}
                    name={p.name} phone={p.number}
                    people={people} setPeople={setPeople} />
            )}
        </div>
    );
};

export default PeopleList;
