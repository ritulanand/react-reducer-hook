import { useReducer } from "react";

function UseReducerHook(){


    const initialState = {
        count: 0,
        showCountFlag: true
    }
    function reducer(state,action){
        console.log(state,action);
        switch(action.type){
            case "add" : 

            return {
                ...state,
                count : state.count + 1

            }
            case "substract" : 

            return {
                ...state,
                count : state.count - 1
            }
            case "reset" :
                return {
                    ...state,
                    count : 0
                }

            case "showcount": 
             return {
                ...state,
                showCountFlag : !state.showCountFlag
             }
            default: 
            return state;
        }

    }
    const [state, dispatch]= useReducer(reducer, initialState);

    console.log("state", state)
    return (
        <div>
            <h1>Use reducer hook</h1>
            {
                state.showCountFlag ?  
                 <h3>
                Count is {state.count}
                </h3> : null
            }
           
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                <button onClick={() => dispatch({type:"add"})}>Increase Count</button>
                <button onClick={() => dispatch({type:"substract"})}>Decrease Count</button>
                <button onClick={() => dispatch({type:"reset"})}>Reset Count</button>
                <button onClick={() => dispatch({type:"showcount"})}>Show Count</button>
            </div>
        </div>
    )
}

export default UseReducerHook;