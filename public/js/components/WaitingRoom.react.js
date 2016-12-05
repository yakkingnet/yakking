var React = require('react');

var WaitingRoom = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default"> 
        <div className="panel-body"> 
          <h3>Searching avalible people.</h3> 
          <p>When there is you will be connected automatically.</p>
        </div>
      </div>
    )
  }

});

module.exports = WaitingRoom;
