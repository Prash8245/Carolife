import React, {useState} from 'react'
import './App.css';
import Register from './Components/Authorized/Register';
import Emergency from './Components/Emergeny/components/Emergency';
import Home from './Components/Home/Home';
import Service from './Components/Authorized/Services/Hospitals/Service';
import MyDetails from './Components/Authorized/Profile/Mydetails';
import Info from './Components/Authorized/Services/product/HospitalInfo';
import EditPage from './Components/Authorized/Profile/Editpage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserData} from './Context/userDataContext';
import Laboratory from './Components/Authorized/Services/Laboratory/Laboratory_page/Laboratory';
import LabInfo from './Components/Authorized/Services/Laboratory/Lab Info/labdetails';
import BloodBank from './Components/Authorized/Services/Blood Bank/Bloodbank/Blood-Bank';
import Blooddetails from './Components/Authorized/Services/Blood Bank/Bank_info/Blooddetails';
import Banks from './Components/Authorized/Services/Blood Bank/Bloodbank/Content';
import Donars from './Components/Authorized/Services/Blood Bank/Bloodbank/Donars';

function App() {
    const [userData,
        SetuserData] = useState("");
    const [cat,
        setcat] = useState("All");
    const [appointments,
        setappointment] = useState([]);
    const [search,
        setsearch] = useState("");
    const [open,
        setopen] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <UserData.Provider
                    value={{
                    userData,
                    SetuserData,
                    cat,
                    setcat,
                    appointments,
                    setappointment,
                    search,
                    setsearch,
                    open,
                    setopen
                }}>
                    <Routes>
                        <Route exact path='/' element={< Home />}/>
                        <Route path='/emergency' element={< Emergency />}/>
                        <Route path='/login' element={< Register />}/>
                        <Route path='/home' element={< Service />}/>
                        <Route path='/hospital' element={< Info />}/>
                        <Route path='/profile' element={< MyDetails />}/>
                        <Route path='/update' element={< EditPage />}/>
                        <Route path='/laboratory' element={< Laboratory />}/>
                        <Route path='/lab-info' element={< LabInfo />}/>
                        <Route
                            path='/blood-bank'
                            element={< BloodBank comp = { < Banks />
                        } />}/>
                        <Route
                            path='/blood-donars'
                            element={< BloodBank comp = { < Donars />
                        } />}/>
                        <Route path='/bank-info' element={< Blooddetails />}/>
                    </Routes>
                </UserData.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
