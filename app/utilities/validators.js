import { createValidator, composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'

export const email = composeValidators(
    isRequired,
    createValidator(
        message => value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? message : false,
        field => `this ${field} is not a valid format`
    )
)('email')

export const addressLine1 = composeValidators(
    isRequired,
    hasLengthGreaterThan(3)
)('address line 1')

export const postalCode = composeValidators(
    isRequired,
    createValidator(
        message => value => !/^\d{5}(?:[-\s]\d{4})?$/i.test(value) ? message : false,
        field => `this ${field} is not a valid format`
    )
)('zip code')

const addressValidator = combineValidators({
    addressLine1,
    postalCode,
    state: isRequired('state'),
});

//FIXME nested combineValidators will fail if undefined is passed, wrapping to always pass default obj
export const address = (values = {}) => addressValidator(values);
