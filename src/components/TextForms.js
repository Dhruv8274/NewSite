// import React from 'react'
import React,{useState} from 'react'
export default function TextForms(props) {
    const[text,setText]=useState('Enter The Text Here');
    const handleUpClick=()=>{
        console.log("Upper Case Was Clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        console.log("Lower Case Was Clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleCopy=() => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
    const handleClear=()=>{
      let newText='';
      setText(newText);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleFirstWordCapital=()=>{
      let num=text.split(" ").length;
      console.log("num");
      setText(text[num+1].toUpperCase());
    }
  return (
    <>
    <div>
      <div className="mb-3" style={{color:props.mode === 'light'?'black':'white'}}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode === 'light'?'black':'white'}}><h1>Enter Your Text</h1></label>
      <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#fff6e6':'#67573ee2'}} id="exampleFormControlTextarea1" rows="12"></textarea>
      </div>
      <div className="button" >     
      <button className="btn btn-primary" onClick={handleUpClick} style={{backgroundColor:props.mode==='light'?'blue':'black'}} >Convert to Upper Case</button>
      <button className="btn btn-primary my-2 mx-3" onClick={handleLowerClick} style={{backgroundColor:props.mode==='light'?'blue':'black'}}>Convert to Lower Case</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleCopy} style={{backgroundColor:props.mode==='light'?'blue':'black'}}>Copy Text</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleClear} style={{backgroundColor:props.mode==='light'?'blue':'black'}}>Clear Text</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces} style={{backgroundColor:props.mode==='light'?'blue':'black'}}>Remove Extra Spaces</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleFirstWordCapital} style={{backgroundColor:props.mode==='light'?'blue':'black'}}>Capitalize Every First Word</button>
      </div>
    </div>
    <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Character</p>
    </div>
    </>
  );
}
  // style={{backgroundColor: props.mode === 'light'?'':'cream'}}