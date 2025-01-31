import React, {useState, useEffect} from "react";


function DigitalClock(){


    const [time, setTime] = useState(new Date()); // Gives variables to the time and setTime and assigns the current time to the time variable

    useEffect(() => {
        const intervalId = setInterval(() => { // Updates the time every second using setInterval
            setTime(new Date());
        }, 1000);

        return () => { // Clears the interval when the component is unmounted
            clearInterval(intervalId);
        }
    }, []);


    function formatTime(){
        // Formats the time to display in 12-hour format
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        // Determines if it is AM or PM
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Converts the hours to 12-hour format
        hours = hours % 12 || 12;

        // Adds a zero in front of the minutes and seconds if they are less than 10
        return`${padZero (hours)}:${padZero (minutes)}:${padZero (seconds)} ${meridiem}`;
    }


    function padZero(number){
        // Adds a zero in front of the number if it is less than 10
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                {/* Displays our time */}
                {/* // The span tag is used to style the time */}
                
                <span >{formatTime()}</span>
            </div>
        </div>
    );


}

export default DigitalClock;