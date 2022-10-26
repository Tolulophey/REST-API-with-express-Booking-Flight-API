const express = require("express");
const { json } = require("express");
const flights = require("./flights.json")
const {v4: uuid} = require("uuid")
const fs = require("fs")



const app = express();

app.use(json());

const port = process.env.PORT || 3000;

//Add/Book flight
app.post("/flights", async (req, res) => {
    try {
        const {title, time, price, date} = await req.body
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date
        }
        flights.push(newFlight)
        let stringData = JSON.stringify(flights, null, 2)
        fs.writeFile("flights.json", stringData, (err)=>{
            if (err) throw err
        })
        res.status(200).json({
            message: "flight added",
            newFlight
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


//get all flights
app.get("/flights", (req, res) => {
    try {
       res.status(200).json({
        message: "All flights",
        flights
       })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


//get a single flight
app.get("/flights/:id", (req, res) => {
    try {
        const id = req.params.id
        const flight = flights.find((flight)=>String(flight.id) === id)
        res.status(200).json({
            message: "flight found",
            flight
       })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


//update a flight
app.put("/flights/:id", async (req, res) => {
    try {
        let id = req.params.id
        const flight = flights.find((flight)=>String(flight.id) === id)
        const {title, time, price, date} = await req.body
        flight.title = title
        flight.time = time
        flight.price = price
        flight.date = date
        let stringData = JSON.stringify(flights, null, 2)
        fs.writeFile("flights.json", stringData, (err)=>{
            if (err) throw err
        })
        res.status(200).json({
            message: "flight updated",
            flight
       })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


//delete flight
app.delete("/flights/:id", (req, res) => {
    try {
        const id = req.params.id
        const flight = flights.find((flight)=>String(flight.id) === id)
        flights.splice(flights.indexOf(flight), 1)
        res.status(200).json({
            message: "flight deleted",
            flight
       })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
