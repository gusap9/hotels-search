import React, { useState, useEffect } from "react";
import Unfavourite_item from "./Unfavourite_item";

const UnfavouriteHotelsList = ({ choosedLocation, choosedDate, countOfDays, favHotels, setFavHotels }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hotels, setHotels] = useState([]);
    
    useEffect(() => {
        fetch(`https://engine.hotellook.com/api/v2/lookup.json?query=${choosedLocation}&lang=ru&lookFor=hotel&limit=10`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setHotels(result.results.hotels);
                },
                (error) => {
                    setIsLoaded(true);
                    setHotels(error);
                    console.log(error)
                }
            )
    }, [choosedLocation])

    const unfavToFav = (id) => {
        for (let i = 0; i < hotels.length; i++) {
            if (hotels[i].id === id) {
                if (favHotels.includes(hotels[i]) === true) {
                    break
                } else {
                    setFavHotels([hotels[i], ...favHotels])
                }
            }
        }
    }
    if (error) {
        return (
            <div className="second-column__hotels-list">
                <div>
                    Ошибка: {error.message}
                </div>
            </div>
        )
    } else if (!isLoaded) {
        return (
            <div className="second-column__hotels-list">
                <div>Загрузка...</div>
            </div>
        )
    } else if (choosedLocation) {
        return (
            <div className="second-column__hotels-list">
                {hotels.map(hotel => (
                    <Unfavourite_item unfavToFav={unfavToFav} hotel={hotel} name={hotel.label} key={hotel.id} choosedDate={choosedDate} countOfDays={countOfDays} />
                ))}
            </div>
        );
    }
}

export default UnfavouriteHotelsList;
