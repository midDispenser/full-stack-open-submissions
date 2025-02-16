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
        <h2> {title} </h2>
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

export default Course;
