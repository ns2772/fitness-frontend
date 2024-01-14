// /store/reducers/workoutReducer.js
const initialState = {
  workouts: []
};

function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [...state.workouts, action.payload]
      };
    // Add other cases as needed
    default:
      return state;
  }
}

export default workoutReducer;
