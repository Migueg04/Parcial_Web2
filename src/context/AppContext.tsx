/* eslint-disable react-refresh/only-export-components */
import {createContext, useState, type PropsWithChildren, } from 'react';
import { dataRoom } from '../data/data';

export type AppContextValue = {
	availableRooms: [];
	message: string;
	setMessage: (value: string) => void;
	resetMessage: () => void;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

const defaultMessage = 'Context API ready';

export function AppContextProvider({ children }: PropsWithChildren) {
	const [message, setMessage] = useState(defaultMessage);
	const [availableRooms, setAvailableRooms] = useState(dataRoom)
	console.log(availableRooms);

	const [filters, setFilters] = useState({
		type:"",
		available: ""
	})
	const filteredRooms = availableRooms.filter((room) =>{
		if(availableRooms){
			
		}

		return(
			(filters.type === "" || room.type === filters.type)//&&
			//(filters.available === "" || room.available === filters.available)
			
		)
	})
	

	const value = {
		message,
		setMessage,
		resetMessage: () => setMessage(defaultMessage),
	};

	return <AppContext.Provider value={{availableRooms, filters, filteredRooms, setFilters}}>
		{children}
	</AppContext.Provider>;
}
