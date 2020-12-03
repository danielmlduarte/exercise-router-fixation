import React, { Component } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Users from './Pages/Users';
import StrictAccess from './Pages/StrictAccess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      user: {
        username: '',
        password: '',
      }
    }
    this.handleSummit =this.handleSummit.bind(this);
  }

  handleSummit(user) {
    console.log(user)
    this.setState({
      user,
    })
  }  

  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
        <span> <Link to="/">Home</Link> </span>
        <span> <Link to="/about">About</Link> </span>
        <span> <Link to="/users">Users</Link> </span>
        <span> <Link to="/login">Strict Access</Link> </span>
        <Switch>
          <Route
            exact path="/"
            render={(props) => 
              <Home
                {...props}
                onSummit={this.handleSummit}
              />
            }
          />
          <Route path="/about" component={About} />
          <Route
            path="/users/:id"
            render={(props) =>
              <Users
                {...props}
                greetingMessage={'Good morning'}
              />
            }
          />
          <Route
            path="/login"
            render={(props) =>
              <StrictAccess 
                {...props}
                user={user}
              />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;