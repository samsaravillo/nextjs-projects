import { Route, Routes } from "react-router-dom";
// import Todo from "./components/Todo";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage />} />
        <Route path='/new-meetup' exact element={<NewMeetupPage />} />
        <Route path='/favorites' exact element={<FavoritesPage />} />
      </Routes>
      {/* <h1>My Todos</h1>
      <Todo text='Learn react' /> */}
    </Layout>
  );
}

export default App;
