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
    console.log(this.state.passwordValue);
  };

  goToMain = e => {
    //주소받기
    fetch({
      method: 'post',
      body: JSON.stringfy({
        email: this.state.emailValue,
        password: this.state.passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        //임시
        if (result.MESSAGE !== 'SUCCESS') {
          this.props.history.push('/');
          //스토리지에 저장해 확인 ?
          alert('로그인 정보를 다시 확인해 주세요 '); // 원래는 이메일 비번 각각 확인
          //localStorage.setItem('token',result[]);
        }
      });
  };

  render() {
    const isAllInputValueValid =
      this.state.emailValue.includes('@') &&
      this.state.passwordValue.length >= 6;
    console.log(isAllInputValueValid);

    return (
      <>
        <form className="loginForm" onChange={this.controlValue}>
          <div className="loginLogo">
            <img className="logoImage" alt="logo" src="images/mango.png" />
          </div>
          <div className="loginTitle">로그인</div>
          <input
            type="text"
            name="inputEmail"
            className="inputEmail"
            placeholder="이메일"
          />
          <input
            type="password"
            name="inputPassword"
            className="inputPassword"
            placeholder="비밀번호"
          />
          <button
            type="button"
            className="submitLoginInfoBtn"
            disabled={isAllInputValueValid ? true : false}
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
