import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import EventsList from "./components/EventsList/EventsList";
import EventRegistationForm from "./components/EventRegistationForm/EventRegistationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Navbar from "./components/Navbar/Navbar";
// import AddEventForm from "./components/AddEventForm/AddEventForm";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Navbar/>
          <Routes>
            <Route path="/" element={<EventsList />} />
            <Route
              path="/event-registation/:id"
              element={<EventRegistationForm />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignUpForm />} />
            {/*<Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
