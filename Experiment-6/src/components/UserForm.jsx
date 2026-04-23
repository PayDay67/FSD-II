import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Alert,
  CircularProgress,
} from '@mui/material'
import { validationSchema } from '../validationSchema'

export const UserForm = () => {
  const [submittedData, setSubmittedData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      gender: '',
      agreeToTerms: false,
      newsletter: false,
    },
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmittedData(data)
    setIsLoading(false)
  }

  const handleReset = () => {
    reset()
    setSubmittedData(null)
  }

  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {/* Form Section */}
      <Paper sx={{ flex: 1, minWidth: 300, p: 3 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 'bold' }}>
          User Registration Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* First Name Field */}
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  placeholder="Enter your first name"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Last Name Field */}
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  placeholder="Enter your last name"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Phone Field */}
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  placeholder="Enter 10-digit phone number"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  variant="outlined"
                />
              )}
            />

            {/* Country Select */}
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.country}>
                  <InputLabel>Country</InputLabel>
                  <Select
                    {...field}
                    label="Country"
                  >
                    <MenuItem value="">Select a country</MenuItem>
                    <MenuItem value="USA">United States</MenuItem>
                    <MenuItem value="UK">United Kingdom</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                  </Select>
                  {errors.country && (
                    <FormHelperText>{errors.country?.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />

            {/* Gender Radio Buttons */}
            <Box>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Gender *
              </Typography>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Box>
                    <RadioGroup
                      {...field}
                      row
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                    {errors.gender && (
                      <Typography variant="caption" sx={{ color: '#d32f2f' }}>
                        {errors.gender?.message}
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Box>

            {/* Checkboxes */}
            <Box>
              <Controller
                name="agreeToTerms"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} />}
                      label="I agree to the terms and conditions"
                    />
                    {errors.agreeToTerms && (
                      <Typography variant="caption" sx={{ color: '#d32f2f', display: 'block' }}>
                        {errors.agreeToTerms?.message}
                      </Typography>
                    )}
                  </Box>
                )}
              />

              <Controller
                name="newsletter"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Subscribe to our newsletter"
                  />
                )}
              />
            </Box>

            {/* Submit and Reset Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isLoading}
                sx={{ position: 'relative' }}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Submit'}
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={handleReset}
                fullWidth
              >
                Reset
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>

      {/* Submitted Data Display */}
      {submittedData && (
        <Paper sx={{ flex: 1, minWidth: 300, p: 3, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Submitted Data
          </Typography>
          <Alert severity="success" sx={{ mb: 2 }}>
            Form submitted successfully!
          </Alert>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                First Name:
              </Typography>
              <Typography variant="body1">{submittedData.firstName}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Last Name:
              </Typography>
              <Typography variant="body1">{submittedData.lastName}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Email:
              </Typography>
              <Typography variant="body1">{submittedData.email}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Phone:
              </Typography>
              <Typography variant="body1">{submittedData.phone}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Country:
              </Typography>
              <Typography variant="body1">{submittedData.country}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Gender:
              </Typography>
              <Typography variant="body1">
                {submittedData.gender.charAt(0).toUpperCase() + submittedData.gender.slice(1)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Agreed to Terms:
              </Typography>
              <Typography variant="body1">
                {submittedData.agreeToTerms ? 'Yes' : 'No'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Newsletter Subscription:
              </Typography>
              <Typography variant="body1">
                {submittedData.newsletter ? 'Yes' : 'No'}
              </Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  )
}
