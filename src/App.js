import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar'
import Navbar from './components/navbar';
import BusCard from './components/BusCard';
import { Helmet } from "react-helmet";
import HomePage from './components/HomePage';
function App() {


  return (


    <div>

    <Helmet>
    <title>Owen's Resume</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
    </Helmet>
      <Navbar/>
      <BusCard/>
      <HomePage/>
    </div>
  );
}

export default App;
