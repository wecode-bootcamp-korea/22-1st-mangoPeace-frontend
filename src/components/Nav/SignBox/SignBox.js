import React from 'react';

import './SignBox.scss';

class SignBox extends React.Component {
  render() {
    const { goToLogin, goToSignUp } = this.props;

    return (
      <>
        <button className="mainLoginBtn" onClick={goToLogin}>
          로그인
        </button>
        <button className="mainSignUpBtn" onClick={goToSignUp}>
          회원가입
        </button>
      </>
    );
  }
}

export default SignBox;
