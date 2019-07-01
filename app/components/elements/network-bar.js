import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NetInfo, Text, View} from 'react-native'

import {saveNetworkStatus} from "../../actions/actions";

class NetworkBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isConnected: null,
        }
    }

    componentDidMount() {
        NetInfo.isConnected.fetch()
            .then(isConnected => {
                this.props.onNetworkInfoReceived(isConnected);
            })
            .catch(err => {
                console.warn('Failed to get network info: ' + err);
            });

        this._addNetworkInfoListener();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                isConnected: this.props.networkStatus,
            });
        }
    }

    _addNetworkInfoListener = () => {
        NetInfo.isConnected.addEventListener('connectionChange', state => {
            console.log("Network status update: ", state);
            this.props.onNetworkInfoReceived(state);
        });
    };

    render() {
        const {isConnected} = this.state;

        return (
            <View>
                {isConnected ?
                    <Text>This device is connected to the Internet!</Text>
                    :
                    <Text>You are not connected to Internet</Text>
                }
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        networkStatus: state.networkStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNetworkInfoReceived: (connected) => dispatch(saveNetworkStatus(connected)),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(NetworkBar);