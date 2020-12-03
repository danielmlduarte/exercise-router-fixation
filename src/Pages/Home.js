import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super()
  
    this.state = {
      username: '',
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }
  
  handleSummit(user) {
    const { onSummit } = this.props;
    console.log(user)
    onSummit(user);
  }

  render() {
    const { username, password} = this.state;
    const user = {
      username,
      password,
    };
    return (
      <div>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => this.handleOnChange(e)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => this.handleOnChange(e)}
        />
        <button type="submit" onClick={() => this.handleSummit(user)}>Login</button>
      </div>
    )
  }
}

export default Home;
