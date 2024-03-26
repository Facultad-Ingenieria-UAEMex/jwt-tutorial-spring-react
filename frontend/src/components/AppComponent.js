import * as React from 'react';
import WelcomeComponent from './WelcomeComponent';
import AuthContent from './AuthContent';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <WelcomeComponent />
        <AuthContent />
      </div>
    )
  }
}