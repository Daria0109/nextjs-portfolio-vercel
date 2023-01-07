import { useContext } from 'react';
import { MainNavigation } from './main-navigation/main-navigation';
import { RequestStatusContext } from '../../providers/request-status/request-status';
import Notification from '../ui/notification/notification';

export const Layout = ({ children }) => {
	const { notification } = useContext(RequestStatusContext);

	return (
		<>
			<MainNavigation />
			<main>{children}</main>
			{notification && <Notification />}
		</>
	);
};
