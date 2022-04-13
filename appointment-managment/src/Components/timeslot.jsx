import "./time.css"

import { useParams } from "react-router-dom"

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
export const TimeRange = ()=> {
    const { times } = useParams();
   
    return(
        
        <div id="box">
         <h1>TimeSlot {times}</h1>
         <p>Today : {date}</p>
          <div className="allfather">
              <div className="allchild">
                 <p>8 : 00 AM</p>
                  <p>8 : 20 AM</p>
                  <p> 8 : 40 AM</p>
                  <p> 9 : 00 AM </p>   
                  <p> 9 : 20 AM</p>
              </div>
              <div className="allchild">
                 <p>9 : 40 AM</p>
                  <p>10 : 00 AM</p>
                  <p> 10 : 20 AM</p>
                  <p> 10 : 40 AM </p>   
                  <p> 11 : 00 AM</p>
              </div>
              <div className="allchild">
                 <p>11 : 20 AM</p>
                  <p>11 : 40 AM</p>
                  <p>12 : 00 AM</p>
                  <p> 9 : 00 AM </p>   
                  <p> 9 : 20 AM</p>
              </div>
              <div className="allchild">
                 <p>8 : 00 AM</p>
                  <p>8 : 20 AM</p>
                  <p> 8 : 40 AM</p>
                  <p id="booke"> 9 : 00 AM </p>   
                  <p> 9 : 20 AM</p>
              </div>
              <div className="allchild">
                 <p>8 : 00 AM</p>
                  <p id="booke" >8 : 20 AM</p>
                  <p> 8 : 40 AM</p>
                  <p id="avil"> 9 : 00 AM </p>   
                  <p id="avil"> 9 : 20 AM</p>
              </div>
          </div>
          <button id="booked">Booked</button>
          <button  id="avila">Available</button>

          </div>
    )
}
// function show(){
//     alert("please book your slote")
// }