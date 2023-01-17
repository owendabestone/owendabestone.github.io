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
                        <li>Learning AWS and getting the <i>AWS Certified Cloud Practitioner</i> certificate.</li>
                        <li>Enrolled in <i>Developing Back-End Apps with Node.js and Express</i> on Coursera. </li>
                        <li>Solving LeetCode SQL Database problems.</li>
                        {/* <li><li/> */}
                    </ul>
                </div>
            </div>

        </div>
    );
}


export default CurrentStatus 