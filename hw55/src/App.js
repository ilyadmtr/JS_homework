import './App.css';
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoTown from "./pages/InfoTown";
import MostSightSeen from "./pages/MostSightSeen";
import SightsSeen from "./pages/SightsSeen";
import PhotoPage from "./pages/PhotoPage";
import Layout from "./components/Layout";
import CityPage from "./pages/CityPage";


function App() {

  return (
      <div className='wrapper'>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'/townInfo'} element={<InfoTown/>}/>
          <Route path={'/mostSightSeen'} element={<MostSightSeen/>}/>
          <Route path={'/sightsSeen'} element={<SightsSeen/>}/>
          <Route path={'/photoPage'} element={<PhotoPage/>}/>
          <Route path={'/photoPage/:name'} element={<CityPage/>}/>
          </Route>
      </Routes>
      </div>
  );
}

export default App;
