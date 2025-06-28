import React from 'react'
import { useState, useEffect } from 'react'
const Clock = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log("Clock component mounted"); // Mounting
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1); // Updating
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("Clock component unmounted"); // Unmounting
        };
    }, []);

    useEffect(() => {
      console.log("Component Updated - seconds:", seconds);
    }, [seconds]);
    
  return (
      //Tạo đồng hồ đếm giây bằng useEffect, in log cho từng giai đoạn vòng đời (mount, update, unmount).  
      <>
      <p>seconds: {seconds} s</p>
      </>



  )
}

export default Clock