import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Routes from './config/routes';
import Footer from './components/Footer/Footer';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;






// import React from 'react';
// import Routes from './config/routes';
// //import './App.css';
// import UserAPI from './api/UserAPI';
// import Nav from './components/Landing/Nav/Nav';
// import Header from './components/Landing/Header/Header';

// class App extends React.Component {
//   state = {
//     loggedIn : false,
//     currentUser: {}
//   }
//   componentDidMount = () => {
//     // verify current session
//     UserAPI.verify()
//     .then(res => {
//     // if status 200, set loggedIn to true, currentUser to non-null
//       this.setState({
//           loggedIn: true,
//           currentUser: res.data.currentUser
//       })
//   })
//     // if status 200, set loggedIn to true, currentUser to non-null
//   }
//   loggedIn = (user) => {
//     localStorage.setItem('loggedIn', true);
//     this.setState({
//       loggedIn: true,
//       currentUser: user
//     })
//   }
//   logout = () => {
//     localStorage.setItem('loggedIn', false);
//     this.setState({
//       loggedIn: false,
//       currentUser: ''
//     })
//     UserAPI.logout();
//   }
//   render() {
//     return (
//       <div className="App">
//         <Nav loggedIn={this.state.loggedIn} logout={this.logout}/>
//         {/* { routes } */}
//         <Routes loggedIn={this.loggedIn} user={this.state.currentUser} />
//         <Header />
//       </div>
//     );
//   }
// }

// export default App;
