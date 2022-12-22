import React, { useState } from "react";
import "../css/main-page.css";
import exit from "../images/exit.svg";
import vector from "../images/vector.svg"
import SearchForm from "../components/SearchForm";
import Hotel_Item from "../components/Favourite_item";
import Unfavourite_item from "../components/Unfavourite_item";
import FavouriteHotelsList from "../components/FavouriteHotelsList"
import UnfavouriteHotelsList from "../components/UnfavouriteHotelsList"
import { useEffect } from "react";
import Favourite_item from "../components/Favourite_item";

const Main = ({ setPage }) => {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июля", "июня", "августа", "сентября", "октября", "ноября", "декабря"]
    const today = new Date().toISOString().slice(0, 10);
    const [choosedLocation, setChoosedLocation] = useState("Москва")
    const [choosedDate, setChoosedDate] = useState(today.slice(-2) + " " + months[today.slice(-5, -3) - 1] + " " + today.slice(0, 4))
    const [countOfDays, setCountOfDays] = useState("1 день")
    const locationSubmit = (location, date, countOfDays) => {
        setChoosedLocation(location)
        setChoosedDate(date.slice(-2) + " " + months[date.slice(-5, -3) - 1] + " " + date.slice(0, 4))
        switch (countOfDays) {
            case 1:
                setCountOfDays("1 день");
                break;
            case "1":
                setCountOfDays(countOfDays + " день");
                break;
            case "2":
            case "3":
            case "4":
                setCountOfDays(countOfDays + " дня")
                break;
            default:
                setCountOfDays(countOfDays + " дней")
                break;
        }
        console.log(countOfDays)
        console.log(favHotels)
    }
    const [favHotels, setFavHotels] = useState([]);

    return (
        <div className="container">
            <div className="header_box">
                <h2 className="title">
                    Simple Hotel Check
                </h2>
                <p className="exit" onClick={() => { setPage(true)}}>
                    Выход
                    <img src={exit} alt="exit" />
                </p>
            </div>
            <div className="main">
                <div className="main_box">
                    <div className="main__first-column">
                        <div className="main-search-data__box">
                            <SearchForm
                                locationSubmit={locationSubmit}
                            />
                        </div>
                        <div className="main-favourite__box">
                            <h1 className="favourite__title">
                                Избранное
                            </h1>
                            <button className="sort__rating">Рейтинг</button>
                            {/* https://codesandbox.io/embed/table-sorting-example-ur2z9?fontsize=14&amp;hidenavigation=1&amp;theme=dark 
                            https://www.internet-technologies.ru/articles/sozdanie-sortiruemyh-tablic-s-pomoschyu-react.html
                            */}
                            <button className="sort__cost">Цена</button>
                            <div className="favoutite-hotels-list-box">
                                <FavouriteHotelsList choosedDate={choosedDate} countOfDays={countOfDays} favHotels={favHotels} setFavHotels={setFavHotels} />
                            </div>
                        </div>
                    </div>
                    <div className="main__second-column">
                        <div className="main__second-column-box">
                            <div className="main__second-column__header">
                                <h1 className="second-column__title">
                                    Отели
                                    <img src={vector} alt="vector" className="second-column__title-vector" />
                                    <div className="test">
                                        {choosedLocation}
                                    </div>
                                </h1>
                                <div className="second-column__title-trip-start">
                                    {choosedDate}
                                </div>
                            </div>
                            <div className="main__second-column__preview">
                                <div className="main__second-column__preview-scroller">
                                    <div className="main__second-column__preview-item">
                                        <div className="main__second-column__preview-item1"></div>
                                    </div>
                                    <div className="main__second-column__preview-item">
                                        <div className="main__second-column__preview-item2"></div>
                                    </div>
                                    <div className="main__second-column__preview-item">
                                        <div className="main__second-column__preview-item3"></div>
                                    </div>
                                    <div className="main__second-column__preview-item">
                                        <div className="main__second-column__preview-item4"></div>
                                    </div>
                                    <div className="main__second-column__preview-item">
                                        <div className="main__second-column__preview-item4"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="second-column__count-of-favourite">
                                Добавлено в Избранное: <b>0</b> отелей
                            </div>
                            <div className="second-column__hotels-list-box">
                                <UnfavouriteHotelsList choosedLocation={choosedLocation} choosedDate={choosedDate} countOfDays={countOfDays} favHotels={favHotels} setFavHotels={setFavHotels} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;