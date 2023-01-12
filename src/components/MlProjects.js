import Navbar from './Navbar';
import BusCard from './BusCard';

const MlProjects = () => {
    return (<div>
        <Navbar></Navbar>
        <BusCard></BusCard>

        {/* Project one */}
        <div class='container'>
            <table class="table mr-5" style={{ marginRight: '1em' }}>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Fall 2022</th>
                        <th></th>
                        <th scope="row"> <a href='https://eval.ai/web/challenges/challenge-page/1733/overview'>
                            eBay 2022 University Machine Learning Competition</a> </th>
                        <td></td>

                    </tr>
                    <tr>
                        <th></th>
                        <td><b>Area:</b></td>
                        <td>NLP, Name Entity Recognition</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Dataset: </b></td>
                        <td>Training set: 5000 titles (text may contain non-ASCII characters),
                            test set: 2500 randomly chosen from 25000 titles. </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Task: </b></td>
                        <td>Correctly tag eBay listing titles with 32 possible tags.
                            Potentially eBay could use the model to predict the properties of the listings.
                            <div><img src={require("./ebay_inandout.png")} width='75%' height='60%' alt='ebay input output' ></img></div>
                        </td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Challenge: </b></td>
                        <td>Lack of training data. Messy raw text inputs.
                        </td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>My Role </b></td>
                        <td> I devised and coded everything.</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Methods: </b></td>
                        <td> <div><img src={require("./ebay_method_1.png")} width='60%' height='60%' alt='method1' ></img></div>
                            <div><img src={require("./ebay_method_2.png")} width='60%' height='60%' alt='method2' ></img></div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"></th>
                        <td><b>Results: </b></td>
                        <td> F1 score of 0.805 using method 1 and F1 score of 0.78 using method 2.
                            <div> Example predicted output:</div>
                            <div><img src={require("./ebay_result.png")} width='90%' height='60%' alt='ebay result' ></img></div>
                            <div> <a href='https://github.com/owendabestone/Name-Entity-Recognition-Project'>Code </a></div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <br></br>
        {/* Project two */}
        <div class='container'>
            <table class="table mr-5" style={{ marginRight: '1em' }}>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Fall 2022</th>
                        <th></th>
                        <th scope="row"> <a href='https://github.com/owendabestone/Academic-Papers/blob/main/Size%20Fitting%20Recommendation%20-%20CSE258.pdf'>
                            <b>Clothing Fit Prediction</b></a> </th>
                        <td></td>

                    </tr>
                    <tr>
                        <th></th>
                        <td><b>Area:</b></td>
                        <td>Recommender System</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Dataset: (RentTheRunway) </b></td>
                        <td>A total of 192544 users’ purchasing history.
                            For each purchase, the user rates either the cloth as too large, too small, or fitting just right. We used 80% of the data as the training set.</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Task: </b></td>
                        <td>Correctly predict whether a given cloth would be too large, too small, or fits just right given the past user/item history.

                        </td>

                    </tr>

                    <tr>
                        <th scope="row"></th>
                        <td><b>Challenge: </b></td>
                        <td> Imbalanced dataset. Most of the labels are "fit"; yet, the "fit" class is being fitted the most poorly.
                        </td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>My Role </b></td>
                        <td> I built the latent factor model and combined the Logistic Regression model my partner has built to improve the overall model performance.
                            I came up with a Nearest-Neighbor approach as our baseline model.
                            I also did the background research and wrote the related work section in the paper.
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Methods: </b></td>
                        <td><div> The optimization of the Latent Factor Model:</div>
                            <div><img src={require("./clothes_lfm.png")} width='90%' height='60%' alt='lfm' ></img></div>
                            <div> The overall model:</div>
                            <div><img src={require("./clothes_model.png")} width='80%' height='60%' alt='model' ></img></div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"></th>
                        <td><b>Results: </b></td>
                        <td> Accuracy of 75.1% with an average area-under-the-curve (AUC) of 0.687.
                            The performance is only a few percentages behind the state-of-the-art models.
                            <div><img src={require("./clothes_roc.png")} width='60%' height='60%' alt='roc' ></img></div>
                            <div> <a href='https://github.com/owendabestone/CSE258-final-project'>Code </a></div>
                        </td>


                    </tr>
                </tbody>
            </table>
        </div>

        <br></br>
        {/* Project three */}
        <div class='container'>
            <table class="table mr-5" style={{ marginRight: '1em' }}>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Spring 2022</th>
                        <th></th>
                        <th scope="row"> <a href='https://github.com/owendabestone/Academic-Papers/blob/main/Safe%20Trajectory%20Tracking%20Using%20Certainty%20Equivalence%20Control%20-%20ECE276B.pdf'>
                            <b>Safe Trajectory Tracking</b></a> </th>
                        <td></td>

                    </tr>
                    <tr>
                        <th></th>
                        <td><b>Area:</b></td>
                        <td>Robotics, Optimal Control, Reinforcement Learning, Optimization</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Dataset:</b></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Task: </b></td>
                        <td> Safely following the trajectory of a moving target by controlling the angle and the acceleration of a "robot".
                        </td>

                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>My Role </b></td>
                        <td> Applying lesson materials to code and perform optimization and hyperparameter tuning. And also writing the paper.
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td><b>Methods: </b></td>
                        <td><div> By using Certainty-Equivalence Control,
                            we can turn the problem into a deterministic finite horizon optimal control problem.
                            Solving the problem is to minimize the following equation (esssentially a value function) </div>
                            <div><img src={require("./robotics_equation.png")} width='80%' height='60%' alt='equation' ></img></div>

                            Finding the optimal requires tuning Q, R, rt, q, and gamma.
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"></th>
                        <td><b>Results: </b></td>
                        <td>
                            <div><img src={require("./robotics_gif.gif")} width='60%' height='60%' alt='robot' ></img></div>
                        </td>


                    </tr>

                </tbody>
            </table>
        </div>





    </div>);
}

export default MlProjects;