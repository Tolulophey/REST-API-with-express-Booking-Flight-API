# Booking Flight API

## Getting Started

### Pre-requisites and Local Development 
Developers using this project should already have Node installed on their local machines.

#### Setting Up

To get started open your terminal and clone this repository by running the code below
```
git clone https://github.com/Tolulophey/REST-API-with-express-Booking-Flight-API.git
```
Move into the cloned directory by running
```
cd REST-API-with-express-Booking-Flight-API
```
You can then install all the dependencies for the project by runing the code below inside your terminal in the project directory
```
npm install
```

After installing all the dependencies, to start the server run the code below inside your terminal
```
npm run dev
```

These commands put the application in development mode and directs our application to use the index.js file.

## Booking Flight API Reference

### Getting Started
- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted at the default, `http://127.0.0.1:3000/` expect if another port is specified. 
- Authentication: This version of the application does not require authentication or API keys. 


**Note: All https requests can be make using postman app or any other similar app or extension**

### Error Handling
Errors are returned as JSON objects in the following format:
```
{
    "message": "resource not found"
}
```
The API will return four error types when requests fail:
- 404: Resource Not Found
- 500: Server error 

### Endpoints 

#### POST /flights
- General:
    - create a new flight relative to the details supllied
    - Request Body: the body will be passed as a rawjson data
    ```
    {
    "title": "flight to united states",
    "time": "4pm",
    "price": 53000,
    "date": "07-07-2022"
    }
    ```
    - Returns: a single new flight object
- Sample: `http://127.0.0.1:3000/flights`
```
{
    "message": "flight added",
    "newFlight": {
        "id": "69977822-eb95-4a97-9c84-408f344d6f75",
        "title": "flight to united states",
        "time": "4pm",
        "price": 53000,
        "date": "07-07-2022"
    }
}
```

#### GET /flights
- General:
    - Fetches a object of flights
    - Request Arguments: None 
    - Returns: An object with a single key, categories, that contains an object of id: category_string key:value pairs
- Sample: `http://127.0.0.1:3000/flights`

``` {
    "message": "All flights",
    "flights": [
        {
            "id": "b34aba4c-9a56-481d-b009-770eee8a3ffb",
            "title": "flight to united states",
            "time": "4pm",
            "price": 53000,
            "date": "07-07-2022"
        },
        {
            "id": "7a46af77-1039-4c19-8fd0-1ee333fea3a0",
            "title": "flight to canada",
            "time": "1pm",
            "price": 26000,
            "date": "26-06-2022"
        }
    ]
}
```

#### GET /flights/:id
- General:
    - Fetches a single user whose id is passed as parameter in the request url
    - Request Arguments: id of the flight
    - Returns: An object with details of the flight whose id was passed as parameter
- Sample: `http://127.0.0.1:3000/flights/7a46af77-1039-4c19-8fd0-1ee333fea3a0`
```
{
    "message": "flight found",
    "flight": {
        "id": "7a46af77-1039-4c19-8fd0-1ee333fea3a0",
        "title": "flight to canada",
        "time": "1pm",
        "price": 26000,
        "date": "26-06-2022"
    }
}
```

#### PUT /flights/:id
- General:
    - edit/update a specified flight using the id of the flight
    - Request Arguments: the http url containing the id of the flight and a raw json data request body in the format below
    ```
    {
    "title": "flight to canada",
    "time": "5pm",
    "price": 10000,
    "date": "11-07-2022"
    }
    ```
    - Returns: status message(flight updated) with the new details of the flight.
- Sample: `http://127.0.0.1:3000/flights/b34aba4c-9a56-481d-b009-770eee8a3ffb`
```
{
    "message": "flight updated",
    "flight": {
        "id": "b34aba4c-9a56-481d-b009-770eee8a3ffb",
        "title": "flight to canada",
        "time": "5pm",
        "price": 10000,
        "date": "11-07-2022"
    }
}
```

#### DELETE /flights/:id
- General:
    - Deletes a specified flight using the id of the flight
    - Request Arguments: id of the flight 
    - Returns: delete message and the details of the flight deleted.
- Sample: `http://127.0.0.1:3000/flights/b34aba4c-9a56-481d-b009-770eee8a3ffb`
```
{
    "message": "flight deleted",
    "flight": {
        "id": "b34aba4c-9a56-481d-b009-770eee8a3ffb",
        "title": "flight to canada",
        "time": "5pm",
        "price": 10000,
        "date": "11-07-2022"
    }
}
```

