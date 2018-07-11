import React from 'react';
import { FormErrors } from  './FormErrors';
export default class LoginForm extends React.Component{

  constructor (props){
    super(props)
    this.state={
      email:"",
      password:"",
      remember_me:false,
      formErrors:""
    }
  }

  handleUserInput (e){
  const name=e.target.name;
    var obj={};
    if(name=="remember_me")
      obj[name]=true
    else
      obj[name]=e.target.value;
      this.setState(obj);
}

  handleFormSubmit (e){
    e.preventDefault();
    var user={email:this.state.email, password:this.state.password, remember_me:this.state.remember_me};
    console.log(user);
    $.post('/users/sign_in',{user: user}).done((data)=>{
      console.log("Successfull login..!");
      
    }).fail((response) => {
      console.log(response);
      this.setState({formErrors: response.responseText})
    });
  }

  render (){
    return (

    <div className="login-box">
        <div className="login-logo">
          <a href="#"><b>Greycampus</b>Login</a>
        </div>

        <div className="login-box-body">
          <FormErrors formErrors={this.state.formErrors}/>
          <p className="login-box-msg">Log in to start your session</p>

          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <div className="form-group has-feedback">
              <input name="email" className="form-control" value={this.state.email} placeholder="Email" onChange={this.handleUserInput.bind(this)}/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>


            <div className="form-group has-feedback">
              <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.handleUserInput.bind(this)}/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" name="remember_me" checked={this.state.remember_me} onChange={this.handleUserInput.bind(this)}/>  Remember Me
                  </label>
                </div>
              </div>

              <div className="col-xs-4">
                <input type="submit" value="login" className="btn btn-primary btn-block btn-flat"/>
              </div>

            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
              Google+</a>
          </div>
          <a href="#">I forgot my password</a><br/>
      </div>
    </div>

    )
  }
}
