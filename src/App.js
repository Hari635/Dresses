
import './App.css';
import React from 'react'
import HomePage from './pages/homepage.component'
import { Switch,Route,Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopPage from './pages/shop.components'
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up.component";
import { auth,createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import  CheckoutPage  from "./pages/checkout.component";

class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     currentUser:null
  //   }
  // }
unsubscribeFromAuth=null
  componentDidMount(){
    const { setCurrentUser }=this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async (userAuth)=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot=>{
        setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          })
          // console.log(this.state);
        
      }
      setCurrentUser(userAuth)

    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact  path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );

  }
  
}

const mapStateToProps=createStructuredSelector(
  {
    currentUser:selectCurrentUser
  }
)
const mapDispatchToprops=(dispatch)=>{
  return{
    setCurrentUser:(user)=>dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(App);
