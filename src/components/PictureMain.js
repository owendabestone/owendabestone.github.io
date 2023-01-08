const PictureHome = (props) => {

    return (
    <figure class="figure" style = {{'margin-top':'2em',
    'margin-right': 0}}>
        <img src={require("./homepicture.png")} class="figure-img img-fluid rounded" alt="Profile" 
        style={{width:'40%',height:'40%',display: 'block','block-size': '15em', 'margin-right':'2em'}}/>
            <figcaption class="figure-caption" style={{width:'20%',height:'26%',display: 'block',
        'margin-left': '1em',
        'margin-right': '0'}}> The last driving shift when I was working at UC San Diego Transportation.</figcaption>
    </figure>
    )

}

export default PictureHome;