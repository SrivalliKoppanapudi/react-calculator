import Input from './components/Input'
import styles from './App.module.css'
import BtnCont from './components/BtnCont';
import { useState } from 'react';
function App(){
  let [inputVal,setVal]=useState("");
  const calHandle=(c)=>{
    if(c==='C'){
      inputVal=""
      setVal(inputVal)
    }
    else if(c==='='){
      const res=eval(inputVal)
      setVal(res)
    }
    else{
      const newDisplay=inputVal+c;
      setVal(newDisplay)
    }
  }
  
  return (<>
    
    <div className={styles.container}>
      <Input inputVal={inputVal}/>
      <BtnCont calHandle={calHandle}/>
    </div>
  </>)
}
export default App;