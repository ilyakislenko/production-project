import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinktheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";
interface NavbarProps {
	className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinktheme.SECONDARY} to={"/"} className={cls.mainLink}>Главная</AppLink>
				<AppLink theme={AppLinktheme.RED} to={"/about"}>О сайте</AppLink>
			</div>
		</div>
	);
};
