import Navbar from './navbar';
import BusCard from './BusCard';
import React, { useState } from 'react';
const WebProjects = () => {
    const [Django, setDjango] = useState(0);
    const [AimTrainer, setAimTrainer] = useState(0);

    const Django_pics = ["django_homepage.png", "django_quiz.png", 'django_result.png',"django_ER diagram.png",];
    const AimTrainer_pics = ['aimtrainer_overview.png','aimtrainer_result.png'];
    const picSwap = (n, list, setState,currentstate) => {
        if (currentstate + n === list.length) {
            setState(0);
        } else if (currentstate + n < 0) {
            setState(list.length - 1);
        } else {
            setState(currentstate + n);
        };
    };
    // const picSwap = (n, list) =>{}
    return (
        <div>
            <Navbar></Navbar>
            <BusCard></BusCard>
            <h2 style={{ 'marginLeft': '7%' }}>Website Projects</h2>
            <br></br>
            {/* Django WebApp */}
            <div className="w3-container  w3-dark-grey" style={{ 'marginLeft': '3.1%', 'marginRight': '2%', 'background': 'red', 'borderRadius': 5}}>
                <h3 style={{ 'marginLeft': '3%',}}> Coursera Django Web App (Offline) </h3>
                        <div className="w3-content w3-display-container" style={{ 'width': '80%', 'height': '30%','marginTop':'2%','marginLeft':'3%'}}>
                            <figure className="figure">
                            <img className="mySlides" src={require("./" + Django_pics[Django])} style={{ width: '100%' }} alt='django homepage'></img>
                            <figcaption stype={{color: 'black'}}> </figcaption>
                            </figure> 
                            <div className="w3-center w3-display-bottommiddle" style={{ width: '100%' }}>
                                <button className="w3-left"  style = {{'backgroundColor':'black','width': '4%', 'height': '5%'}} onClick={() => { picSwap(1, Django_pics, setDjango,Django) }}>&#10094;</button>
                                <button className="w3-right" style = {{'backgroundColor':'black','width': '4%', 'height': '5%'}} onClick={() => { picSwap(-1, Django_pics,setDjango,Django) }}>&#10095;</button>
                            </div>
                        </div>
                        <br></br>
                        <h4 style = {{'textAlign':'left','marginLeft':'3%','paddingRight':'30%'}}>
                            The website is able to save users enrollment info and exam scores using SQL database and display the results using Django View.
                        </h4>
                        <br></br>
            </div>

            <div className="w3-container  w3-dark-grey" style={{ 'marginLeft': '3.1%', 'marginRight': '2%','marginTop':'2%', 'background': 'red', 'borderRadius': 5}}>
                <h3 style={{ 'marginLeft': '3%',}}><a style={{color:'white'}} href = 'https://main.d36fn3fjifygvl.amplifyapp.com/'>Aim Trainer For First-Person-Shooter Gamers (Live on AWS) </a> </h3>
                        <div className="w3-content w3-display-container" style={{ 'width': '80%', 'height': '30%','marginTop':'2%','marginLeft':'3%'}}>
                            <figure className="figure">
                            <img className="mySlides" src={require("./" + AimTrainer_pics[AimTrainer])} style={{ width: '100%' }} alt='django homepage'></img>
                            <figcaption stype={{color: 'black'}}> </figcaption>
                            </figure> 
                            <div className="w3-center w3-display-bottommiddle" style={{ width: '100%' }}>
                                <button className="w3-left"  style = {{'backgroundColor':'black','width': '4%', 'height': '5%'}} onClick={() => { picSwap(1, AimTrainer_pics,setAimTrainer,AimTrainer) }}>&#10094;</button>
                                <button className="w3-right" style = {{'backgroundColor':'black','width': '4%', 'height': '5%'}} onClick={() => { picSwap(-1, AimTrainer_pics,setAimTrainer,AimTrainer) }}>&#10095;</button>
                            </div>
                        </div>

                        <br></br>
                        <h4 style = {{'textAlign':'left','marginLeft':'3%','paddingRight':'30%'}}>
                        This is one of the first websites I've built after learning JavaScript. 
                        To play this game, you have to pop the red dots by clicking them as fast as they can in one minute.

                        </h4>
                        <br></br>
            </div>
        </div>

    );
};

export default WebProjects;
