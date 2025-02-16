const Course = ({course}) => {
    return (
        <div>
            <Header title={course.name} />
            <Contents parts={course.parts} />
            <b><Total parts={course.parts} /></b>
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

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        courses.map(course => <Course key={course.id} course={course} /> )
    );
};

export default App;
