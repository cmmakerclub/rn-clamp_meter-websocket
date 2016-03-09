/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

var ws;
class clamp_meter extends Component {
    constructor() {
        super();

        this.state = {
            msg: [0, 0, 0]
        }
        ws = new WebSocket('ws://192.168.4.1:81/');
    }

    componentDidMount() {
        ws.onopen = function () {
            console.log("on open");
        };

        ws.onmessage = function (arg0) {
            var msg = arg0.data.split(",")
            console.log("on message: ", msg);
            this.setState({
                msg: msg
            });
        }.bind(this);

    }

    render() {
        console.log("HELLO WORLD");


        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.msg[0]}
                </Text>
                <Text style={styles.instructions}>
                    {this.state.msg[1]}
                </Text>
                <Text style={styles.instructions}>
                    {this.state.msg[2]}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        padding: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        fontSize: 70,
        textAlign: 'center',
        color: '#333333',
    },
});

AppRegistry.registerComponent('clamp_meter', () => clamp_meter);
