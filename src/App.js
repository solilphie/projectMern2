
import './App.css';

import Navbar from './components/Navbar';
import SectionOne from "./components/SectionOne";
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Log from './components/Log';
//import Joblist from './components/Joblist';
import {Route ,Routes} from "react-router-dom";
import Jobdetail from './components/Jobdetail';
import Signup from './components/Signup';
import Appsec from './components/App_sec';
import App_Employer from './components/App_Employer';
import Create from './components/employer/Create';
import Edit from './components/employer/Edit';
import Delete from './components/employer/delete';
import Logoutnav from './components/Logoutnav';
import Logout from './components/Logout';
import Applicants from './components/Applicants';
import Ranks from'./components/Ranks';
import ResumeDetails from'./components/ResumeDetails';
import Specialjoblist from './components/Specialjoblist';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

//import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas);



function App() {
  return (
    <>
    
    <Routes>
    
    <Route exact path="/" element = {<><Navbar/>
        <SectionOne/>
        <SectionTwo />
        <Footer /></>}/>
              <Route path="/log" element={<><Navbar/><Log/></>} />
              <Route path="/signup" element={<> <Navbar/><Signup/> </>} />


              <Route path="/specialjoblist" element={<> <Logoutnav/> <Specialjoblist/> </>}/>
              <Route path="/joblist" element={<> <Logoutnav/> <Appsec/> </>}/> 
              <Route path="/specialjoblist" element={<> <Logoutnav/> <Specialjoblist/> </>}/>
              <Route path="/Jobdetail" element={<> <Logoutnav/> <Jobdetail/> </>}/>


              <Route path="/employer" element={<> <Logoutnav/> <App_Employer/> </>}/>
              
              <Route path="/employer/create/" element={<> <Logoutnav/> <Create/></>} />
				      <Route exact path="/employer/edit/:id" element={<> <Logoutnav/><Edit/></>} />
				      <Route exact path="/employer/delete/:id" element={<Delete/>} />
              <Route path="/applicants/:id" element={<> <Logoutnav/> <Applicants/> </>}/>
              <Route path="/ranks/:id" element={<> <Logoutnav/> <Ranks/> </>}/>
              <Route path="/resumedetails/:id" element={<> <Logoutnav/> <ResumeDetails/> </>}/>
              
              <Route path="/Logout" element={<Logout/>}/>

      </Routes>
      
    </>
  );
}

export default App;
