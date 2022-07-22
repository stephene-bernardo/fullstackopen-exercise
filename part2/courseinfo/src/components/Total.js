const Total = ({parts}) => {
    const totalExercise = parts.map(part => part.exercises).reduce((total, exercise) => total + exercise)
    return (<p>Number of exercises {totalExercise} </p>)
}

export default Total;