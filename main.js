/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import Exponent from 'exponent'

import React from 'react'
import Relay from 'react-relay'
import { AppRegistry, Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation'
import { FontAwesome } from '@exponent/vector-icons'

import Router from './app/navigation/Router'
import cacheAssetsAsync from './app/utilities/cacheAssetsAsync'
import configureStore from './app/configureStore'


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8000/graphql', {
      credentials: 'same-origin',
  })
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
})

class AppContainer extends React.Component {
    state = {
        appIsReady: false,
    }

    componentWillMount() {
        this.loadAssetsAsync()
    }

    async loadAssetsAsync() {
        await cacheAssetsAsync({
            images: [
                require('./assets/images/exponent-wordmark.png'),
            ],
            fonts: [
                FontAwesome.font,
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
            ],
        })

        this.setState({ appIsReady: true })
    }

    render() {
        if (this.state.appIsReady) {
            const { notification } = this.props.exp
            const initialRoute = Router.getRoute('userEvents', { notification })

            return (
                <Provider store={configureStore()}>
                    <View style={styles.container}>
                        <NavigationProvider router={Router}>
                            <StackNavigation
                                id="root"
                                initialRoute={initialRoute}
                            />
                        </NavigationProvider>

                        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                    </View>
                </Provider>
            )
        }
        return <Exponent.Components.AppLoading />
    }
}

AppRegistry.registerComponent('main', () => AppContainer)
