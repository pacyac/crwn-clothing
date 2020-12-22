import React from "react";
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'; 
import SignInAndSignUpPage from "./pages/signin-and-signout-page/signin-and-signout-page.component";
import Header from "./components/header/header.component";

import { setCurrentUser } from './redux/user/user.actions';   

import { auth,createUserProfile } from "./firebase/firebase.utilis";

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    console.log(this.props);
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {
        const userRef = await createUserProfile(user);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({currentUser: {id: snapshot.id,...snapshot.data()}});
        })

        // console.log(this.state);
      }else{
        setCurrentUser({currentUser: user})
      }
      
      // this.setState({ currentUser: user   })
      // console.log(await createUserProfile(user));
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />  
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))//dispatches plain object ie "SET_CURRENT_USER" to each reducer;
})

export default connect(null,mapDispatchToProps)(App);
//<Homepage />