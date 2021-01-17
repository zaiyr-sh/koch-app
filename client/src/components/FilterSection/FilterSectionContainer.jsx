import React, {Component} from 'react';
import {connect} from "react-redux";

import FilterSection from "./FilterSection";
import {editDisplayActionCreator} from "../../redux/reducers/filter-reducer";

class FilterSectionContainer extends Component {
    render() {
        return <FilterSection
            display={this.props.display}
            editDisplayHandler={this.props.editDisplayHandler}
        />
    }
}

const mapStateToProps = (state) => ({
    display: state.filterPage.display
})

const mapDispatchToProps = (dispatch) => {
    return {
        editDisplayHandler: (display) => {
            dispatch(editDisplayActionCreator(display));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSectionContainer);