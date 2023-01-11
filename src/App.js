import './App.css';
import { AppProvider } from './components/context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import Home from './components/Home';
import Courses from './components/Courses';
import { Route, Routes } from 'react-router-dom'
import WebProjects from './components/WebProjects';
import CurrentStatus from './components/CurrentStatus';
import Hobbies from './components/Hobbies';
function App() {


  return (
    <AppProvider>
      <Helmet>
        <title>Owen's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
      </Helmet>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/courses" element={<Courses/>}></Route>
          <Route exact path="/webprojects" element={<WebProjects/>}></Route>
          <Route exact path="/currentstatus" element={<CurrentStatus/>}></Route>
          <Route exact path="/hobbies" element={<Hobbies/>}></Route>
        </Routes>

    </AppProvider>
  );
}

export default App;
