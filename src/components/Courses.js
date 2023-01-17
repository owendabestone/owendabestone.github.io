import Navbar from './Navbar';
import BusCard from './BusCard';
import Coursecard from './Coursecard'
const Courses = () => {
    const areas = ['MachineLearning', 'DataScience', 'NeuralScience', 'Physics', 'Coursera', 'Humanities', 'HighSchool',];
    const courses = {
        'MachineLearning': {
            'Probabilistic Learning': ['MLE', "Hidden Markov Model", 'Naive Bayes'],
            'Statistical Natural Langugage Processing': ['LSTM', 'BOW'],
            'Computer Vision I' : ['Image Formation','Edge/Corner Detection', 'Recognition',"CNN"],
            'Seminar on Special Topic: Genetic Algorithm': ['Bio-inspired Algorithms', "Game Theory"],
            'Computational Linguistics': ['Clojure'],
            'Convex Optimization Algorithms': ['CVXPY'],
            'Machine Learning For Robotics': ['Robotics', 'Model-free Reinforcement Learning'],
            'Planning & Learning in Robotics': ['Search Algorithms', 'Model-based Reinforcement Learning', "HMM"],
            'Deep Generative Models': ['Deep Learning', 'Pytorch', 'GAN'],
            "Recommender System & Web Mining": ['Collaborative Filtering','Latent Factor Model'],
            "Human-AI Interaction" : ['NLTK',"spaCy", "AI ethics"]
        },
        'Physics': {
            'Relativity & Quantum Physics': ['Quantum Mechanics'],
            'Physics Labs (3 quarters)': ['Experiment Design', "Error Propagation"]
        },
        'DataScience': {
            'Modeling & Data Analysis': ['PCA', "Regression"],
            'Data Science In Practice': ['Pandas', "BeautifulSoup"],
            'Probability and Statistical Methods for MechanicalEngineering': ['Statistics']
        },
        'NeuralScience': {
            'Neurobiology of Cognition': ['Biology', 'Memorization'],
            'Neural Signal processing': ['FFT', 'Signal Processing'],
            'Behavioral Neuroscience': ['Phychology'], 'Decision Making In The Brain': ['Hypothesis Testing']
        },
        'Coursera': {
            'Developing Applications with SQL,Databases, and Django': ['SQL', "ORM", "Django"],
            'Developing Front-End Apps with React': ['React', 'Redux'],
            'Data Visualization and Communication with Tableau': ['Tableau', "Data Presentation"],
            'Programming with JavaScript': [],
            'Intro to Web Dev w/ HTML, CSS, JavaScript': [],
            'Introduction to Cloud Computing':[]
        },
        'Humanities': { "Humanities (total of 24 units)": ['Critical Writing'] },
        'HighSchool': { 'IB Business And Management': ['Marketing', "Operation Managemment"] }
    };

    var cards;
    cards = areas.map((area) => {
        return (<Coursecard name={area} courses={courses[area]} key={area}></Coursecard>)
    });

    // var skills = ['MLE',"Hidden Markov Model", "Naive Bayes", "LSTM", "BOW","Bio-inspired Algorithm"]
    var skills = [];
    for (var area = 0; area < Object.keys(courses).length; area++){
        const area_list = Object.keys(courses);
        const courses_in_area = courses[area_list[area]];
        const course_list = Object.keys(courses[area_list[area]]);
        
        for (var course = 0; course < course_list.length; course++){
            
            const course_name = course_list[Object.keys(course_list)[course]];
            const skill_list = courses_in_area[course_name];
            skills.push(...skill_list);
        }
    }
    skills.push('HTML','CSS','React','Git')

    let skills_render = "<div class='container'><div class='row mt-3'>"
    for (var j = 0; j < skills.length; j++) {
        if (j % 4 === 0 && j !== 0) {
            skills_render = skills_render + "</div></div><div class='container'><div class='row mt-3'>";
        }
        skills_render = skills_render + '<div class="col-sm" id="courses"><b>' + skills[j] + '</b></div>' ;}

    console.log(skills_render)
    return (
        <div>
            <Navbar></Navbar>
            <BusCard></BusCard>
            <h2 style={{ 'marginLeft': '7%' }}>Courses Taken </h2>
            <br></br>
            {cards}
            {/* <Coursecard name ='MachineLearning' ></Coursecard>
            <Coursecard name ='DataScience' ></Coursecard>
            <Coursecard name ='NeuralScience' ></Coursecard>
            <Coursecard name ='Coursera' ></Coursecard>
            <Coursecard name ='HighSchool' ></Coursecard> */}
            <div> 
                <h3 style={{ 'marginLeft': '7%' }}>Websites I Enjoyed Learning From </h3>
                <ul style={{ 'marginLeft': '7%' }}>
                    <li> <a href='https://stepik.org/course/579/syllabus'>Advanced Data Structures</a></li>
                    <li> <a href='https://www.internetingishard.com/html-and-css/'>HTML & CSS Is Hard But It Doesn't Have To Be</a></li>
                    <li> <a href='https://foundations-computational-linguistics.github.io/'>Foundamentals of Computational Linguistics</a></li>
                    <li> <a href='http://robotics.stanford.edu/~birch/projective/projective.html'>An Introduction to Projective Geometry (for computer vision)</a></li>
                    <li> <a href = 'https://ocw.mit.edu/courses/6-096-introduction-to-c-january-iap-2011/'> Introduction To C++ from MIT Open Courseware</a></li>
                </ul>
            </div>

            <div style={{width:'',marginLeft:'0%'}}>
            <h3 style={{ 'marginLeft': '7%' }}>List of Skills Aquired:</h3>
            <div className="Container" dangerouslySetInnerHTML={{ __html: skills_render }}></div>

            </div>
            <br></br>
            <br></br>
        </div>
    );
};

export default Courses;

