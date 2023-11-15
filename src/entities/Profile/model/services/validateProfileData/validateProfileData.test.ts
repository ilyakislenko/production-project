import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    age: 22,
    city: 'Tomsk',
    country: Country.Ukraine,
    currency: Currency.RUB,
    first: 'Ilya',
    lastname: 'gamepub',
    username: 'ilusaaxd',
};
describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('many errors', async () => {
        const result = validateProfileData({ ...data, country: undefined, city: undefined, age: undefined, username: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY, ValidateProfileError.INCORRECT_CITY, ValidateProfileError.INCORRECT_USERNAME]);
    });
});
