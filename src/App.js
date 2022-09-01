import { useState, useEffect } from 'react';
import './App.css';

const App= () => {
   const name= 'Jojo';
 // const name =null;
  const isNameShowing= false;

const isUserLoggedIN = true;

//component
const Person = (props) =>{
return(
<>
<h1>Name: {props.name}</h1>
<h2>Last Name: {props.lastName}</h2>
<h2>Age: {props.age}</h2>
</>
)}

const [counter, setCounter] = useState(0); //hook, event e.g mouse click

useEffect(()=>{
  //alert ('Reload')
  
})
// react code starts from here !
  return (
    <div className="App"> 
{/* 
      <h1> Hello, {isNameShowing ? name: 'koko'} </h1>

      <h2> Hello {3+1} !</h2>

      {name ? (
        <>
        <h1> {name} </h1>
        </>
      ): (
        <>
        <h1>test</h1>
        <h2> there is no name!</h2>
        </>
      )} */}

     {/* <h1>hello, {name} </h1>  */}


     {/* properties */}
     {/* <Person name ={'Kookie'} lastName={'jung'} age={25}/> */}
     
     {/* <Person 
     name ={'jimin'} 
     lastName={'park'} 
     age={27}/>
     
     <Person 
     name ={'hyung'} 
     lastName={'tae'} 
     age={26}/> */}

     {/* <button onClick = {()=> alert('clicked')}>  - </button> */}
     {/* <button onClick = {()=> setCounter(-5)}>  - </button> */}
     <button onClick = {()=> setCounter((prevCount)=>prevCount-1)}>  - </button>
     <h1>{counter}</h1>
     <button onClick = {()=> setCounter((prevCount)=>prevCount+1)}>  - </button>



    </div>
  );
}

export default App;
