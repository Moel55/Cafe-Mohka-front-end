import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/LoginPage/LoginPage'
import SignUpPage from '../components/SignupPage/SignupPage';
import Landing from '../components/Landing/Landing';



const Routes = () => {
  return (
     <div>
      <Switch>
       <Route exact path="/" component={ Landing } />
       <Route path="/SignUpPage" component={ SignUpPage }/>
       <Route path="/LoginPage" component={ LoginPage }/>
       {/* <Route path="/city" component={ City } /> */}
     </Switch> 
    </div>
  )
}

export default Routes;