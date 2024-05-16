// App.js
import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EventsList from "./components/EventList/EventsList";
import AddEventForm from "./components/AddEventForm/AddEventForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
    return (
        // <BrowserRouter>
        //     <div className="app-wrapper">
        //         {/*<Header/>*/}
        //         {/*<Navbar/>*/}
        //         <div className="app-wrapper-content">
        //             <Routes>
        //                 <Route path="/" element={<EventsList />} />
        //                 {/*<Route path="/login" element={<LoginForm />} />*/}
        //
        //                 {/*<Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>*/}
        //             </Routes>
        //         </div>
        //     </div>
        // </BrowserRouter>
        // <EventsList />
        <LoginForm/>
    );
}

export default App;
