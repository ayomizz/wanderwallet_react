import React, { useState } from 'react';
import axios from 'axios'; // Для выполнения HTTP запросов
import BudgetInput from './components/BudgetInput';
import FlightTickets from './components/FlightTickets';
import HotelsInput from './components/HotelsInput';
import FlightResults from './components/FlightResults';
import HotelResults from './components/HotelResults';
import {Container, Box, Typography, Button} from '@mui/material';

function App()
{
    const [budget, setBudget] = useState(0);
    const [dateFly, setDate] = useState([]);
    const [FlightResults, setFlights] = useState([]);
    const [hotelResults, setHotels] = useState([]);

    const handleBudgetChange = (e) =>
        setBudget(Number(e.target.value));
    const handleDateFlychange = (date) =>
        setDate(date);

    const handleSubmit = async () =>
    {
        try
        {
            // Передаем бюджет и дату полета на сервер
            const response = await axios.post('http://localhost:3001/budget',
                {
                budget,
                dateFly
                });
            // Запросы на сервер для получения рейсов и отелей
            const flightResponse = await axios.get(`http://localhost:3001/flights?date=${dateFly}`);
            const hotelResponse = await axios.get(`http://localhost:3001/hotels?budget=${budget}`);

            // Обработка полученных результатов
            setFlights(flightResponse.data);
            setHotels(hotelResponse.data);
        }
        catch (error)
        {
            console.error(error);
        }
    }

    return (
        <Container>
            <Box sx={{ m: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Travel Booking
                </Typography>
                <budget budget={budget} onChange={handleBudgetChange} />
                <dateFly value = {dateFly} onChange={handleDateFlychange} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <FlightResults flights={FlightResults} />
                <HotelResults hotels={hotelResults} />
                </Box>
            </Container>
    );
}

export default App;
