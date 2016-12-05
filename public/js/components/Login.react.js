var UsernameActions = require('../actions/UsernameActions');
var React = require('react');

var ENTER_KEY_CODE = 13;

var Login = React.createClass({

  getInitialState: function() {
    return {username: ''};
  },

  render: function() {
    return (
      <div className="login-form">
        <div className="form-group">
          <label>
           <h1>YAKKING</h1>  
           <h4>The chat site for making friends!</h4>  
            <input
              className="form-control"
              placeholder="Give yourself a name"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this._onChange}
              onKeyDown={this._onKeyDown}
              />
          </label>
        </div>
      </div>
    );
  },

  _submit: function() {
    var username = this.state.username.trim();
    if (username) {
      UsernameActions.setUsername(username);
    }
  },

  _onChange: function(event, value) {
    this.setState({username: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      this._submit();
    }
  },

  _onClick: function(event) {
    event.preventDefault();
    this._submit();
  }

});

module.exports = Login;
