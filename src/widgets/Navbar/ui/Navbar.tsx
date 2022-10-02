import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'shared';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinktheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const NavBar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinktheme.SECONDARY} to="/" className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinktheme.RED} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
