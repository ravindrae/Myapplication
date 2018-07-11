import ReactOnRails from 'react-on-rails';

import AppRouter from '../bundles/MainPage/components/AppRouter';
import LoginForm from '../bundles/MainPage/components/LoginForm';
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  AppRouter,LoginForm,
});
