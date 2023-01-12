import Navbar from "./Navbar";
import BusCard from "./BusCard";

const Hobbies = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BusCard></BusCard>
            <h2 style={{ 'marginLeft': '7%' }}>Hobbies </h2>
            <div className='container' style={{ 'marginLeft': '1%' }}>
                <div className='row mt-3'>
                    <div className='col-sm' style={{ marginRight: '0em'}}>
                        <div class="card md-1" style={{ width: '100%' }}>
                            <div class="card-body">
                                <div> <h3> <b>SKIING</b></h3></div>
                                <div>List of the ski resorts I have been to:</div>
                                <ul>
                                    <li> Big Bear</li>
                                    <li> Bogus Basin</li>
                                    <li> Jackson Hole</li>
                                    <li> Mammoth </li>
                                    <li> Sierra Mountain Resort</li>
                                    <li> Snow Bird </li>
                                    <li> Sun Valley</li>
                                    <li> Tamarack</li>
                                </ul>
                                <div> <img src={require("./skiing.JPG")} width='40%' height='40%' alt='Big bear' ></img></div>
                                <br></br>
                                <div> This is about as good as I can ski.</div>
                                <video width="100%" height="220" controls>
                                    <source src={require("./skiing.mp4")} type="video/mp4"></source>
                                    {/* <source src="movie.ogg" type="video/ogg"> */}
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm' style={{ marginLeft: '0em'}}>
                        <div class="card md-1" style={{ width: '100%' }}>
                            <div class="card-body">
                                <div> <h3> <b>Motor Sport</b></h3></div>
                                <div>List of the tracks I have raced on (IRL):</div>
                                <ul>
                                    <li> Eake Elsinore Storm Parking Lot</li>
                                    <li> Boise Fairgrounds Parking Lot</li>
                                    <li> Chuckwalla Valley Raceway</li>
                                </ul>
                                <div> <iframe width="100%" height="220" src="https://www.youtube.com/embed/Jv7YXTV-OEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                                <br></br>
                                <div> This is about as good as I can drive.</div>
                                <br></br>
                                <iframe width="100%" height="220" src="https://www.youtube.com/embed/cYMcaj-coC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm'>
                        <div class="card md-1" style={{ width: '100%' }}>
                            <div class="card-body">
                                <div> <h3> <b>Music</b></h3></div>
                                <div> This is about as good as I can compose.</div>
                                <br></br>
                                <div><iframe width="100%" height="220" src="https://www.youtube.com/embed/AxWG8voIY7s" title="Orange Noise - ambient music." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                                <br></br>
                                <div>Unreleased sample</div>
                                <br></br>
                                <audio controls>
                                        <source src={require("./seeking for void.mp3")} type="audio/mpeg"></source>
                                            Your browser does not support the audio element.
                                        </audio>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            )

}

            export default Hobbies;