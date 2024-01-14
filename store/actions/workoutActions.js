// /store/actions/workoutActions.js
export function addWorkout(workout) {
  return {
    type: 'ADD_WORKOUT',
    payload: workout
  };
}
