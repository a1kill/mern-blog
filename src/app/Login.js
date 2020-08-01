import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
var sha256 = require('js-sha256');

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      field_user: "",
      field_pass: "",
      error: false,
    };
    document.title = "Login";
  }
  componentWillMount = () => {
    console.log("componentWillMount()");
    var retrievedObject = sessionStorage.getItem('userInfo');
    if (retrievedObject != null) {
      window.alert(retrievedObject + '\nYou are logged in, redirecting...');
      var username = JSON.parse(retrievedObject)['username'];
      this.props.history.push('/blog/' + username);
    }
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      error: false,
    });
  };

  toggleVisit = e => {
    window.alert('Enter guest mode...');
    this.props.history.push('/blog');
  }
  toggleLogin = e => {

    // Math.random().toString(36).substr(2, 5);
    var re = RegExp('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$');
    if (this.state.field_user.match(re) === null) {

      window.alert('Please re-enter: The nickname must be a combination of English characters and numbers.');
      this.setState({
        error: true,
        field_user: "",
        field_pass: ""
      });
      return;
    }
    axios.post('/user/login', {
      username: this.state.field_user,
      password: sha256(this.state.field_pass),
      updateTime: Date()
    })
      .then((res) => {
        if (res.data != 'not found') { // no error

          sessionStorage.clear(); // clear old data
          var userInfo = {
            'username': this.state.field_user,
            'password': sha256(this.state.field_pass)
          };
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

          window.alert(userInfo['username'] + ': sign in suceesfully!');
          this.props.history.push('/blog/' + this.state.field_user);
        } else { // _message is ERROR message, error occurs!
          console.log(res.data);
          window.alert(res.data);
          this.setState({
            error: true,
            field_user: "",
            field_pass: ""
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  signUpPage = e => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div>
        <Dialog
          open
          onRequestClose={this.toggleLogin}
          style={{ backgroundImage: 'url("/assets/login.jpg")', backgroundSize: 'cover' }}
          fullScreen={this.props.fullScreen}>
          <DialogTitle>Sign in</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your account and password.
          </DialogContentText>
            <TextField
              autoFocus
              error={this.state.error}
              margin="dense"
              id="username"
              label="account number"
              type="username"
              value={this.state.field_user}
              onChange={this.handleChange('field_user')}
              fullWidth
            />
            <TextField
              autoFocus
              error={this.state.error}
              margin="dense"
              id="password"
              label="password"
              type="password"
              value={this.state.field_pass}
              onChange={this.handleChange('field_pass')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleVisit} color="secondary">
              Guest mode
          </Button>
            <Button onClick={this.signUpPage} color="secondary">
              registered
            </Button>
            <Button onClick={this.toggleLogin} color="primary">
              Confirmation
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Login;