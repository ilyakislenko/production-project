import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
        age: 22,
        city: 'Tomsk',
        country: Country.Ukraine,
        currency: Currency.RUB,
        first: 'Ilya',
        lastname: 'gamepub',
        username: 'ilusaaxd',
    };
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
