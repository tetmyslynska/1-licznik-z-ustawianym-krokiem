import React from 'react';
//import DisplayAdd from "./DisplayAdd";

function AddButton(props) {
    return(
<div>
    <button onClick={()=> {props.buttonMethod('add');
    }}>Add 
     <span className="add-number" onClick={()=>{props.addNumber()}}>
     {props.addNumber}
     </span> 
    </button>
</div>
    )}

    export default AddButton;