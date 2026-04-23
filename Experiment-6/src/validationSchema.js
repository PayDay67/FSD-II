import * as yup from 'yup'

export const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .required('First name is required')
    .min(2, 'First name should be of minimum 2 characters length'),
  
  lastName: yup
    .string('Enter your last name')
    .required('Last name is required')
    .min(2, 'Last name should be of minimum 2 characters length'),
  
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  
  phone: yup
    .string('Enter your phone number')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  
  country: yup
    .string('Select your country')
    .required('Country is required'),
  
  gender: yup
    .string('Select your gender')
    .required('Gender is required'),
  
  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions'),
  
  newsletter: yup
    .boolean(),
})
