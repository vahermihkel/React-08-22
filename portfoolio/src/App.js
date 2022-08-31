  // <------ kustutasin logo impordi (enne kustutasin logo.svg faili,
  // mis andis errori, et ta ei leia seda faili üles)
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';
// ctrl + shift + p   <- avada menüü
// Open User Settings (JSON)

// tab <->    liigutab koodi paremale
// shift + tab   liigutab koodi vasakule

// div - komplektide jaoks

function App() {
  return (
    <div className="App">
        <img className="main-picture" src="https://menandhealing.ca/wp-content/uploads/2020/09/banner-psy-735x550.jpg" alt="" />
    
        <div className="navigation-pictures">
          <Link to="work">
            <img src="https://hbr.org/resources/images/article_assets/2022/08/Aug22_03_1326231067.jpg" alt="" />
          </Link>
          <Link to="hobbies">
            <img src="https://scholarlyoa.com/wp-content/uploads/2021/08/Hobbies.png" alt="" />
          </Link>
          <Link to="courses">
            <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/header-right.svg" alt="" />
          </Link>
        </div>

{/* localhost:3000/work   ---> näitab   <div>Töö</div>
    localhost:3000/hobbies   ---> näitab   <div>Hobi</div>
    localhost:3000/courses   ---> näitab   <div>Kursused</div>
  */}
        <Routes>
          <Route path="work" element={ <Work /> } />
          <Route path="hobbies" element={ <Hobbies /> } />
          <Route path="courses" element={ <div>Kursused</div> } />
        </Routes>

    </div>
  );
}

export default App;


// keelevahetus: windowsi märk + tühik 