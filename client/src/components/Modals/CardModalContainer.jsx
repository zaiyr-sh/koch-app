import React, {Component} from 'react';
import {connect} from "react-redux"

import CardModal from "./CardModal";
import {closeCardActionCreator} from "../../redux/reducers/modal-reducer";

class CardModalContainer extends Component {
    render() {
        return <CardModal card={this.props.card} closeCard={this.props.closeCard}/>;
    }
}

const mapStateToProps = (state) => ({
    card: state.modalPage.card
})

const mapDispatchToProps = (dispatch) => {
    return {
        closeCard() {
            dispatch(closeCardActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardModalContainer);