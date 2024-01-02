import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
    isChecked: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('assess_jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({
      isError: true,
      errorMsg: errMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {isError, errorMsg, isChecked} = this.state
    return (
      <div className="login-route">
        <div className="login-container">
          <center>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="38"
              viewBox="0 0 77 38"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.4578 3.11915C54.5165 4.8545 60.5929 6.37225 60.9605 6.49204C61.3518 6.61946 59.6432 7.92545 56.844 9.63746C52.1947 12.4818 51.8073 12.625 43.225 14.6762L34.3915 16.7875L22.1581 13.9013C15.4297 12.3141 9.51403 10.9206 9.01182 10.8048C8.14831 10.6061 8.11296 10.8501 8.36528 15.2612C8.51251 17.8279 8.78323 20.281 8.96726 20.7131C9.23266 21.3362 9.04766 21.4982 8.06986 21.4982C6.91384 21.4982 6.85669 21.3941 7.14775 19.8158C7.31823 18.8907 7.46788 16.4173 7.48047 14.3199L7.50323 10.5065L3.74992 9.62355C1.68584 9.13767 -0.00193553 8.63295 1.66593e-06 8.50195C0.00339175 8.29019 32.9289 0.0912799 34.1396 0.000205734C34.406 -0.0195345 40.3992 1.38381 47.4578 3.11915ZM75.5471 2.86298C75.5471 2.97694 74.1853 3.91953 72.5202 4.95724C68.0003 7.77515 58.695 14.2006 55.8662 16.4568C54.4981 17.5488 48.8511 22.8706 43.3176 28.283C37.7845 33.6958 33.0872 38.0678 32.8795 37.9992C32.3526 37.8238 12.1733 21.2999 12.3152 21.1599C12.3787 21.0971 16.5344 23.155 21.5508 25.732L30.6706 30.4181L32.647 29.069C33.7343 28.327 39.9115 23.9307 46.3744 19.2998C58.218 10.8134 65.1967 6.57414 71.4306 4.07835C74.8967 2.6907 75.5471 2.49869 75.5471 2.86298ZM22.3043 5.8285C14.635 7.7267 13.8064 7.97077 14.1032 8.24578C14.3691 8.49253 29.8628 4.74772 30.3166 4.32779C30.9084 3.77911 29.5761 4.029 22.3043 5.8285ZM21.5537 8.15919C19.4262 8.67064 17.965 9.17581 18.3069 9.28124C19.0368 9.5069 25.2106 8.07081 25.8823 7.51943C26.5076 7.00619 26.0964 7.06674 21.5537 8.15919ZM26.7502 8.60514C23.7514 9.35885 21.3992 10.0699 21.5237 10.1848C21.8932 10.5276 32.4446 7.97121 32.4446 7.53917C32.4446 7.32023 32.3899 7.16231 32.3235 7.18788C32.2572 7.21345 29.749 7.85097 26.7502 8.60514ZM33.6553 9.11793C30.459 9.9219 27.2185 10.725 26.4548 10.9017C25.691 11.0785 25.1772 11.3266 25.3138 11.4527C25.5487 11.6703 41.1799 8.13137 41.606 7.76438C42.209 7.24441 38.7811 7.82809 33.6553 9.11793ZM33.4732 11.4244C29.502 12.4661 28.2075 12.9794 29.579 12.9686C30.4764 12.961 38.7976 10.8277 39.1298 10.5195C39.6553 10.0327 37.4072 10.3925 33.4732 11.4244ZM77 12.0767C77 12.8502 76.7423 13.4262 76.3946 13.4307C75.0541 13.4491 67.3242 16.7148 63.1176 19.0401C57.6475 22.0639 50.2387 27.1345 44.6324 31.6904C41.3203 34.3818 40.9459 34.6057 42.857 32.751C48.4947 27.2789 59.2839 19.2545 65.8955 15.6156C68.4555 14.2069 76.1985 10.7671 76.8789 10.7362C76.9453 10.733 77 11.3365 77 12.0767ZM27.1173 16.3294L34.6239 18.0226L42.101 16.2356C50.7699 14.1642 51.1651 13.4321 38.8857 22.186C34.5706 25.2623 30.8159 27.7792 30.5418 27.7792C30.2677 27.7792 27.4234 26.4279 24.2217 24.7764L18.3999 21.7732V17.9988C18.3999 15.1683 18.5515 14.2755 19.0053 14.4298C19.3385 14.5429 22.9887 15.398 27.1173 16.3294ZM20.095 28.9115C23.456 31.8371 22.4337 31.2018 15.8491 26.274C13.2596 24.3358 11.2657 22.5633 11.4183 22.3344C11.6943 21.9208 14.5575 24.0913 20.095 28.9115ZM68.7669 24.3776C68.7669 25.3516 67.964 25.9846 66.7285 25.9846C63.5525 25.9846 54.1377 29.5203 46.9735 33.4029C45.5201 34.1907 45.1976 34.2791 46.0049 33.6694C47.6825 32.4015 55.8057 28.1928 59.3551 26.7522C63.229 25.1797 68.7669 23.7827 68.7669 24.3776ZM15.9479 27.8249C18.6285 29.5773 20.8214 31.1144 20.8214 31.2413C20.8214 31.3678 20.2984 31.1538 19.6591 30.7662C19.0198 30.3781 16.7315 29.0223 14.574 27.7531C12.4164 26.4844 10.6512 25.2645 10.6512 25.0424C10.6512 24.3879 10.8531 24.4938 15.9479 27.8249Z"
                fill="#263868"
              />
            </svg>
            <h1 className="nxt">
              NXT <span className="assess">Assess</span>
            </h1>
          </center>
          <form onSubmit={this.submitForm}>
            <div className="input-container">
              <label className="label-element" htmlFor="username">
                USERNAME
              </label>
              <br />
              <input
                id="username"
                type="text"
                placeholder="USERNAME"
                className="input-element"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <label className="label-element" htmlFor="password">
                PASSWORD
              </label>
              <br />
              <input
                type={isChecked ? 'text' : 'password'}
                id="password"
                placeholder="PASSWORD"
                className="input-element"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="show-password">
              <input
                type="checkbox"
                className="checkbox-element"
                id="showPassword"
                onClick={this.onShowPassword}
              />
              <label htmlFor="showPassword" className="show-password-label">
                Show Password
              </label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {isError && <p className="err-msg">{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm