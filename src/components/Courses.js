import Navbar from './navbar';
import BusCard from './BusCard';
import Coursecard from './Coursecard'
const Courses = () => {
    const areas = ['MachineLearning', 'DataScience', 'NeuralScience', 'Physics', 'Coursera', 'Humanities', 'HighSchool',];
    const courses = {
        'MachineLearning': {
            'Probabilistic Learning': ['MLE', "Hidden Markov Model", 'Naive Bayes'],
            'Statistical Natural Langugage Processing': ['LSTM', 'BOW'],
            'Seminar on Special Topic: Genetic Algorithm': ['Genetic Algorithm', "Game Theory"],
            'Computational Linguistics': ['Clojure'],
            'Convex Optimization Algorithms': ['CVXPY'],
            'Machine Learning For Robotics': ['Robotics', 'Model-free Reinforcement Learning'],
            'Planning & Learning in Robotics': ['Search Algorithms', 'Model-based Reinforcement Learning'],
            'Deep Generative Models': ['Deep Learning', 'Pytorch', 'GAN'],
            "Recommender System & Web Mining": ['Latent Factor Model']
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
            'Programming with JavaScript': ['^'],
            'Intro to Web Dev w/ HTML, CSS, JavaScript': ['^'],
            'Introduction to Cloud Computing':['^']
        },
        'Humanities': { "Humanities (total of 24 units)": ['Critical Writing'] },
        'HighSchool': { 'IB Business And Management': ['Marketing', "Operation Managemene"] }
    };

    var cards;
    cards = areas.map((area) => {
        return (<Coursecard name={area} courses={courses[area]} key={area}></Coursecard>)
    });



    return (
        <div>
            <Navbar></Navbar>
            <BusCard></BusCard>
            <h2 style={{ 'marginLeft': '7%' }}>Courses</h2>
            {cards}
            {/* <Coursecard name ='MachineLearning' ></Coursecard>
            <Coursecard name ='DataScience' ></Coursecard>
            <Coursecard name ='NeuralScience' ></Coursecard>
            <Coursecard name ='Coursera' ></Coursecard>
            <Coursecard name ='HighSchool' ></Coursecard> */}

        </div>
    );
};

export default Courses;

