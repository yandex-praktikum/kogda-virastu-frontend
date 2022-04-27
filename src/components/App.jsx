import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  Route, Routes, useNavigate, useLocation,
} from 'react-router-dom';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes.ts';
import Header from './Header';
import agent from '../agent';
import Article from './Article';
import { Editor } from '../components_refact';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import ProfileFavorites from './ProfileFavorites';
import Register from './Register';
import Settings from './Settings';

// import { push } from 'react-router-redux';
/*
const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }}; */
/*
const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
}); */

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const appLoaded = useState(false);
  // const appName = useState({toLowerCase:'test'});
  // const currentUser = useState('test')
  const common = useSelector((state) => state.common);
  console.log(common);
  const { appLoaded, appName, currentUser } = useSelector((state) => state.common);
  const location = useLocation();
  useEffect(() => {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    const onLoad = (payload, token) => {
      dispatch({
        type: APP_LOAD, payload, token, skipTracking: true,
      });
    };
    onLoad(token ? agent.Auth.current() : null, token);

    // onLoad(token ? agent.Auth.current() : null, token);
  }, [dispatch]);
  console.log(location);

  useEffect(() => {
    if (location) {
      // this.context.router.replace(nextProps.redirectTo);
      dispatch({ type: REDIRECT });
    }
  }, [dispatch, location]);

  /*
  <Header
  appName={appName}
  currentUser={currentUser} /> */

  if (appLoaded === true) {
    return (
      <div>
        <Header appName={appName} currentUser={currentUser} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/editor/:slug' element={<Editor />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/article/:id' element={<Article />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/@:username/favorites' element={<ProfileFavorites />} />
          <Route path='/@:username' element={<Profile />} />
        </Routes>
      </div>
    );
  }
  return <div>загрузка...</div>;
};

/*

class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(this.props.navigate(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
            </Routes>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// }; */
export default App;
