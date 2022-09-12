import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

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

        <iframe width="560" height="315" src="https://www.youtube.com/embed/7xzU9Qqdqww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Routes>
          <Route path="work" element={ <Work /> } />
          <Route path="hobbies" element={ <Hobbies /> } />
          <Route path="courses" element={ <Courses /> } />
        </Routes>
    </div>
  );
}

export default App;


// keelevahetus: windowsi märk + tühik 