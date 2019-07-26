import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StudentsService } from './students.service';

@Injectable()
export class StudentEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('<Students> fetch in progress'),
        mergeMap(() => this.studentsService.getStudentsList()
            .pipe(
                map(students => ({ type: '<Students> fetch success', payload: students })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private studentsService: StudentsService
    ) { }
}