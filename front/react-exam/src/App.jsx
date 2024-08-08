import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StrAddButton from './exe070/redux/StrAddButton';
// import { connect } from "react-redux";
import Counter from './exe070/counter/MyCounter';

function App(props) {
  return (
    <div>
      <h1>React 실습</h1>
      {/* <span>{props.store.getState().data.strInStore}</span><br/> */}
      {/* <span>{props.strInApp}</span> */}
      {/* <StrAddButton store={props.store}/> */}
      {/* <StrAddButton AppProp="Study" /> */}
      <Counter store ={props.store}/>

    </div>
  );
}
// let mapStateToProps = (state, props) => {
//   console.log('Props from main.jsx: ' + props.mainProp);
//   console.log('state.data.strInStore: ' + state.data.strInStore);
//   return {
//     strInApp: state.data.strInStore,

//   }
// }
// App = connect(mapStateToProps, null)(App);

export default App;