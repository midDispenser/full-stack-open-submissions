const Header = ({title}) => {
    return (
        <h1> {title} </h1>
    );
};

const Part = ({subject, counter}) => {

    return (
        <>
           <p> {subject} {counter} </p>
        </>
    );
};

const Contents = ({parts}) => {

    return (
        <div>
            <Part
                subject={parts[0].name}
                counter={parts[0].exercises} />
            <Part
                subject={parts[1].name}
                counter={parts[1].exercises} />
            <Part
                subject={parts[2].name}
                counter={parts[2].exercises} />
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
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


  return (
    <div>
        <Header title={ course.name }/>
        <Contents parts={ course.parts } />
        <Total parts={ course.parts } />
    </div>
  );
};

export default App;
