import React from 'react'
import { StyleSheet } from 'react-native'

import { SPACING } from '../../constants/styles'

import View from '../View'
import Text from '../Text'

export default ({ children }) => (
    <View style={{ marginBottom: SPACING }}>
        <Text>{children}</Text>
    </View>
)

StyleSheet.create({

})
