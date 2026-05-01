import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

type Room = {
    id: number,
    name: string,
    type: string,
    capacity: number,
    location: string,
    pricePerHour: number,
    available: boolean
}

export const Card = ({room} : {room: Room}) => {
    const {reserveRoom, cancelReserve, reservedId} = useContext(AppContext)
    const [hours, setHours] = useState(1)

    const isReserved = reservedId.includes(room.id)
    const total = hours * room.pricePerHour

    return(
        <div>
            <p>{room.id}</p>
            <p>{room.name}</p>
            <p>{room.type}</p>
            <p>{room.capacity}</p>
            <p>{room.location}</p>
            <p>{room.pricePerHour}</p>
            <p>{room.available ? "Disponible" : "No disponible"}</p>

            {!isReserved && (
                <div>
                    <input
                        type="number"
                        min={1}
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                    />
                    <p>Total: ${total}</p>
                </div>
            )}

            <button onClick={() => isReserved ? cancelReserve(room.id) : reserveRoom(room.id, hours)}>
                {isReserved ? "Cancelar reserva" : "Reservar"}
            </button>
        </div>
    )
}