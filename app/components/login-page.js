import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class LoginPage extends Component {
    render() {
        return (
            <View>
                <Text>This is the login page</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps, mapDispatchToProps()
)(LoginPage);