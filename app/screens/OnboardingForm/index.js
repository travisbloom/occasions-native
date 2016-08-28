import React from 'react'

import { View } from '../../components'

import Page1 from './Page1'

export default class OnboardingForm extends React.Component {
    static route = {
      navigationBar: {
        visible: false,
      }
    }

    state = { page: 1 }

    nextPage = () => this.setState({ page: this.state.page + 1 })

    previousPage = () => this.setState({ page: this.state.page - 1 })

    handleSubmit = () => console.log('yoyo')

    render() {
        const { page } = this.state
        return (
            <View style={{flex: 1}}>
                {page === 1 && <Page1 key={1} onSubmit={this.handleSubmit} />}
            </View>
        )
    }
}
