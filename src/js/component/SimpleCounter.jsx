import React, { useState } from 'react';
import { Home } from "./Home.jsx";

export const App = () => {
    const [counter, setCounter] = useState(0);
    const [id, setId] = useState(null);
    const [targetTime, setTargetTime] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    const startCounter = () => {
        if (!id) {
            const _id = setInterval(() => {
                setCounter((prevCounter) => {
                    const newCounter = prevCounter + 1;
                    if (newCounter.toString() === targetTime) {
                        alert(`Time reached: ${targetTime} seconds!`);
                    }
                    return newCounter;
                });
            }, 1000);
            setId(_id);
            setIsRunning(true);
        }
    };

    const stopCounter = () => {
        if (id) {
            clearInterval(id);
            setId(null);
            setIsRunning(false);
        }
    };

    const resetCounter = () => {
        stopCounter();
        setCounter(0);
        setTargetTime("");
    };

    return (
        <>
            <Home
                firstDigit={Math.floor(counter)}
                secondDigit={Math.floor(counter / 10)}
                thirdDigit={Math.floor(counter / 100)}
                fourthDigit={Math.floor(counter / 1000)}
                fifthDigit={Math.floor(counter / 10000)}
                sixthDigit={Math.floor(counter / 100000)}
            />
            <div className="d-flex mt-2 justify-content-around">
                <div>
                    <button className="btn btn-success" onClick={startCounter}>
                        {isRunning ? 'Resume' : 'Start'}
                    </button>
                    <button className="btn btn-danger" onClick={stopCounter}>
                        Stop
                    </button>
                </div>
                <button className="btn btn-warning" onClick={resetCounter}>
                    Reset
                </button>
            </div>
            <div className="mt-2">
                <input
                    type="text"
                    placeholder="Enter target time (seconds)"
                    value={targetTime}
                    onChange={(event) => setTargetTime(event.target.value)}
                    className="form-control"
                />
            </div>
        </>
    );
};