import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StrAddButton from './exe070/redux/StrAddButton';
// import { connect } from "react-redux";
// import Counter from './exe070/counter/MyCounter';
import Counter from './exe070/mobx_counter/Counter';
import CounterStore from './exe070/mobx_counter/store/CounterStore';

const myCounter = new CounterStore();

function App() {
  return (
    <div>
      {/* <span>{props.store.getState().data.strInStore}</span><br/> */}
      {/* <span>{props.strInApp}</span> */}
      {/* <StrAddButton store={props.store}/> */}
      {/* <StrAddButton AppProp="Study" /> */}
      <div>
      <Counter counter = {myCounter}/>
      </div>

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