import { createAction } from '@ngrx/store'

export const studentsFetchInProgress = createAction('<Students> fetch in progress');
export const studentsFetchSuccess = createAction('<Students> fetch success', () => ({ 'list': [] }));
export const studentsFetchFailure = createAction('<Students> fetch failure');