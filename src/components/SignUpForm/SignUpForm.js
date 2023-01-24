import "./SignUpForm.css"
import { signUp } from '../../utilities/users-service'
import { Component } from "react"

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  };

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = {...this.state}
      delete formData.confirm
      delete formData.error
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch {
      this.setState({
        error: 'Sign Up Failed - Please Try Again'
      })
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm
    return (
      <main>
        <div className='SignUpForm'>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="off" required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} autoComplete="off" required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="off" required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} autoComplete="off" required />
            <button type="submit" disabled={disable}>Sign Up</button>
          </form>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </main>
    )
  };
};