import React from 'react';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
    };
  }

  controlValue = event => {
    if (event.target.name === 'inputName') {
      this.setState({
        nameValue: event.target.value,
      });
    } else if (event.target.name === 'inputEmail') {
      this.setState({
        emailValue: event.target.value,
      });
    } else {
      this.setState({
        passwordValue: event.target.value,
      });
    }
    console.log(this.state.passwordValue);
  };

  goToMain = e => {
    fetch({
      method: 'post',
      body: JSON.stringify({
        name: this.state.nameValue,
        email: this.state.emailValue,
        password: this.state.passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE !== 'SUCCESS') {
          //this.props.history.push('/');
          alert('다시 기입해주세요');
        }
      });
  };

  render() {
    const isAllValueValid =
      this.state.nameValue.length >= 2 &&
      this.state.passwordValue.length >= 6 &&
      this.state.emailValue.includes('@');

    //console.log(this.button.disabled);
    return (
      <>
        <form className="signUpForm" onChange={this.controlValue}>
          <div className="signUpLogo">
            <img className="logoImage" alt="logo" src="images/mango.png" />
          </div>
          <div className="signUpTitle">회원가입</div>
          <div className="signUpContainer">
            <input
              type="text"
              name="inputName"
              className="inputName"
              placeholder="이름"
            ></input>
            <input
              type="text"
              name="inputEmail"
              className="inputEmail"
              placeholder="이메일"
            ></input>
            <input
              type="password"
              name="inputPassword"
              className="inputPassword"
              placeholder="비밀번호"
            ></input>
            <button
              className="submitInfoBtn"
              disabled={isAllValueValid ? false : true}
              style={{ backgroundColor: isAllValueValid ? 'white' : 'red' }}
              onClick={this.goToMain}
            >
              회원가입
            </button>
          </div>
          <div className="checkMembership">
            이미 가입 하셨나요? <a className="goToLogin">로그인</a>{' '}
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;
