import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('Welcome to my site...');
  }

  render() {
    return <button onClick={this.scream}>Click me!</button>;
  }
}

ReactDOM.render(
	<Button />,
	document.getElementById('app')
);
