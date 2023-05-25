// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import Parent from './props/Parent';
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventC from "./events/EventComponent";
import UserSearchAsClass from "./classes/UserSearch";
import UserSearchWithRef from "./state/UserSearchWithRef";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
//Important - Due to a bug in the DefinitelyTyped ReactDOM definitions, you need to add the ! operator here:
const root = ReactDOM.createRoot(el!);

const indexUsers = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
]

// 4) Create a component
const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <EventC></EventC>
      ==============================
      <UserSearchWithRef></UserSearchWithRef>
      ==============================
      ==============================
      <UserSearchAsClass users={indexUsers}></UserSearchAsClass>
      ==============================
      <UserSearch></UserSearch>
      ==============================
      <GuestList></GuestList>
      ==============================
      <Parent />
    </div>
  );
};

// 5) Show the component on the screen
root.render(<App />);