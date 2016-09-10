import React from 'react'
import { reduxForm } from 'redux-form'
import { StyleSheet } from 'react-native'

import { Header, View, FormField, Input, Button } from '../../components/'
import { SPACING } from '../../constants/styles'

const styles = StyleSheet.create({
    base: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: SPACING,
    },
})

@reduxForm({
    form: 'newUser',
    destroyOnUnmount: false,
    // validate,
})
export default class Page1 extends React.Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <View style={styles.base}>
                <Header>
                    Great! Before we can start sending you postcards, we'll
                    {' need'} a few details. First off, what's your name and email?
                </Header>
                <FormField label="First Name" name="firstName" component={Input} />
                <FormField label="Last Name" name="lastName" component={Input} />
                <FormField
                    label="Email"
                    keyboardType="email-address"
                    name="email"
                    component={Input}
                    helpText={`
                        We hate spam email as much as you do. Occasions sends delightfully
                        infrequent emails only when you have an upcoming occasion.`
                    }
                />
                <Button block onPress={handleSubmit}>Submit</Button>
            </View>
        )
    }
}
