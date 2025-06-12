import React, { useState, useEffect } from 'react';


export const Watch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if(isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
        }
        return() => clearInterval(interval);
    }, [isRunning])

    const Format = (totalSeconds) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600)/ 60);
        const secs = Math.floor(totalSeconds % 60);

        const hour = String(hrs).padStart(2, '0')
        const minute = String(mins).padStart(2, '0')
        const second = String(secs).padStart(2, '0')

        return `${hour}:${minute}:${second}`
    }

    return (
        <div className="text-center p-4 flex flex-col items-center justify-center h-[100vh] bg-cyan-600">
            <div className="flex flex-col items-center justify-center w-[80%] border-2 border-black rounded-3xl min-h-[400px]">
                <h1 className='text-4xl text-gray-200'>Stop Watch</h1>
                <div className="flex flex-col items-center justify-center w-full p-4">
                    <h1 >{Format(time)}</h1>
                    <div>
                        <button
                            className={isRunning ? 'bg-red-500 px-4 py-2 m-2 rounded-3xl border-2 border-black hover:bg-red-400' : 'bg-green-500 px-4 py-2 m-2 rounded-3xl border-2 border-black hover:bg-green-400'}
                            onClick={() => setIsRunning(prev => !prev)}
                        >
                            {isRunning ? <span>Stop</span> : <span>Start</span>}   
                        </button>
 
                        <button
                            className='bg-cyan-500 px-4 py-2 m-2 rounded-3xl border-2 border-black
                             hover:bg-cyan-400'
                            onClick={() => {
                                setIsRunning(false)
                                setTime(0)
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}