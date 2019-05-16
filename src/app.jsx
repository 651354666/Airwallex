import React from "react";
import Home from "pages/Home/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

export default App;
