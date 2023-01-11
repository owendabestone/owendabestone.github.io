import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type){
        case "EXPAND" :
            action.type = "DONE";
			
            state.expand.map((currentExp)=> {
                if(currentExp.name === action.payload) {
                    currentExp.hide = !currentExp.hide;
                };
                return currentExp
            });
            return {
                ...state,
            }; 
        default:
            return state;
        }

};
    



const initialState = {
	expand: [
		{ id: "MachineLearning", name: "MachineLearning",hide:true },
		{ id: "DataScience", name: "DataScience", hide:true },
		{ id: "NeuralScience", name: "NeuralScience", hide:true },
		{ id: "Coursera", name: "Coursera", hide:true },
		{ id: "HighScool", name: "HighScool", hide:true },
		{ id: "Physics", name: "Physics", hide:true },
		{ id: "Humanities", name: "Humanities", hide:true }
	]
};
export const AppContext = createContext();


export const AppProvider = (props) => {
	// 4. Sets up the app state. takes a reducer, and an initial state
	const [state, dispatch] = useReducer(AppReducer, initialState);

    // var hide = true;
    // // expand.map((currentExp)=>{
    // //     if(currentExp.name === props.name) {
    // //         hide = currentExp.hide;
    // //     };
    // //     return currentExp
    // // });
    // for (var i = 0 ; i < state.expand.length; i++){
    //     if(state.expand[i].name === props.name) {
    //                 hide = state.expand[i].hide;
    //             };
    // }
	return (
		<AppContext.Provider
			value={{
				expand: state.expand,
				dispatch
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
