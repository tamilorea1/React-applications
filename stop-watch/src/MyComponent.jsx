import React, {useState, useEffect, useRef} from "react";
function MyComponent(){

    const [isRunning, setIsRunning] = useState(false); //stop watch is of type boolean, and its false. Therefore not running right now

    const [elapsedTime, setElapsedTime]= useState(0); // elpased time is intially zero

    const intervalRef = useRef(null);

    const startTimeRef = useRef(0); // start time is zero milliseconds

    useEffect( () => {
        if(isRunning){
           intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current) //get the time right now and subtract it from our start time
            }, 10);
        }

        return() => {
            clearInterval(intervalRef.current);
        }
        
    }, [isRunning]); // if isRunning changes 

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop(){

        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(){

        let Hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let Minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let Seconds = Math.floor(elapsedTime / (1000)% 60);
        let Milliseconds = Math.floor((elapsedTime % 1000) /10);

        Minutes = String(Minutes).padStart(2, "0");
        Seconds = String(Seconds).padStart(2, "0");
        Milliseconds = String(Milliseconds).padStart(2, "0");

        return `${Minutes}: ${Seconds}: ${Milliseconds} `
        return `00:00:00`;  //temporary placeholder for how the time will be displayed
    }
    return(
        <>
           <div className="stop-watch">
                <div className="display"> {formatTime()}</div>
                <div className="controls">
                    <button className="start-button" onClick={start}>Start</button>
                    <button className="stop-button" onClick={stop}>Stop</button>
                    <button className="reset-button" onClick={reset}>Reset</button>
                </div>
            </div> 
        </>
    );
}

export default MyComponent;