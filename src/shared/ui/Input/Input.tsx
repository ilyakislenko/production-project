import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const { t } = useTranslation();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
            data-testid="input-test"
        >
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={classNames(cls.inputContainer, {}, [className])}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={cls.input}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...otherProps}
                />
            </div>
        </div>
    );
});
