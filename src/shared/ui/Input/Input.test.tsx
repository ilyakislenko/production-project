import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Button', () => {
    test('Test render', () => {
        render(<Input value="TEST" />);
        expect(screen.getByTestId('input-test')).toBeInTheDocument();
    });
});
