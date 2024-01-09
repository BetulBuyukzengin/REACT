//4) Create a component
function App(){
    const config={color:'red'};
    const inputType="number";
    const minValue=5;
    return (
    // <input type={inputType} min={minValue} />
    // <input type='number' min={5}/> ---> type='number' min={5} : PROPS
      // <div>
      //   {/* <h1>{config}</h1> --error */}
      //   {/* <input style={{border:'3px solid red'}}abc={config}/> */}
      //   {/* <input spellCheck />  */}
      //   {/* <input spellCheck={false} /> */}
      //     <input style={{border:"1px solid red"}}/>
      // </div>
      <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{backgroundColor: 'gray'}}
      />
      <h1>Hello</h1> 
    </div>
    )
  }
  export default App;