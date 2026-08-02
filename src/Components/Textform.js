import React, {useState} from 'react'

export default function Textform(props) {

  const [text, setText] = useState(" ");

  const handleUpClick = () =>{
    let newText = text.toUpperCase()
    setText (newText)
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText (newText)
  }

  const handleClearClick = () =>{
    let newText = ' ';
    setText (newText)
  }

  const handleOnChange = (event) =>
    setText(event.target.value)

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea class="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear screen</button>
    </div>
    <div className='container my-1'>
      <h4>Your text summary is shown below</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>


    </div>
  </>
  )
}
