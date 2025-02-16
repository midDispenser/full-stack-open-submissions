const Course = ({course}) => {
    return (
        <div>
            <Header title={course.name} />
            <Contents parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Header = ({title}) => {
    return (
        <h1> {title} </h1>
    );
};

const Part = ({subject, counter}) => {

    return (
        <p> {subject} {counter} </p>
    );
};

const Contents = ({parts}) => {
    return (
        <div>
            {parts.map((part) =>
                <Part key={part.id}
                      subject={part.name}
                      counter={part.exercises} />
            )}
        </div>
    );
};

const Total = ({parts}) => {
    const total = parts.reduce((sum, current) => sum + current.exercises, 0);

    return (
        <p> Number of exercises {total} </p>
    );

};

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }

        ]
    };


    return <Course course={course} />;
};

export default App;
