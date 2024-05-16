import logo from './logo.svg';
import './App.css';
import EventsList from "./components/EventList/EventsList";
import AddEventForm from "./components/AddEventForm/AddEventForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
     {/*<EventsList/>*/}
        <LoginForm/>
        <AddEventForm/>
    </div>
  );
}

export default App;
