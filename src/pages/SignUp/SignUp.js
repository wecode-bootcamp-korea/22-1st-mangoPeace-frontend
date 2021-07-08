import React from 'react';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
      phoneNumValue: '',
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
    } else if (event.target.name === 'inputPhoneNum') {
      this.setState({
        phoneNumValue: event.target.value,
      });
    } else {
      this.setState({ passwordValue: event.target.value });
    }
    //this.isAllValueValid(event);
  };

  // controlIdValue = event => {
  //   this.setState({
  //     emailValue: event.target.value,
  //   });
  // };

  // controlPhoneNumValue =evnet>{
  //   this.
  // }

  isAllValueValid = event => {
    console.log('ddddd');

    const reg_pwd =
      /^(?=.+[a-z])(?=.+[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*#?&]{6,25}$/;
    const reg_phoneNum = /^01[0|2|5|7|8|9|0][0-9]{3,4}[0-9]{4}$/;
    const reg_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9,]+\.[a-zA-Z0-9]+$/;
    const reg_name = /^[a-zA-Z가-힇]{2,}$/;
    console.log(reg_name.test(event.target.name));
    console.log(reg_email.test(event.target.emailValue));
    console.log(reg_phoneNum.test(event.target.phoneNumValue));
    console.log(reg_pwd.test(event.target.passwordValue));

    const checkValueValid =
      reg_email.test(event.target.value) &&
      reg_email.test(event.target.emailValue) &&
      reg_phoneNum.test(event.target.phoneNumValue) &&
      reg_pwd.test(event.target.passwordValue);

    // if (
    //   event.target.name === 'inputEmail' &&
    //   event.target.name === 'inputName' &&
    //   event.target.name === 'inputPhoneNum' &&
    //   event.target.name === 'inputPassword'
    // ) {
    //   if (
    //     reg_email.test(event.target.value) === true &&
    //     reg_name.test(event.target.value) === true &&
    //     reg_phoneNum.test(event.target.value) === true &&
    //     reg_pwd.test(event.target.value) === true
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
    if (event.target.name === 'inputEmail') {
      reg_email.test(event.target.value);
    } else if (event.target.name === 'inputName') {
      reg_name.test(event.target.value);
    } else if (event.target.name === 'inputPhoneNum') {
      reg_phoneNum.test(event.target.value);
    } else if (event.target.name === 'inputPasswnpord') {
      reg_pwd.test(event.target.value);
    }
  };

  goToMain = e => {
    console.log(e.target.value);
    fetch({
      method: 'post',
      body: JSON.stringify({
        name: this.state.nameValue,
        email: this.state.emailValue,
        password: this.state.passwordValue,
        phoneNum: this.state.phoneNumValue,
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
    return (
      <>
        <form
          className="signUpForm"
          onChange={this.controlValue}
          onSubmit={this.goToMain}
        >
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
              onKeyPress={this.isAllValueValid}
            ></input>
            <input
              type="text"
              name="inputEmail"
              className="inputEmail"
              placeholder="이메일"
              onKeyPress={this.isAllValueValid}
            ></input>
            <input
              type="text"
              name="inputPhoneNum"
              className="inputPhoneNum"
              placeholder="전화번호"
              onKeyPress={this.isAllValueValid}
            ></input>
            <input
              type="password"
              name="inputPassword"
              className="inputPassword"
              placeholder="비밀번호"
              onKeyPress={this.isAllValueValid}
            ></input>
            <button
              type="submit"
              className="submitInfoBtn"
              //disabled={this.isAllValueValid ? false : true}
              //style={{ backgroundColor: this.check() ? 'white' : 'red' }}
              // onClick={this.goToMain}
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
