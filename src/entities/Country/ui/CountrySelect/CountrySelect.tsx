import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        const countryOptions = useMemo(
            () => Object.entries(Country).map((val) => ({
                value: val[0],
                content: val[1],
            })),
            []
        );

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Укажите страну')}
                options={countryOptions}
                onChange={onChangeHandler}
                readonly={readonly}
                value={value}
            />
        );
    }
);
