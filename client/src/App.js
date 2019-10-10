import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import Testimonials from './components/Testimonials/Testimonials';
import EmailSub from './components/EmailSub/EmailSub';
import Footer from './components/Footer/Footer';
import PlanName from './components/PlanName/PlanName';
import PlanDescription from './components/PlanDescription/PlanDescription';
import PlanFullDetails from './components/PlanFullDetails/PlanFullDetails';
import Login from './components/Login/Login';
import Completed from './components/Completed/Completed';
import EditProjectForm from './components/EditProjectForm/EditProjectForm';
import HeaderLoggedIn from './components/HeaderLoggedIn/HeaderLoggedIn';

import { loginUser, registerUser, getUser, makeProject, verifyUser, editProjects, getProjects, deleteProject } from './services/api';

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
      status: ""
    },
    userProjects: []
  };

  /* ==============================================
  =============HANDLECHANGE FUNCTIONS=============
  ============================================== */

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

  /* ==============================================
  =========REGISTER/LOGIN/LOGOUT FUNCTIONS========
  ============================================== */

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
      this.getUserProjects(userData.user);
      this.props.history.push('/completed')
    }
  };

  handleRegister = async (e) => {
    e.preventDefault();
    if (this.state.authFormData.username !== "" && this.state.authFormData.email !== "" && this.state.authFormData.password !== "") {
      const user = await registerUser(this.state.authFormData);
      this.setState({
        currentUser: user
      })
    }
  };

  handleLogout = (e) => {
    this.setState({ currentUser: null });
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
    localStorage.removeItem('jwt');
    this.props.history.push('/');
  };

  /* ==============================================
  =================AUTH FUNCTIONS=================
  ============================================== */

  checkUser = async () => {
    const currentUser = await verifyUser();
    // console.log('THIS IS THE CURRENT USER', currentUser);
    if (currentUser) {
      this.getUserProjects(currentUser);
      this.setState({ currentUser });
    }
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

  /* ==============================================
  =============SUBMIT FORMS FUNCTIONS=============
  ============================================== */

  handleSubmitPlan = async (e) => {
    e.preventDefault();
    const newProject = await makeProject(this.state.planDetailsData, this.state.currentUser.id);
    this.setState(prevState => ({
      userProjects: [ ...prevState.userProjects, newProject]
    }))
    this.props.history.push('/completed')
  };

  handleSubmitName = async (e) => {
    e.preventDefault();
    console.log('LOOK FOR THIS SERIOUSLY', name, value);
    const { name, value } = e.target
    this.setState(prevState => ({
      planDetailsData: {
      ...prevState.planDetailsData,
      [name]: value
    }
    }));
  };


  handleSubmitEdits = async (e) => {
    e.preventDefault();
    const newProject = await makeProject(this.state.planDetailsData, this.state.currentUser.id);
    this.setState(prevState => ({
      userProjects: [ ...prevState.userProjects, newProject]
    }))
    this.props.history.push('/completed')
  };


  /* ==============================================
  =================CRUD FUNCTIONS=================
  ============================================== */

  getUserProjects = async (currentUser) => {
    const allProjects = await getProjects(this.state.planDetailsData, currentUser.id);
    this.setState({
      userProjects: allProjects
    })
  };

  deleteUserProjects = async (projectId) => {
    console.log('this is deleteUserProjects');
    const deletingProject = await deleteProject(projectId);
    this.setState(prevState => ({
      userProjects: prevState.userProjects.filter((el, i) => el.id !== projectId)
    })
    )
  }

  updateProject = async (e) => {
    e.preventDefault();
    const { id, ...data } = this.state.planDetailsData;
    const updatedProject = await editProjects(data, id);
    this.setState((prevState) => ({
      userProjects: prevState.userProjects.map((project) => project.id === id ? updatedProject : project),
      planDetailsData: {
        name: "",
        description: "",
        mvp: "",
        postMvp: "",
        status: ""
      }
    }));
    this.props.history.push('/completed')
  }

  /* ==============================================
  ===============REDIRECT FUNCTIONS===============
  ============================================== */

  showEditForm = (project) => {
    const {createdAt, updatedAt, userId, user_id, ...planDetailsData} = project;
    this.setState({planDetailsData})
    this.props.history.push('/edit')
  }

  goToEdit = async (e) => {
    this.props.history.push('/edit');
  };

  goToDetails = async (e) => {
    this.props.history.push('/fulldetails');
  };


  componentDidMount() {
    this.checkUser();
  };


  render() {
    console.log('this is App: state: currentUser',this.state.currentUser)
    // console.log(this.state.planDetailsData)
    // console.log(this.state.currentUser.user.username && this.state.currentUser.user.username)
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => (
          <>
          <Header
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
          />
          <Featured />
          <Testimonials />
          <EmailSub />
          <Footer />
          </>
        )} />
        <Route path='/plan' render={() => (
          <>
          <HeaderLoggedIn
            handleLogout={(e) => this.handleLogout(e)}
          />
          <PlanName
            currentUser={this.state.currentUser}
            handleSubmitName={this.handleSubmitName}
            goToDetails={this.goToDetails}
            handlePlanChange={this.handlePlanChange}
          />
          <Footer />
          </>
        )} />
        <Route path='/fulldetails' render={() => (
          <>
          <HeaderLoggedIn
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
          <HeaderLoggedIn
            handleLogout={(e) => this.handleLogout(e)}
          />
          <Login
            {...props}
            handleLogin={(e) => this.handleLogin(e)}
            handleRegister={this.handleRegister}
            authFormData={this.state.authFormData}
            authLoginData={this.state.authLoginData}
            handleChange={this.handleAuthLogin}
            handleAuthChange={this.handleAuth}
            handleLog={(e) => this.handleLog(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
          <Footer />
          </>
        )} />
        <Route path='/completed' render={() => (
          <>
          <HeaderLoggedIn
            handleLogout={(e) => this.handleLogout(e)}
          />
          <Completed
            currentUser={this.state.currentUser}
            planDetailsData={this.state.planDetailsData}
            userProjects={this.state.userProjects}
            deleteUserProjects={this.deleteUserProjects}
            goToEdit={this.goToEdit}

            showEditForm={this.showEditForm}
          />
          <Footer />
          </>
        )} />
        <Route path='/edit' render={() => (
          <>
          <HeaderLoggedIn
            handleLogout={(e) => this.handleLogout(e)}
          />
          <EditProjectForm
            currentUser={this.state.currentUser}
            updateProject={this.updateProject}
            planDetailsData={this.state.planDetailsData}
            userProjects={this.state.userProjects}
            showEditForm={(e) => this.showEditForm(e)}
            handlePlanChange={this.handlePlanChange}
            handleSubmitPlan={this.handleSubmitPlan}
            handleSubmitEdits={this.handleSubmitEdits}
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
