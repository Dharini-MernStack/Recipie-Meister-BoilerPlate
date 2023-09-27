// RecipeCard Component
import React from "react";
import PropTypes from "react-proptypes";

const RecipeCard = ({data,onSelected}) => {
  const {id,recipeImg,title,description,keywords}=data;
  return (
 <div className="recipe-card" onClick={onSelected.bind(this.id)}>
  <img className="recipe-img" src={recipeImg} alt={title}/>
  <div className="details">
  <h2>{title}</h2>
  <h3>{description}</h3>
  <div className="keywords">
    {keywords.map(({id,label})=>(
      <div className="keyword" key={id}>
      {label.toUpperCase()}
      </div>
    ))}
  </div>
 </div>
 </div>
 
  )
};
RecipeCard.defaultProps={
  data:{},
  onSelected:()=>{}
}
RecipeCard.propTypes={
  data:PropTypes.object.isRequired,
  onSelected:PropTypes.func
}
export default RecipeCard;
