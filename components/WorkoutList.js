// /components/WorkoutList.js
import React from 'react';
import { useSelector } from 'react-redux';

function WorkoutList() {
  const workouts = useSelector(state => state.workout.workouts);

  return (
    <div>
      {workouts.map((workout, index) => (
        <div key={index}>{workout.name}</div>
      ))}
    </div>
  );
}

export default WorkoutList;
