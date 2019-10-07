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
    isShowing: false,
    gear: [],
    inputGear: "",
    selectedGear: [],
    selectedTrip: "",
    tripSelected: "",
    allTripsSelected: "",
  };

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      form: {
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
    this.props.history.push('/home')
  };

  handleLog = async (e) => {
    e.preventDefault();

    if (this.state.authLoginData.username !== "" && this.state.authLoginData.password !== "") {

      const userData = await loginUser(this.state.authLoginData);
      this.setState({
        currentUser: userData.user
      })
      localStorage.setItem("jwt", userData.token)
      this.props.history.push('/home')
    }
  };

  handleRegister = async (e) => {
    e.preventDefault();
    if (this.state.authFormData.username !== "" && this.state.authFormData.email !== "" && this.state.authFormData.password !== "") {
      await registerUser(this.state.authFormData);
      this.handleLogin();
    }

  };

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
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

  };


  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => (
          <>
          <Header />
          <Featured />
          <EmailSub />
          <Footer />
          <Project />
          </>
        )} />
        <Route path='/plan' render={() => (
          <>
          <Header />
          <PlanName />
          <Footer />
          </>
        )} />
        <Route path='/description' render={() => (
          <>
          <Header />
          <PlanDescription />
          <Footer />
          </>
        )} />
        <Route path='/fulldetails' render={() => (
          <>
          <Header />
          <PlanFullDetails />
          <Footer />
          </>
        )} />
        <Route path='/login' render={() => (
          <>
          <Header />
          <Login />
          <Footer />
          </>
        )} />
        </Switch>
      </div>
    );
  };
};

export default withRouter(App);
