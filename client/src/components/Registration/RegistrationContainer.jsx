import React, {Component} from 'react';
import Registration from "./Registration";
import {registrationFirstStageThunkCreator} from "../../redux/reducers/registration-reducer";
import {connect} from "react-redux";

class RegistrationContainer extends Component {

    componentDidMount() {
        // this.props.registrationFirstStageThunk(formData.name, formData.surname, formData.phone_number)
    }

    render() {
        return < Registration />;
    }
}

const mapStateToProps = (state) => ({
    registration: state.registrationPage.user,
})

const mapDispatchToProps = (dispatch) => {
    return {
        registrationFirstStageThunk: (name, surname, phone_number) => {
            dispatch(registrationFirstStageThunkCreator(name, surname, phone_number));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);;