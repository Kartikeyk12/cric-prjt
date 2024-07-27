import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadStudents, loadStudentsSuccess, loadStudentsFailure } from '../ngrx-store/student.action';
import { ExampleServiceService } from '../../service/example-service.service';

@Injectable()
export class StudentEffects {

   // ** To Handle data created a effect for store 

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      switchMap(() => 
        this.exampleService.getStudents().pipe(
          map(students => loadStudentsSuccess({ students })),
          catchError(error => of(loadStudentsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private exampleService: ExampleServiceService
  ) {}
}
