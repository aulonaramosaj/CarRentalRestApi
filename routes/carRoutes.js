const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

// Filter Rental Cars
router.get('/rental-cars', async (req, res) => {
    try {
        let{year, color, steering_type, number_of_seats} = req.query;
        const filters = {};
        if (year) {
            filters.year = parseInt(year);
        }
        if (color) {
            filters.color = color;
        }
        if (steering_type) {
            filters.steering_type = steering_type;
        }
        if (number_of_seats) {
            filters.number_of_seats = parseInt(number_of_seats);
        }
        const cars = await Car.find(filters).sort({ price_per_day: 1 });
        res.json(cars);
    } catch (error) {
        res.status(500).send("Server error");
    }
});

// Create a new Rental Car
router.post('/rental-cars', async (req, res) => {
    try {
        const { name, price_per_day, year, color, steering_type, number_of_seats } = req.body;

        if (!name || !price_per_day || !year || !color || !steering_type || !number_of_seats) {
            return res.status(400).json({ msg: "Please provide all required fields." });
        }

        const newCar = new Car({
            name,
            price_per_day,
            year,
            color,
            steering_type,
            number_of_seats
        });

        await newCar.save();

        res.status(201).json({ msg: "Car added successfully!", car: newCar });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;
