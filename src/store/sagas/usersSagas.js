import { call, put } from 'redux-saga/effects';
import { userLoggedIn } from '../actions/auth/';
import { createUserFailure } from '../actions/auth/users';
import api from '../api';
import history from '../history';

export function* createUserSignUp({payload}) {
    try {
        const user = yield call(api.user.signup, payload);
        // localStorage.bookwormJWT = user.token;
        yield put(userLoggedIn(user));
        // history.push('/');
    } catch (err) {
        yield put(createUserFailure(err.response.data.errors));
    }
}