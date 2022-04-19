import {FieldValidator} from 'final-form'

const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const validators = {
  required: (value?: string) => (typeof value !== 'string')
    ? 'Required'
    : (value.trim() ? undefined : 'Required'),
  validEmail: (value: string) => value.match(emailPattern)
    ? undefined
    : 'Incorrect input data',
  passwordLength: (value: string) => (value.length < 6)
    ? 'Password is too short'
    : undefined
}

export const composeValidators = (...validators: FieldValidator<any>[]) => (value: any) =>
  validators.reduce((error, validator) =>
    error || validator(value, {}), undefined)
