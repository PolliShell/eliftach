import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventsList from "./components/EventsList/EventsList";
import EventRegistationForm from "./components/EventRegistationForm/EventRegistationForm";
// import AddEventForm from "./components/AddEventForm/AddEventForm";
// import SignUpForm from "./components/SignUpForm/SignUpForm";
// import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/*<Header/>*/}
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<EventsList />} />
            <Route
              path="/event-registation/:id"
              element={<EventRegistationForm />}
            />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            {/*<Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
