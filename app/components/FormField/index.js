import React from 'react'
import { Field } from 'redux-form'

import View from '../View'
import Text from '../Text'

const componentRenderer = ({ label, RenderedComponent, helpText, meta, input }) => (
    <View>
        {label && <View><Text>{label}</Text></View>}
        <RenderedComponent {...input} />
        {helpText && <View><Text>{helpText}</Text></View>}
        {meta.touched && meta.error && <View style={{ color: 'red' }}>{meta.error}</View>}
    </View>
)

const FormField = ({ name, component, ...props }) => (
    <Field
      {...props}
      name={name}
      RenderedComponent={component}
      component={componentRenderer}
    />
)

FormField.propTypes = {
    label: React.PropTypes.node,
    component: React.PropTypes.func.isRequired,
    helpText: React.PropTypes.node,
    name: React.PropTypes.string.isRequired,
}

export default FormField
