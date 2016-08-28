import { combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import * as validators from '../../utilities/validators'

const fieldValidation = combineValidators({
    email: validators.email,
    password: hasLengthGreaterThan(6)('password'),
    lastName: isRequired('last name'),
    firstName: isRequired('first name'),
    address: validators.address
})

export const validate = (fields) => {
    if (fields.password !== fields.passwordConfirmation) {
        return {...fieldValidation(fields), passwordConfirmation: 'This does not match the password you entered'}
    }
    return fieldValidation(fields)
}
