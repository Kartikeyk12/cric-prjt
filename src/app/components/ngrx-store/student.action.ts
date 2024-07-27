import { createAction, props } from '@ngrx/store';
import { Student } from '../ngrx-store/student.model';


export const loadStudents = createAction('load');
export const loadStudentsSuccess = createAction(
  'loaded',
  props<{ students: Student[] }>()
);
export const loadStudentsFailure = createAction(
  'not loaded',
  props<{ error: string }>()
);
