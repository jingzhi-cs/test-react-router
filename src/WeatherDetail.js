import {useState, useEffect} from 'react';
import './App.css';

function WeatherDetail({match}) {

    console.log(match);

    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(
            'https://api.data.gov.sg/v1/environment/air-temperature?date_time=2020-10-01T09%3A45%3A00&date=2020-12-06');
          
          const item = await data.json();
    };

  return (
    <div>
      <h1>Weather Detail</h1>
      
      
    </div>
  );
}

export default WeatherDetail;
