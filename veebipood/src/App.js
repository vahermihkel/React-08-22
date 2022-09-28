import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import HaldaTooteid from './pages/HaldaTooteid';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import MuudaToode from './pages/MuudaToode';
import Ostukorv from './pages/Ostukorv';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';

// ctrl + ä on kommentaaride lisamiseks
// (saan edit -> toggle line comment)
// kommentaarid ei mõjuta koodi
// alt="" <--- alternative text
// 1. kui pildi aadress (src="") on vigane, siis näidatakse pildi asemel
// alternative texti
// 2. pimedad ei näe pilte, neile loetakse ette alt (kohustuslik riigiettevõtetes)
// 3. arendajad (server ei tööta) näevad ka

function App() {
  // <div> ----> division
  // ümbritseja
  // return () sulgude sees peab olema 1 komplekt elemente
  return (
    <div className="App">
      <img className="pilt" alt="Nobe pilt auto" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" />
      <button className="nupp">Vajuta mind</button>

{/* localhost:3000 */}
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>
      <Link to="/poed">
        <button>Poed</button>
      </Link>
      <Link to="/halda">
        <button>Halda tooteid</button>
      </Link>
      {/* No routes matched location "/seade" */}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="halda" element={ <HaldaTooteid /> } />
        <Route path="muuda/:index" element={ <MuudaToode /> } />
      </Routes>

    </div>
  );
}

export default App;
