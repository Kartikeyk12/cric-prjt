import { Action, createReducer, on } from '@ngrx/store';
import { loadStudentsSuccess, loadStudentsFailure } from '../ngrx-store/student.action';
import { Student } from './student.model'; // Adjust import as needed

export interface StudentState {
  students: Student[];
  error: string | null;
}

export const initialState: StudentState = {
  students: [],
  error: null,
};

//** If dispatched success reducer will update state */

const _studentReducer = createReducer(
  initialState,
  on(loadStudentsSuccess, (state, { students }) => {
    // console.log('processing loadStudentsSuccess:', students); 
    return { ...state, students, error: null };
  }),
  on(loadStudentsFailure, (state, { error }) => {
    // console.log('processing loadStudentsFailure:', error);
    return { ...state, error };
  })
);

export function studentReducer(state: StudentState | undefined, action: Action) {
  return _studentReducer(state, action);
}
