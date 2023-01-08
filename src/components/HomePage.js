import PictureHome from './PictureMain';

const HomePage = () => {
    return (
        <div className='container' style = {{'margin-left':'1em','writing-mode': 'horizontal-tb'}}>
            <div className='col-sm' style={{'block-size': '1em','writing-mode': 'horizontal-tb'}}>
                <PictureHome />
            </div>
            <div className='col-sm' style = {{'margin-left':'10em','margin-top':'0em', 'position':'absolute','padding-left':'4em'}}>
                <h2 className='mt-3' style={{}}> <b>Owen Zhang</b></h2>
            </div>
        </div>
    )

};

export default HomePage;