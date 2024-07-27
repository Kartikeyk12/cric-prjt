import { createSelector } from '@ngrx/store';
import { StudentState } from './student.reducer';

export const selectStudentState:any = (state: { students: StudentState }) => {
    // console.log('Selector selectAllStudents:', state.students);
    return state.students
};
export const selectAllStudents = createSelector(
  selectStudentState,
  (state: StudentState) => {
    // console.log('Selector selectAllStudents:', state.students);
    return state.students}
);
