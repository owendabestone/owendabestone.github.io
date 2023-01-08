import PictureHome from './PictureMain';

const HomePage = () => {
    return (
        <div className='container' style={{ 'margin-left': '1em', 'writing-mode': 'horizontal-tb' }}>
            <div className='col-sm' style={{ 'block-size': '1em', 'writing-mode': 'horizontal-tb' }}>
                <PictureHome />
            </div>
            <div className='col-sm' style={{ 'margin-left': '10em',
             'position': 'absolute', 'padding-left': '4em' ,
             'width': '350px'}}>
                <h2 className='mt-3' style={{}}> <b>Owen Zhang</b></h2>
                I have recently graduated M.S. <a href = 'https://cse.ucsd.edu/graduate/degree-programs/ms-program/ms-2015-comp-standard'>Computer Science </a>
                 from UC San Diego with a focus on Artificial Intelligence.
                I also received my B.S. from UC San Diego with a degree in <a href='https://cogsci.ucsd.edu/undergraduates/major/machine-learning.html#Major-Requirements'>
                    Cog. Sci. ML </a>, where I found my passion in data science, machine learning, and neural science. 

            </div>
        </div>
    )

};

export default HomePage;