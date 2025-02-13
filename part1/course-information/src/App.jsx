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

const Total = ({sum}) => {

    return (
        <p>Number of exercises {sum} </p>
    );
};

const App = () => {
    const course = 'Half Stack application development'

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }

    const part3 = {
        name: 'State of a component',
        exercises: 14
    }


  return (
    <div>
        <Header title={course}/>
        <Contents parts={ [part1, part2, part3] } />
        <Total sum={ part1.exercises + part2.exercises + part3.exercises } />
    </div>
  );
};

export default App;
