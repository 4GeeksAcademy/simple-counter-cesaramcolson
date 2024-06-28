//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);


//this should be in a separated archive called SecondsCounter.jsx imported to this one
let counter = 0;

const updateCounter = () => {
    const digits = document.querySelectorAll('#seconds-counter .digit');
    let secondsString = String(counter).padStart(4, '0');
    
    for (let i = 0; i < digits.length; i++) {
        digits[i].textContent = secondsString[i];
    }
    
    counter++;
};

setInterval(updateCounter, 1000);

