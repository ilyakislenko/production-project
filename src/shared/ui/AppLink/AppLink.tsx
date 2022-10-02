import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinktheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}
interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinktheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = AppLinktheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
