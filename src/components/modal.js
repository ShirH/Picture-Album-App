import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import {changeModalVisibility} from '../actions/index';

const customStyles = {

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(71, 68, 68, 0.74902)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ModalTester extends Component {

    closeModal() {
        this.props.changeModalVisibility(true);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isModalOpen}
                contentLabel="Example Modal"
                style={customStyles}
                onRequestClose={this.closeModal}
                >
                <button className="btn btn-primary" onClick={this.closeModal.bind(this)}>close</button>
                {this.props.children}
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {isModalOpen: state.isModalOpen};
}
export default connect(mapStateToProps, {changeModalVisibility})(ModalTester);