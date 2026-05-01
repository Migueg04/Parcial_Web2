/* eslint-disable react-refresh/only-export-components */
import {createContext, useState, type PropsWithChildren} from 'react';
import { dataRoom } from '../data/data';

export const AppContext = createContext<any>(undefined);

export function AppContextProvider({ children }: PropsWithChildren) {
	const [message, setMessage] = useState('Context API ready');
	const [availableRooms, setAvailableRooms] = useState(dataRoom)

	const [filters, setFilters] = useState({ type:"", available: "" })

	const filteredRooms = availableRooms.filter((room) =>{
		return(
			(filters.type === "" || room.type === filters.type)&&
			(filters.available === "" || room.available === filters.available)
		)
	})

	const [reservedId, setReservedId] = useState<number[]>([])
	const [reservations, setReservations] = useState<{id: number, total: number}[]>([])

	const reserveRoom = (id: number, hours: number) => {
		const room = availableRooms.find((r) => r.id === id);
		if (!room || !room.available) return;

		setAvailableRooms((prev) =>
			prev.map((r) => (r.id === id ? { ...r, available: false } : r))
		);
		setReservedId((prev) => [...prev, id]);
		setReservations((prev) => [...prev, { id, total: hours * room.pricePerHour }])
	};

	const cancelReserve = (id: number) => {
		setAvailableRooms((prev) =>
			prev.map((r) => (r.id === id ? { ...r, available: true } : r))
		);
		setReservedId((prev) => prev.filter((itemId) => itemId !== id));
		setReservations((prev) => prev.filter((r) => r.id !== id))
	};

	return <AppContext.Provider value={{reservedId, reservations, reserveRoom, cancelReserve, availableRooms, filters, filteredRooms, setFilters}}>
		{children}
	</AppContext.Provider>;
}