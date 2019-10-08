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
import Login from './components/Login/Login';
import Completed from './components/Completed/Completed';

import { allGear, oneGear, getGearName, deleteGear, createGear, loginUser, registerUser, tripGear, getTrip, userTrips, getUser, makeProject, deleteTrip, verifyUser, allTrips, oneTrip, getTg, getProjects, deleteProject } from './services/api';

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
      postMvp: "",
      status: "",
    },
    userProjects: []
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
    console.log('this is name, value', name, value);
    this.setState(prevState => ({
      planDetailsData: {
        ...prevState.planDetailsData,
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
    // console.log('THIS IS THE CURRENT USER', currentUser);
    if (currentUser) {
      this.setState({ currentUser });
    }
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const userData = await loginUser(this.state.authFormData);
    console.log('this is user data', userData.user);
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
        currentUser: userData.user
      })
      localStorage.setItem("jwt", userData.token)
      // BELOW SHOULD GO TO LIST OF USERS PROJECTS
      this.getUserProjects(e);
      this.props.history.push('/completed')
    }
  };

  handleRegister = async (e) => {
    e.preventDefault();
    if (this.state.authFormData.username !== "" && this.state.authFormData.email !== "" && this.state.authFormData.password !== "") {
      await registerUser(this.state.authFormData);
      this.handleLog(e);
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


  handleSubmitPlan = async (e) => {
    e.preventDefault();
    await makeProject(this.state.planDetailsData, this.state.currentUser.id);
  };

  getUserProjects = async (e) => {
    e.preventDefault();
    const allProjects = await getProjects(this.state.planDetailsData, this.state.currentUser.id);
    this.setState({
      userProjects: allProjects
    })
  };


  // deleteUserProjects = async (e) => {
  //   e.preventDefault();
  //   const deleteProject = await.deleteProject(this.state.userProjects.id)
  //   thissetState({
  //     userProjects:
  //   })
  // }

  removeGearClick = async (e) => {
    this.setState(prevState => ({
      selectedGear: prevState.selectedGear.filter((ele, i) => i !== e)
    })
    )
  };

  deleteUserProjects = async (projectId) => {
    // e.preventDefault();
    console.log('this is deleteUserProjects');
    const deletingProject = await deleteProject(projectId);
    this.setState(prevState => ({
      userProjects: prevState.userProjects.filter((el, i) => el.id !== projectId)
    })
    )
  }


  async componentDidMount() {
    await this.checkUser();
  };


  render() {
    // console.log('this is App: state: currentUser',this.state.currentUser)
    // console.log(this.state.planDetailsData)
    // console.log(this.state.currentUser.user.username && this.state.currentUser.user.username)
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
            currentUser={this.state.currentUser}
          />
          <Footer />
          </>
        )} />
        <Route path='/fulldetails' render={() => (
          <>
          <Header
            handleLogout={(e) => this.handleLogout(e)}
          />
          <PlanFullDetails
            currentUser={this.state.currentUser}
            planDetailsData={this.state.planDetailsData}
            handlePlanChange={this.handlePlanChange}
            handleSubmitPlan={this.handleSubmitPlan}
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
            getUserProjects={(e) => this.getUserProjects(e)}
          />
          <Footer />
          </>
        )} />
        <Route path='/completed' render={() => (
          <>
          <Header
            handleLogout={(e) => this.handleLogout(e)}
          />
          <Completed
            currentUser={this.state.currentUser}
            planDetailsData={this.state.planDetailsData}
            userProjects={this.state.userProjects}
            deleteUserProjects={this.deleteUserProjects}
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
