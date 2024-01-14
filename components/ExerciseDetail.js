import React from 'react';

function ExerciseDetail({ exercise }) {
  return (
    <div>
      <h2>{exercise.name}</h2>
      <p>Sets: {exercise.sets}</p>
      <p>Reps: {exercise.reps}</p>
    </div>
  );
}

export default ExerciseDetail;
