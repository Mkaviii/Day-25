
 
//Day-26(5/07/25)

/*Topics

1. What is React Hooks?
2. UseState , useEffect
3. Rendering API data in to JSX
React Forms
4. Why it is Required in React ?
5. API calling using useEffect
Keys in Array 
*/

// Two types of Components.

// 1.Class Components
/*

- It is a legacy way of creating components.
- Stateful components(component's Memory)
- They can hold and manager their own state.
- They have lifecycle methods that allow you to hook into different 
stage of a component's life(e.g., mounting,updating,unmounting).
- They are more verbose and require more boilerplate code.


*/
// 2.Functional Components.

/*
- it was available since the brginning of React but became more popular in the year of 2019 with the introduction of Hooks.
- stateless components
- They do not have their own state.
- They do not have lifecycle methods.
- They are simler and easier to read.
-  Dispite they are more performant, they are not stateful and do not have 
lifecycle methods and hence they are not sutiable.
- Then in 2019, React introduced hooks, which allow functional components to have 
state and lifecycle methods.
*/

/*
//Hooks

- Hooks are functions  that alllow you to use state and other React Features in functional components.
- useState and useEffect
- they were introduced in React 16.8
- All the hooks start with the world 'use'
- The most commonly used hooks are:
- useState: To manage state in functional components.
- useEffect: To perform side effects in functional components(similar to lifecycle methods in class components).

*/
 

 /*
 State
 - state is a value that can change over time
 - state is used to store data that can be changed by the user or by the application.
 
 */


/*
 import React,{useState} from 'react'
 
 function App() {
  const [count, setCount] = useState(0);
  
  console.log('count Increased',count);

  const countIncrese = () => {
    setCount(count +1);
    console.log('Increase');
  }

  const countDecrese = () => {
    setCount(count-1);
    console.log('Decrese')
  }

  const reset =() =>{
    setCount(0);
    console.log('count reset');
  }


   return (
    <>
    <h1>Counter: {count }</h1>
    <button onClick={countIncrese}>Increase</button>
    <button onClick={countDecrese}>Decrease</button>
    <button onClick={reset}>Reset</button>

    </>
   )
 }
 
 export default App
 */


 /*

 import React ,{useState} from 'react'
 
 function App() {
  const [like, setLike] = useState(0);
  const[dislike,setDislike] = useState(0);
  
  const handleLike = () =>{
    setLike(like+1);
    
  }
   
  const handleDislike = () =>{
    setDislike(dislike+1);
    
  }
   return (
     <>
     <button onClick={handleLike}>Like {like}</button>
     <button onClick={handleDislike}>Dislike {dislike}</button>
     </>
   )
 }
 
 export default App

*/ 
/*

- *complex state*
- state management 4 types used.
- state changes causes re-rendring of the component.

import React ,{useState} from 'react'
 
 function App() {
  const [reaction, setReaction] = useState({
    like:0,
    dislike:0
  })
  console.log(reaction);
  const handleLike = () =>{
    setReaction({...reaction,like:reaction.like+1});
    
  }
   
  const handleDislike = () =>{
    setReaction({...reaction,dislike:reaction.dislike-1});
    
  }
   return (
     <>
     <button onClick={handleLike}>Like {reaction.like}</button>
     <button onClick={handleDislike}>Dislike {reaction.dislike}</button>
     </>
   )
 }
 
 export default App

 
- useEffect Hook
- useEffect it is used to perform side effects in function components.
- it runs after the first render and after every update.
- side effects can include data fetching, subcribtion or manually changing the dom.
 */

import React from 'react'

const App =() =>{
  const[state,setState] = useState(0);

  //this effect runs after the first render and every time the component.
  // first way - depency given 
 /* 
  useEffect(()=>{
    fetch('https://www.worldometers.info/geography/flags-of-the-world/')
   .then(response => response.json())
   .then(data => console.log(data))

   },[]);

   */
  //this runs after the component mounts and after every re-render
  //second way - depency not given
  /*
  useEffect(()=>{
    fetch('https://www.worldometers.info/geography/flags-of-the-world/')
   .then(response => response.json())
   .then(data => console.log(data))

   });
   */

   //third way
   // state(specific dependency changes) effect any changes then re-render the component.
   useEffect(()=>{
    fetch('https://www.worldometers.info/geography/flags-of-the-world/')
   .then(response => response.json())
   .then(data => console.log(data))

   },[state]);

  return (
    <>
    <h1>flags</h1>
    <button onClick={()=> setState(state+1)}>Re-Render component</button>
    </>
  )
}

export default App

/*
component -> ui/html elements + Js logic
                |
                products Data -> via data fetching(API) ->set the data to the state -> components re-renders -> latest data is displayed
*/