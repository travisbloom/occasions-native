import React from 'react';
import { InputGroup, Input as NBInput } from 'native-base';

const Input = (props) => (
    <InputGroup>
        <NBInput style={{height: 40}} {...props} />
    </InputGroup>
)

export default Input;
