// let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={WriteYourAPIKey}`;
import react, { useEffect, useState } from 'react';
import Weathercard from "./weathercard";
import './style.css';

const Temp = () => {
    const[searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c52e0294f366ae4267a619325218bd1`;
            const res = await  fetch(url);
            const data = await res.json();

            const {temp, humidity, pressure } = data.main;
           const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myWeatherInfo = {
                temp, 
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myWeatherInfo);
        } catch (error){
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    },[]);


    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type="search"
                        placeholder='search...'
                        autoFocus
                        id="search"
                        className="searchTern"
                        value={searchValue}
                        onChange={(ele) =>setSearchValue(ele.target.value)}
                    />

                    <button className='searchButton' type='button'
                    onClick={getWeatherInfo}>
                        search
                    </button>
                </div>
            </div>

            {/* our team card */}
           <Weathercard tempInfo ={tempInfo} />
        </>
    );


};

export default Temp;