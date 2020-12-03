import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  constructor() {
    super()
  
    this.state = {
      user: {
        username: '',
        password: '',
      },
      loading: true,
    }
  }  

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      user,
      loading: false,
    });
  }

  render() {
    const { user: { username, password }, loading } = this.state;

    if (username === 'joao' && password === '1234') {
      return (
        <di>
          <p>Welcome João!</p>
        </di>
      )
    }

    if (loading) {
      return <p>Carregando...</p>
    }

    return (
      <div>
        {alert('Access denied')}
        <Redirect to="/" />
      </div>
    )
  }
}

export default StrictAccess
