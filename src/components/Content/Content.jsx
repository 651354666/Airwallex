import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="content__center">
          <h1 className="content__title">
            <span className="content__title__text">A better way</span> 
            <span className="content__title__text">to enjoy every day.</span> 
          </h1>
          <h2 className="content__subtitle">Be the first to know when we launch.</h2>
          <div className="content__btn" onClick={() => this.props.openModal()}>Request an invite</div>
        </div>
      </div>
    );
  }
}

export default Content;
