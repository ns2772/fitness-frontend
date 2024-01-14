export async function fetchWorkouts() {
  try {
    const response = await fetch('/api/workouts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

export async function fetchExerciseDetails(exerciseId) {
  try {
    const response = await fetch(`/api/exercises/${exerciseId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
