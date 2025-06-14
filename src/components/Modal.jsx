import { Component } from "react";
import './Modal.scss'

export class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.keyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPress);
    }
    keyPress = (e) => {
        if (e.key === 'Escape') {
            this.props.closeModal();
        }
    };

    render() {

        return <div className={this.props.isOpen ? "modalOpen" : "modalClose"}>
            <div className="modal">
                <h1 className="text">Modal is open</h1>
                <button className="btn" onClick={this.props.closeModal}>+</button>
            </div>
        </div>
    }
}