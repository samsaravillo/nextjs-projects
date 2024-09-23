import { Route } from "react-router-dom";
import Todo from "./components/Todo";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      {/* <Route path='/'>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route> */}
      <h1>My Todos</h1>
      <Todo text='Learn react' />
    </div>
  );
}

export default App;
