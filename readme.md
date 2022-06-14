# Flight Tracker

## Description:
Flight tracker where user input flight number, arrival airport, or some other key piece of information and the flight status is returned. Using the necessary api ( which I still need to find ) all prevelant flight details are quickly retrieved and brought forth to the user so that they can be informed as the the status (on-time, delayed, or cancelled) of their flight.

## Steps to complete and a way to keep on track

### 1: Research api and figure out the logistics there
make sure this project is even feasible and can be created without having to pay for a third-party api

### 2: create React app and get html boilerplate going
1. create react app
2. set up main homepage
3. create component for on-time
    1. integrate api with on-time
4. create component for delayed 
    1. integrate api with delayed
    2. add the amount of time that they flight is delayed
5. create component for cancelled
    1. integrate api with cancelled

### 3: Once app is working check out bugs and do some testing
1. run tests on on-time to make sure it's working properly and coming off as expected
    * does the on-time component show?
    * does it show correct information related to the flight itself?
        * airport, times, airline, etc.
1. run tests on delayed to make sure it's working properly and coming off as expected
    * does the delayed component show?
    * does it display how long the flight has been delayed, what the new arrival time is, as well as the airport and airline.
    * does it also include help information for user to contact the airline?
1. run tests on cancelled to make sure it's working properly and coming off as expected
    * does the cancelled component show?
    * does it provide a link to the airline website help page for users to get help with rebooking?