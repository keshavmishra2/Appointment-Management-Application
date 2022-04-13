
import './App.css';
import { DoctorList } from './Components/DocterList';
import { TimeRange } from './Components/timeslot';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
     <Routes>
        <Route path={"/"} element={<DoctorList />}></Route>
        <Route path={"/times"} element={<TimeRange />}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
