import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Content from 'components/Content/Content';
import Modal from 'components/Modal/Modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    console.log('openModal');
    this.setState({
      showModal: true
    })  
  }

  closeModal = () => {
    console.log('closeModal');
    this.setState({
      showModal: false
    })  
  }

  render() {
    return (
      <div className="home">
        <Header />
        <Footer />
        <Content
          openModal={ this.openModal }
        />
        { this.state.showModal && <Modal closeModal={this.closeModal} /> }
      </div>
    )
  }
}

export default Home;
