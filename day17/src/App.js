import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome home</h1>
    <Link to="/about">Go to About</Link>
  </div>
)
// const About = () =>(
//   <div>
//     <h1>About</h1>
//     <Link to="/">Go Home</Link>
//   </div>
// )
// export class App extends React.Component{
//   render (){
//     return (
//     <Router>
//       <Switch>
//         <Route path="/about" component={About}></Route>
//         <Route path="/" component={Home}></Route>
//       </Switch>
//     </Router>)
//   }
// }

const About = ({ name }) => (
  <div>
    <h1>About {name}</h1>
  </div>
)
export class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" render={renderProps => (
            <div>
              <Link to="/about/ari">Ari</Link>
              <Link to="/about/nate">Nate</Link>
              <Route path="/about/:name" render={renderProps => (
                  <div>
                    <About name={renderProps.match.params.name}></About>
                    <Link to="/">Go Home</Link>
                  </div>
                )}>

              </Route>
            </div>
          )}></Route>
          <Route path="/" render={renderProps=>(
            <div>
              Home is underneath me
              <Home {...this.props} {...renderProps}/>
            </div>
          )}></Route>
        </Switch>
      </Router>)
  }
}
export default App;
