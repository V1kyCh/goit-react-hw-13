import { Component } from 'react';
import './App.css';
import { Modal } from './components/Modal';

class App extends Component {
  state = {
    isModalOpen: false
  }
    openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <div className="App">
        <button className='open-modal-btn' onClick={this.openModal}>open modal</button>
        <Modal isOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
      </div>
    );
  }
}

export default App;
