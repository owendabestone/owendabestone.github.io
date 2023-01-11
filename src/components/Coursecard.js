
import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';

const CourseCard = (props) => {

    const { expand, dispatch } = useContext(AppContext);

    const toggle_hide = (e) => {
        dispatch({
            type: 'EXPAND',
            payload: props.name
        });

    };

    var hide = true;
    // expand.map((currentExp)=>{
    //     if(currentExp.name === props.name) {
    //         hide = currentExp.hide;
    //     };
    //     return currentExp
    // });
    for (var i = 0; i < expand.length; i++) {
        if (expand[i].name === props.name) {
            hide = expand[i].hide;
        };
    }
    const NAMECORRECTION = {
        'MachineLearning': 'Machine Learning (Undergrad & Grad)', "DataScience": "Data Science (Undergrad)", "NeuralScience": "Neural Science (Undergrad)",
        "Coursera": 'Coursera (Q4 2022-Present)', "HighSchool": "High School", "Physics": "Physics (Undergrad)", 'Humanities': 'Humanities (Undergrad)'
    }
    let course_list = []
    course_list = Object.keys(props['courses'])

    let hidden_portion = "<div class='container' ><div class='row mt-3'>"
    for (var j = 0; j < course_list.length; j++) {
        if (j % 2 === 0 && j !== 0) {
            hidden_portion = hidden_portion + "</div></div><div class='container'><div class='row mt-3'>"
        }
        if (props['courses'][course_list[j]].length === 0){
            hidden_portion = hidden_portion + '<div class="col-sm" id="courses"><b>' + course_list[j] + '</b> <div> &emsp;';
        } else if (props['courses'][course_list[j]].length === 1){
            hidden_portion = hidden_portion + '<div class="col-sm" id="courses"><b>' + course_list[j] + '</b> <div> &emsp; Skill: '
        }
        else { hidden_portion = hidden_portion + '<div class="col-sm" id="courses"><b>' + course_list[j] + '</b> <div> &emsp; Skills: ';}
       
        for (var k = 0; k < props['courses'][course_list[j]].length; k++) {
            if (k !== props['courses'][course_list[j]].length - 1) {
                hidden_portion = hidden_portion + props['courses'][course_list[j]][k] + ', '
            } else {
                hidden_portion = hidden_portion + props['courses'][course_list[j]][k]
            }

        };
        hidden_portion = hidden_portion + '</div></div>';
    };
    hidden_portion = hidden_portion + '</div></div>'

    return (
        <div style={{}}>

            <div className="p-4 mb-4 text-white " style={{ 'borderRadius': 5, 
            'height': '50px', 
            'marginLeft': '3.1%', 
            'marginRight': '3%',
            'backgroundColor':'#24261a'
            }}>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target={"#navbarToggleExternalContent" + props.name}
                    aria-controls={"navbarToggleExternalContent" + props.name} aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ 'color': 'white', 'position': 'absolute', 'marginLeft': '2em', 'borderColor': '##d1beb2' }}
                    onClick={toggle_hide}>

                    {hide ? <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg></span> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                    }
                </button>
                <div style={{ 'marginLeft': '6em', 'position': 'relative', 'color': '#edddd1' }}> <b>{NAMECORRECTION[props.name]}</b> </div>
            </div>
            <div className="collapse" id={"navbarToggleExternalContent" + props.name} style={{ 'marginLeft': '2%', 'marginRight': '3%' }}>
                <div className="bg-light p-4 mb-3" style={{ 'borderRadius': 7 }}>

                    <div className="Container" dangerouslySetInnerHTML={{ __html: hidden_portion }}></div>
                    <br></br>
                    <div style={{'marginLeft': '6em','color': '#4a4443'}}> <b>and more....</b></div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;