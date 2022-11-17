// import logo from './logo.svg';
import './master.css';
import './argon-design-system.min.css';
import { useState, useEffect,useCallback } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'


// This is the timer that will be constantly updated
const TimeSet = (props) => {
    // const [time, settime] = useState(false);
    const [hour, sethour] = useState(0);
    const [minute, setmunite] = useState(0);
    const [second, setsecond] = useState(0);
    const [miliseconds, setmiliseconds] = useState(0);

    const runCounter = useCallback(() =>{
        if(miliseconds === 12000){
            setsecond((second) => second + 1)
            setmiliseconds((miliseconds) => miliseconds = 0)
        }
        if(second === 60){
            setmunite((prevMinute) => prevMinute + 1)
            setsecond((second) => second = 0)
        }
        if(minute === 60){
            sethour((prevHour) => prevHour + 1)
            setmunite((prevMinute)=> prevMinute = 0)
        }
        else{
            console.log('Program is paused' + miliseconds)
        }
    },[miliseconds])

    useEffect(()=>{
        // console.log(props.TimeSetTime + " from within timeset component");

        {props.TimeSetTime === 'start'? setmiliseconds((miliseconds) => miliseconds + 1) : console.log(miliseconds)}

        runCounter()

    })

    return ( 
        < div >
            <h1 className = 'text-success text-center timer' > 
            { hour } : {minute } : { second }
            {/* <h1>{props.TimeSetTime == 'start' ? "Hello time here" : "No Hello"}</h1> */}
            </h1> 
        </div >
    )
}


// This is the black screen of the stop watch
const StopWatchScreen = (props) => {
    // let TimeSetTime = null;
    // let sec, min, hr = null
    // let initDefault = "00: 00: 00";

    // console.log(props.toggleOnOff ? props.toggleOnOff == 'start' : + " in StopWachScreen")
    // let newsec,newmin,newhr = PorcessTimer(sec,min,hr,props.toggleOnOff)
    const [screen, setscreen] = useState(false);
    useEffect(() => {
            //  
    }, [screen])
    return ( <
        div className = 'bg-dark p-3' >
            <TimeSet 
            // hour = {newhr}
            // minute = {newmin}
            // seconds = {newsec} 

            TimeSetTime = {props.toggleOnOff}       
            / > 
        </div >
    )
}

// Control Section where all the button and control to start and stop the timer are located
const ControlSection = () => {
    const [changeState, setchangeState] = useState('stop')

    useEffect(() => {
        // console.log(changeState)
    }, [changeState])
    return ( 
        <div className = 'control-section' >
            <StopWatchScreen toggleOnOff = {changeState}/>
            <div className = 'row g-0' >
                <div className = 'col-lg-12 col-sm-6' >
                    <button className = 'btn btn-success col-12 mt-1'
                    onClick = {() => setchangeState('start')} > Start 
                    </button> 
                </div >
                <div className = 'col-lg-12 col-sm-6' >
                    <button className = 'btn btn-danger col-12 mt-1'
                    onClick = {() => setchangeState('stop')} > Stop 
                    </button> 
                </div > 
     
            </div> 
        </div >
         

    )
}

// This is the main body of the stop watch
const StopWatchMainBody = () => {
    return ( 
        <div className = 'bg-light main-body' >
            <h3 className = 'text-center app-name' > 
                StopWatch 
            </h3> 
        <span className='version'>Verson v1 .0 .2</span >
         {/* <StopWatchScreen / > */}
        < ControlSection / >
        </div>
    )
}



const App = () => {
    return ( 
        <div className = 'container' >
            <StopWatchMainBody / >
        </div >
    )
}
export default App;