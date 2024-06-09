import Navbar from './Navbar';
import BusCard from './BusCard';
import React, { useState } from 'react';
const WorkProjects = () => {
    const [LicenseTracker, setLicenseTracker] = useState(0);
    const [HelpDesk, setHelpDesk] = useState(0);
    const [LearningCenter, setLearningCenter] = useState(0);
    const [AccessRequest, setAccessRequest] = useState(0);
    const LicenseTracker_pics = ["license_track.png", "license_tracker_2.png"];
    const HelpDesk_pics = ['helpdesk.png', 'helpdesk_2.png'];
    const LearningCenter_pics = ['learning_center_2.png', 'learning_center.png'];
    const AccessRequest_pics = ['AccessRequest.png'];
    const picSwap = (n, list, setState, currentstate) => {
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
            <h2 style={{ 'marginLeft': '7%' }}>Work Projects</h2>
            <br></br>
            {/* Django WebApp */}
            <div className="w3-container  w3-dark-grey" style={{ 'marginLeft': '3.1%', 'marginRight': '2%', 'background': 'red', 'borderRadius': 5 }}>
                <h3 style={{ 'marginLeft': '3%', }}> Learning Center </h3>
                <div className="w3-content w3-display-container" style={{ 'width': '80%', 'height': '30%', 'marginTop': '2%', 'marginLeft': '3%' }}>
                    <figure className="figure">
                        <img className="mySlides" src={require("./" + LearningCenter_pics[LearningCenter])} style={{ width: '100%' }} alt='django homepage'></img>
                        <figcaption stype={{ color: 'black' }}> </figcaption>
                    </figure>
                    <div className="w3-center w3-display-bottommiddle" style={{ width: '100%' }}>
                        <button className="w3-left" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(1, LearningCenter_pics, setLearningCenter, LearningCenter) }}>&#10094;</button>
                        <button className="w3-right" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(-1, LearningCenter_pics, setLearningCenter, LearningCenter) }}>&#10095;</button>
                    </div>
                </div>
                <br></br>
                <h4 style={{ 'textAlign': 'left', 'marginLeft': '3%', 'paddingRight': '30%' }}>
                    I desiged and built a website in HTML and JS that houses training videos. This is one of the first projects I did when I joined Boise Cascade.
                </h4>
                <br></br>
            </div>

            <div className="w3-container  w3-dark-grey" style={{ 'marginLeft': '3.1%', 'marginRight': '2%', 'marginTop': '2%', 'background': 'red', 'borderRadius': 5 }}>
                <h3 style={{ 'marginLeft': '3%', }}> Help Desk Search Engine </h3>
                <div className="w3-content w3-display-container" style={{ 'width': '80%', 'height': '30%', 'marginTop': '2%', 'marginLeft': '3%' }}>
                    <figure className="figure">
                        <img className="mySlides" src={require("./" + HelpDesk_pics[HelpDesk])} style={{ width: '100%' }} alt='django homepage'></img>
                        <figcaption stype={{ color: 'black' }}> </figcaption>
                    </figure>
                    <div className="w3-center w3-display-bottommiddle" style={{ width: '100%' }}>
                        <button className="w3-left" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(1, HelpDesk_pics, setHelpDesk, HelpDesk) }}>&#10094;</button>
                        <button className="w3-right" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(-1, HelpDesk_pics, setHelpDesk, HelpDesk) }}>&#10095;</button>
                    </div>
                </div>

                <br></br>
                <h4 style={{ 'textAlign': 'left', 'marginLeft': '3%', 'paddingRight': '30%' }}>
                    I designed and built a search engine for internal help documents.
                    Using the power of Python and Django library, the search engine uses NLP techniques to return search results semantically.
                    Users can submit and like help documents.

                </h4>
                <br></br>
            </div>
            <div className="w3-container  w3-dark-grey" style={{ 'marginLeft': '3.1%', 'marginRight': '2%', 'marginTop': '2%', 'background': 'red', 'borderRadius': 5 }}>
                <h3 style={{ 'marginLeft': '3%', }}> Help Desk Search Engine </h3>
                <div className="w3-content w3-display-container" style={{ 'width': '80%', 'height': '30%', 'marginTop': '2%', 'marginLeft': '3%' }}>
                    <figure className="figure">
                        <img className="mySlides" src={require("./" + LicenseTracker_pics[LicenseTracker])} style={{ width: '100%' }} alt='django homepage'></img>
                        <figcaption stype={{ color: 'black' }}> </figcaption>
                    </figure>
                    <div className="w3-center w3-display-bottommiddle" style={{ width: '100%' }}>
                        <button className="w3-left" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(1, LicenseTracker_pics, setLicenseTracker, LicenseTracker) }}>&#10094;</button>
                        <button className="w3-right" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(-1, LicenseTracker_pics, setLicenseTracker, LicenseTracker) }}>&#10095;</button>
                    </div>
                </div>

                <br></br>
                <h4 style={{ 'textAlign': 'left', 'marginLeft': '3%', 'paddingRight': '30%' }}>
                This app is to cost-efficiently manage software licenses. With a click of a button, it is able to download usage report from a
                    third-part website and construct a table that returns informtion that helps determine which license to recycle.

                </h4>
                <br></br>
            </div>



            <div className="w3-container  w3-dark-grey" style={{ 'marginLeft': '3.1%', 'marginRight': '2%', 'marginTop': '2%', 'background': 'red', 'borderRadius': 5 }}>
                <h3 style={{ 'marginLeft': '3%', }}> Access Request console </h3>
                <div className="w3-content w3-display-container" style={{ 'width': '80%', 'height': '30%', 'marginTop': '2%', 'marginLeft': '3%' }}>
                    <figure className="figure">
                        <img className="mySlides" src={require("./" + AccessRequest_pics[AccessRequest])} style={{ width: '100%' }} alt='django homepage'></img>
                        <figcaption stype={{ color: 'black' }}> </figcaption>
                    </figure>
                    <div className="w3-center w3-display-bottommiddle" style={{ width: '100%' }}>
                        <button className="w3-left" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(1, AccessRequest_pics, setAccessRequest, AccessRequest) }}>&#10094;</button>
                        <button className="w3-right" style={{ 'backgroundColor': 'black', 'width': '4%', 'height': '5%' }} onClick={() => { picSwap(-1, AccessRequest_pics, setAccessRequest, AccessRequest) }}>&#10095;</button>
                    </div>
                </div>

                <br></br>
                <h4 style={{ 'textAlign': 'left', 'marginLeft': '3%', 'paddingRight': '30%' }}>
                I platform to submit/approve access requests. Only user who has logged in can approve/deny requests. 
                </h4>
                <br></br>
            </div>
        </div>

    );
};

export default WorkProjects;
