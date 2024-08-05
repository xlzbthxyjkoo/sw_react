import React from "react";
import './App.css';
import R026_ForceUpdate from "./ex020/R026_ForceUpdate";

function App() {
  return (
    <div>
      <h1>React 실습</h1>
      <p>HTML 화면</p>
{/*       <R003ClassComponent></R003ClassComponent>
      <R003Component></R003Component>
      <R004_LifecycleEx></R004_LifecycleEx> 
      <R005_LifecycleEx></R005_LifecycleEx> 
      <R006_LifecycleEx prop_value = 'FromApp.jsx'></R006_LifecycleEx>
      <R007_LifecycleEx prop_value = 'FromApp.jsx'></R007_LifecycleEx> 
      <R008_LifecycleEx prop_value = 'FromApp.jsx'></R008_LifecycleEx> 
      <R009_Es6/> 
      <R010_Variable></R010_Variable> 
      <R011_SpreadOperator></R011_SpreadOperator> 
      <R013_ArrowFunction></R013_ArrowFunction>
      <R014_ForEach></R014_ForEach> 
      <R017_Props></R017_Props>
      <R018_PropsDatatype
      String="react"
      Number={200}
      Boolean={1==1}
      Array={[0,1,8]}
      ObjectJson={{react:"리액트", version:"200"}}
      Function={console.log("FunctionProps: function!")}/> 
      <R019_PropsBoolean BooleanTrueFalse={false}/>
      <R019_PropsBoolean BooleanTrueFalse/> 
      <R021_PropsRequired ReactNumber={100}/>
      <R022_PropsDefault ReactNumber={100}/>  
      <R023_PropsNode>
        <span>node from App.jsx</span>
      </R023_PropsNode>
      <R024_ReactState reactString={"react"}/>
      <R025_SetState></R025_SetState> */}

      <R026_ForceUpdate/>



    </div>
  );
}

export default App;