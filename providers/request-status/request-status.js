import { createContext, useMemo, useState, useEffect } from 'react';

export const Status = {
	PENDING: 'pending',
	SUCCESS: 'success',
	ERROR: 'error'
};

export const RequestStatusContext = createContext({
	notification: null,
	toggleNotification: () => {}
});

export const RequestStatusProvider = ({ children }) => {
	const [activeNotification, setActiveNotification] = useState(null);

	const toggleRequestStatusNotification = (data) => {
		setActiveNotification(data);
	};

	useEffect(() => {
		let timer;
		if (activeNotification?.status === Status.SUCCESS || activeNotification?.status === Status.ERROR) {
			timer = setTimeout(() => {
				toggleRequestStatusNotification(null);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [activeNotification?.status]);

	const contextProps = useMemo(() => ({
		notification: activeNotification,
		toggleNotification: toggleRequestStatusNotification
	}), [activeNotification]);

	return (
		<RequestStatusContext.Provider value={contextProps}>
			{children}
		</RequestStatusContext.Provider>
	);
};
