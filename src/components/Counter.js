import React ,{useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  const countOnIncrease=()=>{

    setCount( count + 1);
    // console.log(count);
  }
  const countOnDecrease=()=>{

    setCount( count - 1);
    // console.log(count);
  }
  const countOnReset=()=>{

    setCount( 0 );
    // console.log(count);
  }
  // const [count, setCount] = useState(props.count);


  return (
    <div>
      <>
      <h2>{count}</h2>

      <button type="button" onClick={countOnIncrease} className="btn btn-success mx-1">Increase</button>
      <button type="button" onClick={countOnDecrease} className="btn btn-danger mx-1">Decrease</button>
      <button type="button" onClick={countOnReset} className="btn btn-warning mx-1">Reset</button>


      {/* <button type="button" className="btn btn-danger mx-1">Decrease</button> */}
      {/* <button type="button" className="btn btn-warning mx-1">Reset</button> */}
 
      </>
      
    </div>
  )

}