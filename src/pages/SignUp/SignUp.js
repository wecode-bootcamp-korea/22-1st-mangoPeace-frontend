import React from 'react';
import './SignUp.scss';

class SignUp extends React.Component {
  render() {
    return (
      <>
        <form className="signUpForm">
          <div className="signUpLogo">로고 이미지</div>
          <div className="signUpTitle">회원가입</div>
          <div className="signUpContainer">
            <input className="inputName" placeholder="이름"></input>
            <input className="inputEmail" placeholder="이메일"></input>
            <input className="inputPassword" placeholder="비밀번호"></input>
            <button className="submitInfoBtn">회원가입</button>
          </div>
          <div className="checkMembership">이미 가입 하셨나요 ? </div>
        </form>
      </>
    );
  }
}

export default SignUp;
