import { MainNavigation } from './main-navigation/main-navigation';

export const Layout = ({ children }) => (
	<>
		<MainNavigation />
		<main>{children}</main>
	</>
);
