// AddRecipe Component
import React,{useReducer} from "react";
import Input from "./Input"

const initialState={
  title:"",
  description:"",
  keywords:[],
  instructions:[],
  dishType:"",
  receipeImg:""
}
const reducer=(state,action)=> {
  switch(action.type){
    case "update":
      return{
        ...state,
       ...action.payload
      };
default:
  throw new Error();
  }
};
const AddRecipe = ({onExit,onAdd}) => {
  const [state,dispatch] = useReducer(reducer,initialState);

  return (

    <div className="add-recipe">
      <h2>Add a Recipe</h2>
      <Input label="title" onInput={e=> dispatch({type:"update",payload:{title:e.target.value}})
     }
    value={state.title}/>
    </div>
    <
  );
};

export default AddRecipe;
