import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: false,
                password: 'test password',
                username: 'test username'
            }
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            error: 'error',
            isLoading: false,
            password: 'test password',
            username: 'test username'
        });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
