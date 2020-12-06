import {useState, useEffect} from 'react';
import './App.css';

function Weather() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://api.data.gov.sg/v1/environment/air-temperature?date_time=2020-10-01T09%3A45%3A00&date=2020-12-06');
        
        const items = await data.json();
        console.log(items.metadata.stations);
        setItems(items.metadata.stations);
    }
    

  return (
    <div>
      <h1>Weather</h1>
      
      {items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Weather;
