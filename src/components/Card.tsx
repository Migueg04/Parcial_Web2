import { useContext } from "react"
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
    return(
        <div>
            <p>{room.id}</p>
            <p>{room.name}</p>
            <p>{room.type}</p>
            <p>{room.capacity}</p>
            <p>{room.location}</p>
            <p>{room.pricePerHour}</p>
            <p>{room.available}</p>
            <button>Reservar</button>
        </div>
    )
}