import Navbar from "./Navbar";
import BusCard from "./BusCard";
const CurrentStatus = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BusCard></BusCard>
            <h2 style={{ 'marginLeft': '7%' }}>Current Status </h2>
            <div class="card m-5" style={{ width: '70%' }}>
                <div class="card-body">
                    <ul>
                        <li>Keeping myself updated on tech/AI news</li>

                        {/* <li><li/> */}
                    </ul>
                </div>
            </div>

        </div>
    );
}


export default CurrentStatus 