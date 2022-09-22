import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets";
import { ThemeSwitcher } from "shared";

const App = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app',{},[theme])}>
			<NavBar/>
			<AppRouter/>
			<ThemeSwitcher/>
		</div>
	);
};

export default App;
