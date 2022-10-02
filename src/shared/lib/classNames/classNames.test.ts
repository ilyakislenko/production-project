import { text } from 'stream/consumers';
import { classNames } from './classNames';

describe('classNames', () => {
    test('Only first parameter', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('With additional class', () => {
        const expected = 'someClass somethingNew1 somethingNew2';
        expect(classNames('someClass', {}, ['somethingNew1', 'somethingNew2']))
            .toBe(expected);
    });
    test('With additional classes and mods', () => {
        const expected = 'someClass somethingNew1 somethingNew2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['somethingNew1', 'somethingNew2'],
        ))
            .toBe(expected);
    });
    test('With additional classes and one of mods false', () => {
        const expected = 'someClass somethingNew1 somethingNew2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['somethingNew1', 'somethingNew2'],
        ))
            .toBe(expected);
    });
    test('With additional classes and one of mods undefined', () => {
        const expected = 'someClass somethingNew1 somethingNew2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['somethingNew1', 'somethingNew2'],
        ))
            .toBe(expected);
    });
});
