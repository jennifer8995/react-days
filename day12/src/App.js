import React from "react";
import Header  from './components/Header';
import Content from './components/Content';

//day-12
// function App (){
  
//     return(
//       <div className="app">
//         <Header></Header>
//         <Content></Content>
//       </div>
//     )
//   }

//day-13
const a = 10;
const ShowA =()=><div>{a}</div>
const MultipeA =()=> <div>{a*a}</div>
const b=[1,10,100,1000,10000];
// const App = props=>{
//   return (
//     <div className="app">
//       <ShowA></ShowA>
//       <MultipeA/>
//       <ul>
//         {b.map(i=>{
//           return <li key={i}>{i}</li>
//         })}
//       </ul>
//     </div>
//   )
// }
const App = props=>{
  return (
    <ul>{React.Children.map(b,i=>(
      <li>{i}</li>
    ))}</ul>
  )
}
export default App;
