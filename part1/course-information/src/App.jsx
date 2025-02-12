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

const Contents = ({subjects, counters}) => {

    return (
        <div>
            <Part
                subject={subjects[0]}
                counter={counters[0]} />
            <Part
                subject={subjects[1]}
                counter={counters[1]} />
            <Part
                subject={subjects[2]}
                counter={counters[2]} />
        </div>
    );
};

const Total = ({sum}) => {

    return (
        <p>Number of exercises {sum} </p>
    );
};

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

  return (
    <div>
        <Header title={course}/>
        <Contents
            subjects={[part1, part2, part3]}
            counters={[exercises1, exercises2, exercises3]} />
        <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
