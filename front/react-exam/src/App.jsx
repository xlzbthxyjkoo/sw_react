import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import R060_FetchPost from "./exe060/R060_FetchPost";

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
      <R025_SetState></R025_SetState> 
      <R026_ForceUpdate/> 
      <ComponentCalss/> 
      <PureComponentClass/> 
      <R029_ShallowEqual/> 
      <R030_FunctionComponent/> 
      <R031_ReactHook></R031_ReactHook> 
      <R032_Fragments/> 
      <R033_ReturnMap/> 
      <R047_ReactstrapListGroup/> 
      <R048_ReactstrapModal/> 
      <R049_ReactstrapNavbar /> 
      <R050_ReactstrapPagination/> 
      <R051_ReactstrapPopover/> 
      <R052_ReactstrapProgress /> 
      <R053_ReactstrapSpinner/>
      <R054_ReactstrapTable/> 
      <R055_ReactstrapTab/> 
      <R056_SweeetalertBasic /> 
      <R057_SweetalertPosition/> 
      <R058_SweetalertConfirm/> 
      <R059_FetchGet /> */}

      <R060_FetchPost/>


    </div>
  );
}

export default App;