import PersonData from './PersonData.jsx';

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

export default PeopleList;
