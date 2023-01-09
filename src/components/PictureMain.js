const PictureHome = (props) => {

    return (
    <figure className="figure" style = {{'marginTop':'2em',
    'marginRight': 0}}>
        <img src={require("./homepicture.png")} className="figure-img img-fluid rounded" alt="Profile" 
        style={{width:'40%',height:'40%',display: 'block','block-size': '15em', 'marginRight':'2em'}}/>
            <figcaption className="figure-caption" style={{width:'20%',height:'26%',display: 'block',
        'marginLeft': '1em',
        'marginRight': '0'}}> The last driving shift when I was working at UC San Diego Transportation.</figcaption>
    </figure>
    )

}

export default PictureHome;