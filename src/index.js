import React from "react";
import ReactDom from "react-dom"


const H1 = () => {
  return (
    <h1 id="test" name="test">Hello world, React.js - Component!!!</h1>
  )
}

const Text = () => {
  return(
    <div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    
    <p>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
    </div>
  )
}

const App = () => {
  return (
      <>
        <H1/>
        <Text/>
      </>
   )
}


//const el = React.createElement("h1", {id:"test", name:"title"}, "Hello World");

//const el = <h1 id="test" name="test">Hello world, React.js</h1>



ReactDom.render(
    <App/>,  
    document.getElementById("root"));
  

