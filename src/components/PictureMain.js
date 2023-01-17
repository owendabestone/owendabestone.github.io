const PictureHome = (props) => {

    return (
        <div style={{width:'300px'}}>
    <figure className="figure" style = {{'marginTop':'2em',
    'marginRight': 0 , width:'70%'}}>
        <img src={require("./homepicture.png")} className="figure-img img-fluid rounded" alt="Profile" 
        style={{width:'65%',height:'40%'}}/>
            <figcaption className="figure-caption" style={{width:'50%',height:'26%',display: 'block',
        'marginLeft': '1em',
        'marginRight': '0'}}> The last driving shift when I was working at UC San Diego Transportation.</figcaption>
    </figure>


    </div>
    )

}

export default PictureHome;