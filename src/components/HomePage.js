import PictureHome from './PictureMain';

const HomePage = () => {
    return (
        <div className='container' style={{ 'marginLeft': '0em', 'writing-mode': 'horizontal-tb' }}>
            <div className='col-sm' style={{  'block-size': '1em', 'writingMode': 'horizontal-tb' }}>
                <div className='container' style={{ 'marginLeft': '0', 'writing-mode': 'horizontal-tb' }}>
                    <PictureHome />
                </div>
            </div>
            <div className='col-sm' style={{
                'marginLeft': '10em', 'paddingLeft': '1em',
                'width': '40%'
            }}>
                <div className='container' style={{'marginLeft': '0em', 'writing-mode': 'horizontal-tb' ,'width': '250px', 'block-size': '1em', 'writingMode': 'horizontal-tb'}}>
                    <h2 className='mt-3' style={{}}> <b>Owen Zhang</b></h2>
                    I have recently graduated M.S. <a href='https://cse.ucsd.edu/graduate/degree-programs/ms-program/ms-2015-comp-standard'>Computer Science </a>
                    from UC San Diego with a focus on Artificial Intelligence.
                    I also received my B.S. from UC San Diego with a degree in <a href='https://cogsci.ucsd.edu/undergraduates/major/machine-learning.html#Major-Requirements'>
                        Cog. Sci. ML </a>, where I found my passion in data science,
                    machine learning, and neuroscience.
                </div>
            </div>
        </div>
    )

};

export default HomePage;