import React from 'react'
import { Button as NBButton } from 'native-base'

import Spinner from '../Spinner'

const Button = ({ loading, children, ...props }) => (
    <NBButton {...props}>
        {loading ? <Spinner /> : children}
    </NBButton>
)

export default Button
