import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const data = {
        age: 22,
        city: 'Tomsk',
        country: Country.Ukraine,
        currency: Currency.RUB,
        first: 'Ilya',
        lastname: 'gamepub',
        username: 'ilusaaxd',
    };
    test('should return form data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
