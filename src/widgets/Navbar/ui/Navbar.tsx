import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinktheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/search-svg-dark.svg';
import LightIcon from 'shared/assets/icons/search-svg-light.svg';
import NotificationDark from 'shared/assets/icons/notification-dark.svg';
import NotificationLight from 'shared/assets/icons/notification-light.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const NavBar = ({ className }: NavbarProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR} className={classNames(cls.search, {}, [className])}>
                    {
                        theme === Theme.DARK ? <LightIcon /> : <DarkIcon />
                    }
                </Button>
                <Button theme={ThemeButton.CLEAR} className={classNames(cls.notification, {}, [className])}>
                    {
                        theme === Theme.DARK ? <NotificationLight /> : <NotificationDark />
                    }
                </Button>
                <AppLink theme={AppLinktheme.SECONDARY} to="/" className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinktheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
