import React, {Component} from 'react';
import {connect} from "react-redux";

import {getCargoesThunkCreator, getNextCargoesThunkCreator} from "../../redux/reducers/cargo-reducer";
import TransportSection from "./TransportSection";

class TransportSectionContainer extends Component {

    componentDidMount() {
        this.props.getCargoes();
    }

    render() {
        return (
            <div>
                <TransportSection
                    cargoes={this.props.cargoes}
                    getNextCargoes={this.props.getNextCargoes}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cargoes: state.cargoPage.cargoes
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCargoes: () => {
            dispatch(getCargoesThunkCreator())
        },
        getNextCargoes(offset) {
            dispatch(getNextCargoesThunkCreator(offset))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransportSectionContainer);