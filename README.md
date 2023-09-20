# Recipe Meister
 
Recipe Meister is a tiny little app that lets you browse through your favourite recipes. It also lets you search recipes by title, and you can even add your favourite recipe to the collection.

 # Getting Started
 Start by forking the project and cloning it on your local system.on yoyr terminal npm install to install the packages and npm run start to start the server
 
# Key Skills
The intent of this exercise is to give you a thorough workout on the following React features:
Function Components
Conditional Rendering
useEffect() hook - Querying an API using Fetch
useState() hook
useReducer() hook
Controlled Components
Render Props
Rendering a list of items/components

# Expected Output
The app opens with the home screen as shown below:
![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/dc545a96-3027-462f-b8ec-c6aba8b7249c)

Users can filter recipes by partially typing the name of a recipe as shown below:
![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/93132ec6-b33d-47e9-8bf9-05b8267edbe0)

clicking on a recipe card displays the recipe in full as shown below. Clicking on the X button should take you back to the home view:
![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/109b1c5d-5fb0-4177-8c07-1a7e8d965534)

From the home view, clicking on the Add a Recipe button opens an interface which should allow you to add a recipe. The image below shows the filled-up form. Notice how the keywords field and the ingredients field allows you to add and remove multiple items. Clicking on the Save button should store the recipe data in the database using an API call and should return back to the updated home view:
![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/b33909d5-1a2b-45eb-ba35-78ed3a1287f3)

# API Endpoints
We’re using an in-memory database and an API that you can query right away using the fetch API. The following endpoints can be used readily:
 
GET      /api/recipes : This endpoint returns an array with two default recipe objects as contents. Every object has the following shape:

 {
  id: String (Unique ID for every recipe),
  title: String (Title of the recipe),
  description: String (Brief description of the recipe),
  keywords: Array [{
id: String, label: String }
] (Keywords related to the recipe),
  instructions: String (Cooking instructions),
  ingredients: Array [
{
id: String,
label: String
}
] (List of ingredients),
  dishType: String (Available choices: "Vegetarian" or "Vegan" or "Poultry" or "Meat" or "Seafood"),
  recipeImg: String (An Image Url for the dish)
}
 
 
GET      /api/recipe.id/id : This endpoint returns an object with a property named recipe containing an object representing the recipe as per the recipe object shape mentioned above. The id URL parameter represents the id of the recipe.
 
GET      /api/recipe.title/keyword : This endpoint returns a filtered array of recipe objects based on the provided ‘keyword’ as a URL parameter. Failing to pass the URL parameter will return all recipes from the database.
 
POST   /api/recipes : This endpoint lets you store a recipe into the database. The recipe object must adhere to the shape above for the application to behave correctly. The id value should be generated using the uuid package which comes pre-installed. 

# General Notes
CREATE THE PROJECT WITH fUNCTION COMPONENTS
Create all components in the /src/components
Stylesheet for the assignment is provided to you and comes imported into the index.js file. 
Use the design specification documents for all components to understand how the UIs are to be built and the exact CSS selectors to use so that components render correctly. 

# Notes for Component: App
The App Component represents the main component which composes together other components in the application and also implements state management. 
Since we’re not implementing a single page router, to switch UIs, you’ll have to use a state property. e.g. showUI: ‘home-view’ could be used to conditionally render the home view and similarly can be set to add-recipe-view or recipe-view respectively.
A Stylesheet has been provided with the application. Just follow the design specifications to build your layouts.
To bring in initial data or when filtering by title, the useEffect() hook should be used. 

# Notes for Component:AddRecipe 
The AddRecipe component should display a UI as per the design specification that allows the user to add a new recipe to the database. This component uses the Input, InputTags, Text, List and Select components for rendering various form elements.
Implement useReducer() for state management and mutation.
Your state object should have the following shape:
 
{
  id: String <uuid>
  title: String,
  description: String,
  keywords: [{id: String <uuid>, label: String}],
  instructions: String,
  ingredients: [{id: String <uuid>, label: String}],
  dishType: String,
  recipeImg: String
}
 
Implement a rudimentary validator which ensures the fields in the shape above are filled in and not empty before the onAdd function is called.
The id values in the shape above should be generated using the uuid package which comes preinstalled with the assignment. Begin by importing the uuid package using the following statement: import { v4 as uuidv4 } from "uuid"; Thereafter, invoke uuidv4() to generate an id.
 
The actual API call to save the recipe should take place in the App component.
 
# Notes for Component: Recipe
The Recipe component displays the recipe data in full with an image, the recipe title, description, keywords, a badge indicating the type of dish, ingredient lists and instructions. 
Equip this component with render props so that the actual layout of the recipe details can be done using children components instead of Recipe component itself. Refer to the design specifications for this component.
The only components that should render within the Recipe component should be the header with the words ‘LET’S COOK’ and a button to exit the view.
This component should accept the recipeId as a prop and use the /api/recipe.id/<id> API endpoint to fetch the recipe details. Use the Fetch API only to query the api endpoints. Implement the useEffect() hook to query the API whenever the recipeId prop value changes.
 
# Notes for Component:List 
The List component is used to render a controlled component that lets you create list of items such as ingredients for a recipe. This component consists of an input element and a list. Users should be able to type an item and press enter which should then update and display in a list within the component itself. At the same time, this action should invoke a function in the onUpdate prop, passing in the updated Array of objects.
Every time an item is added to the list, it should be stored in the component’s local state which can be used to render the list on the UI.
Every item is represented by an Object with the shape {id: String, label: String}
The id for every item should be generated using the uuid package as described in the notes for the AddRecipe component.
Users should also be able to remove items from the list by pressing an X button displayed on every list item.
This component should also accept a value prop which should be used to render a list of items. This should essentially initialize the local state variable in the component.

# Notes for Component:InputTags 
This component allows you to add keywords just like social media hashtags. Logically similar to the List component, the UI is a bit different here. Refer to the notes for the List component for key pointers on the logic behind this component.
Notes for Component: <Icon />
This component is used by the Recipe component to render an icon indicating if a dish is Vegetarian, Vegan, Meat, Poultry or Seafood. The src/icons folder contains icon images for the above-mentioned types. Your task is to map and render the value of the ‘type’ prop to the correct image.
When creating and using the <Select /> component in the <AddRecipe /> component, make sure you pass the array of select options as [“Vegetarian”, “Vegan”, “Meat”, “Poultry”, “Seafood”]. That way, the options will map correctly to the available image icons.

# Notes for Component- Text Component
The Text component simply renders a textarea element as per the design specifications.
The onChange event listener on the textarea should invoke a function in the onUpdate prop to pass data up to the AddRecipe component where this is used
Before passing data to the onUpdate function, all carriage returns in the text should be converted to \n\n so it renders correctly. This can be done using
 evt.target.value.replace(/(?:\r)/g, "\n\n")
 # Design Specification
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/3909b2cd-b951-4916-a071-47d073d195d6)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/0046e23a-8baa-4b2f-b07b-3678b2bd370e)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/b393c68e-e340-4e56-a64d-3cc894bec919)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/75e81126-9dd9-4980-a3f2-039a851ee80b)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/af47656b-8053-4b19-9357-2ff5cca43715)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/8e03c183-3a81-4011-84cf-521022fd64e0)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/b658c64c-7514-4f49-945d-d4c78a0d359c)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/a511a244-1db7-4c2e-b084-486b3aa4ab5f)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/86b0c686-d046-40b7-8482-5f187b348933)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/e806178f-2333-4618-a70f-12529a767a81)
 ![image](https://github.com/Dharini-MernStack/Recipie-Meister-BoilerPlate/assets/76996610/c635adc7-3b59-4841-8509-9ecbf1570517)













