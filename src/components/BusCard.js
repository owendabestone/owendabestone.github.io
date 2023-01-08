
import React, { useState } from 'react';

const BusCard = (props) => {

    const [hide, setHide] = useState(true);
    const toggle_hide = () => {
        setHide(!hide);
    }

    return (

        <div className="pos-f-t" style={{ 'margin-top': 0 }}>

            <div className="collapse" id="navbarToggleExternalContent" style={{ 'border-radius': 0 }}>
                <div className="bg-dark p-4">
                    <h4 className="text-white">CHANG ZHANG (Owen)</h4>
                    <span className="text-muted">Tele: (208) 996-4531</span>
                    <br></br>
                    <span className="text-muted">Current Address: 3961 N Tamarack Dr, Boise, Idaho, 83703</span>
                    <br></br>
                    <span className="text-muted">E-mail: chang.owen.zhang@gmail.com</span>
                    <span className="text-muted">School E-mail: chz230@ucsd.edu</span>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark" style={{ 'border-radius': 0 }}>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ 'color': 'white', 'position': 'absolute', 'margin-left': '2em' }}
                    onClick={toggle_hide}>

                    {hide ? <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg></span> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                    }
                </button>
                <div className="text-white" style={{ 'color': 'white', 'margin-left': '6em', 'position': 'absolute' }}>  Contact Information</div>
            </div>
        </div>)
}

export default BusCard;