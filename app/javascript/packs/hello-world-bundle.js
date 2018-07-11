import ReactOnRails from 'react-on-rails';

import LoginForm from '../bundles/Login/components/LoginForm';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  LoginForm,
});
