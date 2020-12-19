import React from "react";
import { Route,Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'; 
import SignInAndSignUpPage from "./pages/signin-and-signout-page/signin-and-signout-page.component";
import Header from "./components/header/header.component";

import { auth,createUserProfile } from "./firebase/firebase.utilis";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {
        const userRef = await createUserProfile(user);
        
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser: {id: snapshot.id,...snapshot.data()}});
        })

        console.log(this.state);
      }else{
        this.setState({currentUser: user})
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
        <Header currentUser={this.state.currentUser}/>  
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

// function App() {
 
// }

export default App;
//<Homepage />