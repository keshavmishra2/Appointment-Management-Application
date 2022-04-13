import { useEffect, useState } from "react"
import {Link } from 'react-router-dom'
import axios from 'axios';
import './doctorList.css'
export const DoctorList = ()=>{
    const [data, setData] = useState([]);
    
    useEffect(() => {
        loadUserData();
    },[])
const loadUserData = async () => {
    await axios.get(" http://localhost:3005/users")
    .then((response)=> setData(response.data))
    .catch((err)=> console.log(err))
}
console.log("data", data)
    return(
       <> 
        <h1>Doctor List</h1>
        <Link to='/times'>
        
        <div className="products-list">
        {data.map((e) =>(
           
            <div  className="myallproduct">
            <img  src={e.img} alt="" />
            <h3>Name: {e.name}</h3>
            <p>specialization:{e.specialization}</p>
            <h4>₹ : {e.fee}</h4>
            <h5>Available : {e.Time}</h5>
            </div>
          
        ))
        }
       
       </div>
       </Link>
       </>
    )
}

