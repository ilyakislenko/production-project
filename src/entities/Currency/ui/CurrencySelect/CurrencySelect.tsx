import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        const countryOptions = useMemo(
            () => Object.entries(Currency).map((val) => ({
                value: val[0],
                content: val[1],
            })),
            []
        );

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Укажите валюту')}
                options={countryOptions}
                onChange={onChangeHandler}
                readonly={readonly}
                value={value}
            />
        );
    }
);
