import React, {Component} from 'react';
import {connect} from "react-redux"

import CardModal from "./CardModal";
import {closeOpenCardActionCreator} from "../../redux/reducers/cargo-reducer";

class CardModalContainer extends Component {
    render() {
        return <CardModal card={this.props.card} closeOpenCard={this.props.closeOpenCard}/>;
    }
}

const mapStateToProps = (state) => ({
    card: state.cargoPage.card
})

const mapDispatchToProps = (dispatch) => {
    return {
        closeOpenCard() {
            dispatch(closeOpenCardActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardModalContainer);