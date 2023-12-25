import Navbar from './Navbar';
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
                            <h4 class="title"><b>Winter 2023</b></h4>
                            <p> Started working for Boise Cascade and contining to make business improvements by providing software tools. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info">
                            <h4 class="title"><b>Fall 2022</b></h4>
                            <p> During my internship, I saw the inner workings of applying ML to an web application.
                                I decided to take online courses on full-stack development 
                                so that one day I could deploy an application backed by ML.</p>
                                <p>Participated in <a href = 'https://eval.ai/web/challenges/challenge-page/1733/overview'>eBay 2022 university Machine Learning Competition</a>.</p>
                        </div>
                    </div>


                    <div class="card">
                        <div class="info">
                            <h4 class="title"><b>Summer 2022</b></h4>
                            <p> I reached out to Professor Anjum and received an intern 
                                position at his company <a href='https://www.precisepk.com/'> PrecisePK</a>. 
                                I attended daily stand-ups and worked on a research project 
                                for their serum level prediction model.
                                <br></br>
                                <br></br>
                                Anjum was teaching machine learing classes at that time. 
                                I also helped him with writing visualization code 
                                for his assignments and designed problems for homework and exams.  </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info">
                            <h4 class="title"><b>Fall 2021</b></h4>
                            <p>Started the MS Computer Science program.
                                <br></br>
                                <br></br>
                                I spent almost every second of my life going to office hours and 
                                attending additional lectures on computer architecture (something I did not learn from undergrad). </p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="info" >
                            <p>Rose to leadership position at UCSD shuttles but had to quit soon after since I decided to focus on learning the fundamentals of computer science.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="info" >
                            <h4 class="title" ><b>Summer 2021</b></h4>
                            <ul>
                                <li> Received B.S. from UC San Diego</li>
                                <li> Started learning algorithms, data structures, and C++, so that I can be prepared for the CS Master's program. </li>
                            </ul>
                            
                        </div>
                    </div>

                    <div class="card">
                        <div class="info" >
                            <h4 class="title" ><b>2020- Spring 2021</b></h4>
                            <ul>
                                <li> Completed independent research under the mentorship of Professor Shannon Ellis. </li>
                                <li> Studied under <a href ='https://www.linkedin.com/in/a3gupta/'>Professor Anjum</a>, whom I later worked under his company.  </li>
                                <li> Received B.S. from UC San Diego</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="card">
                        <div class="info" >
                            <p> Joined <a href = 'https://recreation.ucsd.edu/competitive-sports/snowski/'>UCSD Ski Team</a> and participated in race events. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info">
                            <h4 class="title"><b> Fall 2019</b></h4>
                            <p>I changed my major to Cog Sci ML and first started learning how to program. 
                               I was introduced to <a href = 'https://www.shanellis.com/about/'>Professor Shannon</a>, who was my mentor for my independent project. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info" >
                            <p> Started a part-time career as a <a href = 'https://transportation.ucsd.edu/campus/shuttles/index.html#Student-Employment-Opportunitie'>UCSD shuttle</a> driver. Obtained commercial driver’s license w/ passenger endorsement. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info" >
                            <p>Joined <a href = 'https://www.facebook.com/groups/tritonautoclub'>Imports@UCSD</a>(now Triton Auto Club). 
                                As a board member, I secured funding for the annual Face-off event.  </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info">
                            <h4 class="title"><b>Fall 2017 – Winter 2019 </b></h4>
                            <p>I started college not knowing my career direction.
                                 For the next two years, I studied physics thinking physics is the science above all sciences. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div classname = "container" style={{'textAlign':'center'}}>
            <figure className="figure" style={{
                'marginTop': '2em',
                'marginRight': 0, width: '70%'
            }}>
                <img src={require("./geisal.JPG")} className="figure-img img-fluid rounded" alt="Profile"
                    style={{ width: '75%', height: '40%' }} />
                <figcaption className="figure-caption" style={{
                    width: '60%', height: '26%', display: 'block',
                    'marginLeft': '1em',
                    'marginRight': '0'
                }}>The Geisal library at UCSD is my favorite piece of architecture.</figcaption>
            </figure>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home;