import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: '',
      passwordValue: '',
    };
  }

  controlValue = event => {
    if (event.target.name === 'inputEmail') {
      this.setState({
        emailValue: event.target.value,
      });
    } else if (event.target.name === 'inputPassword') {
      this.setState({
        passwordValue: event.target.value,
      });
    }
  };

  allValueCheck = () => {
    const reg_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9,]+\.[a-zA-Z0-9]+$/;
    const reg_pwd =
      /^(?=.+[a-z])(?=.+[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*#?&]{6,25}$/;

    const isEmailValid = reg_email.test(this.state.emailValue);
    const isPasswordValid = reg_pwd.test(this.state.passwordValue);

    this.setState({
      isEmailValid,
      isPasswordValid,
    });
  };

  goToMain = e => {
    e.preventDefault();

    if (!this.state.isEmailValid && !this.state.isPasswordValid) {
      return;
    }

    fetch('http://10.58.3.11:8000/users/signin', {
      method: 'post',
      body: JSON.stringify({
        email: this.state.emailValue,
        password: this.state.passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  };

  render() {
    const isAllValueValid =
      this.state.isEmailValid && this.state.isPasswordValid;

    return (
      <>
        <form className="loginForm" onSubmit={this.goToMain}>
          <div className="loginLogo">
            <img className="logoImage" alt="logo" src="images/mango.png" />
          </div>
          <div className="loginTitle">로그인</div>
          <input
            type="text"
            name="inputEmail"
            className="inputEmail"
            placeholder="이메일"
            onChange={this.controlValue}
            onKeyUp={this.allValueCheck}
          />
          <input
            type="password"
            name="inputPassword"
            className="inputPassword"
            placeholder="비밀번호"
            onChange={this.controlValue}
            onKeyUp={this.allValueCheck}
          />
          <button
            type="submit"
            className="submitLoginInfoBtn"
            disabled={!isAllValueValid}
          >
            로그인
          </button>
          <div className="askingMissingPassword">
            비밀번호를 잊어버리셨나요?
          </div>
          <div className="askingMembership">
            계정이 없으신가요? <a className="goToSignUp">회원가입</a>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
