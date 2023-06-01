import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Favorites} from "./components/Favorites";

export const AppRoutes = () => {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/favorites'} element={<Favorites />}></Route>
        </Routes>
      </>
  )
}
