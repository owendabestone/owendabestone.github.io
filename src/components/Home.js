import Navbar from './navbar';
import BusCard from './BusCard';
import HomePage from './HomePage';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BusCard></BusCard>
            <HomePage></HomePage>

            <div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <h3 class="title"><b>2022</b></h3>
        <p>Died Again</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title"><b>2021</b></h3>
        <p>Died</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title"><b>2020</b></h3>
        <p>Almost Died</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title"><b>2019</b></h3>
        <p>Wanted to die</p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title"><b>2018</b></h3>
        <p></p>
      </div>
    </div>
  </div>
  </div>
</div>
    )
}

export default Home;