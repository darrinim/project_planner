import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import EmailSub from './components/EmailSub/EmailSub';
import Footer from './components/Footer/Footer';
import Project from './components/Project';
import PlanName from './components/PlanName/PlanName';
import PlanDescription from './components/PlanDescription/PlanDescription';
import PlanFullDetails from './components/PlanFullDetails/PlanFullDetails';
import Login from './components/Login/Login'

import { allGear, oneGear, getGearName, deleteGear, createGear, loginUser, registerUser, tripGear, getTrip, userTrips, getUser, makeTrip, deleteTrip, verifyUser, allTrips, oneTrip, getTg } from './services/api';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    currentUser: null,
    form: {
      username: "",
    },
    authFormData: {
      email: "",
      username: "",
      password: "",
    },
    authLoginData: {
      username: "",
      password: "",
    },
    planDetailsData: {
      name: "",
      description: "",
      mvp: "",
      postMvp: ""
    }
  };

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      form: {
        [name]: value
      }
    }));
  };

  handlePlanChange = async (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      planDetailsData: {
        [name]: value
      }
    }));
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
    localStorage.removeItem('jwt');
    this.props.history.push('/');
  };

  checkUser = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  };

  handleLogin = async (e) => {
    // e.preventDefault();
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData.user
    })
    localStorage.setItem("jwt", userData.token)
    // THE BELOW CODE IS WHAT I WILL EVENTUALLY USE TO GET IT TO REDIRECT TO EITHER NAME YOUR PROJECT
    this.props.history.push('/plan')
  };

  handleLog = async (e) => {
    e.preventDefault();

    if (this.state.authLoginData.username !== "" && this.state.authLoginData.password !== "") {

      const userData = await loginUser(this.state.authLoginData);
      this.setState({
        currentUser: userData
      })
      localStorage.setItem("jwt", userData.token)
      // BELOW SHOULD GO TO LIST OF USERS PROJECTS
      this.props.history.push('/fulldetails')
    }
  };

  handleRegister = async (e) => {
    e.preventDefault();
    if (this.state.authFormData.username !== "" && this.state.authFormData.email !== "" && this.state.authFormData.password !== "") {
      await registerUser(this.state.authFormData);
      this.handleLogin();
    }
  };

  handleLogout = (e) => {
    this.setState({ currentUser: null });
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  };


  handleAuth = async (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value,
      }
    }))
  };

  handleAuthLogin = async (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      authLoginData: {
        ...prevState.authLoginData,
        [name]: value,
      }
    }))
  };

  getGear = async (e) => {
    const gear = await allGear();
    this.setState({ gear });
  };

  makeGear = async (e) => {
    this.setState({
      inputGear: e
    })
    await createGear({gear: e});
  };

  obliterateGear = async (gearId) => {
    await deleteGear(gearId);
  };

  handleGearClick = (e) => {
    this.setState(prevState => ({
      selectedGear: [...prevState.selectedGear, e]
    }))
  };

  removeGearClick = async (e) => {
    this.setState(prevState => ({
      selectedGear: prevState.selectedGear.filter((ele, i) => i !== e)
    })
    )
  };

  makeATrip = async (tripType) => {
    const tripName = await oneTrip(tripType);
    const current = await makeTrip({ trip: tripName.trip });
    this.setState({
      tripSelected: current
    })
  };



  handleSubmit = (e) => {
    this.setState({
      location: e.target.value
    })
  };


  componentDidMount() {
    this.checkUser();
  };


  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => (
          <>
          <Header
            handleLogout={(e) => this.handleLogout(e)}
          />
          <Featured />
          <EmailSub />
          <Footer />
          <Project />
          </>
        )} />
        <Route path='/plan' render={() => (
          <>
          <Header
            handleLogout={(e) => this.handleLogout(e)}
          />
          <PlanName
            currentUser={this.state.currentUser.username}
          />
          <Footer />
          </>
        )} />
        <Route path='/description' render={() => (
          <>
          <Header
            handleLogout={(e) => this.handleLogout(e)}
          />
          <PlanDescription />
          <Footer />
          </>
        )} />
        <Route path='/fulldetails' render={() => (
          <>
          <Header
            handleLogout={(e) => this.handleLogout(e)}
          />
          <PlanFullDetails
            currentUser={this.state.currentUser.user.username}
            planDetailsData={this.state.planDetailsData}
            handlePlanChange={this.handlePlanChange}
          />
          <Footer />
          </>
        )} />
        <Route path='/login' render={(props) => (
          <>
          <Header
            {...props}
            handleLogout={(e) => this.handleLogout(e)}
          />
          <Login
            {...props}
            handleLogin={(e) => this.handleLogin(e)}
            handleRegister={(e) => this.handleRegister(e)}
            authFormData={this.state.authFormData}
            authLoginData={this.state.authLoginData}
            handleChange={this.handleAuthLogin}
            handleAuthChange={this.handleAuth}
            handleLog={(e) => this.handleLog(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
            handleRegisterClick={(e) => this.handleRegisterClick(e)}
          />
          <Footer />
          </>
        )} />
        </Switch>
      </div>
    );
  };
};

export default withRouter(App);
