import { createReducer, on } from '@ngrx/store';
import { AppStore } from '../app.store';
import { studentsFetchInProgress, studentsFetchSuccess, studentsFetchFailure } from '../actions/students.actions';

// export const studentsReducer = createReducer(AppStore,
//     on(studentsFetchInProgress, state => {
//         return {
//             ...state, students: { isLoading: true, list: [], success: false }
//         }
//     }),
//     on(studentsFetchSuccess, (state, payload) => {
//         return {
//             ...state, students: { isLoading: false, list: payload.list, success: true }
//         }
//     }),
//     on(studentsFetchFailure, state => {
//         return {
//             ...state, students: { isLoading: false, list: [], success: false }
//         }
//     }),
// );