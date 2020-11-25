import React, {Component} from 'react';
import TransportationSection from "./TransportationSection";
import {getTransportationsThunkCreator} from "../../redux/reducers/transportation-reducer";
import {connect} from "react-redux";
import {setOpenCardModalActionCreator} from "../../redux/reducers/modal-reducer";


class TransportSectionContainer extends Component {

    componentDidMount() {
        this.props.getTransportations();
    }

    render() {
        return this.props.display === "transportation" ? (
            <TransportationSection
                transportations={this.props.transportations}
                onOpenCardModal={this.props.setOpenCardModal}
            />
        ) : <></>;
    }
}

const mapStateToProps = (state) => ({
    transportations: state.transportationPage.transportations,
    display: state.filterPage.display
})

const mapDispatchToProps = (dispatch) => {
    return {
        getTransportations: () => {
            dispatch(getTransportationsThunkCreator())
        },
        setOpenCardModal(card) {
            dispatch(setOpenCardModalActionCreator(card))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransportSectionContainer);