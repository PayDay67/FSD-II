# MUI Form with Validation

A comprehensive React form application built with Material-UI (MUI) components and form validation using React Hook Form and Yup.

## Features

✅ **MUI Components**
- Text Fields (First Name, Last Name, Email, Phone)
- Select Dropdown (Country selection)
- Radio Buttons (Gender selection)
- Checkboxes (Terms agreement and Newsletter subscription)
- Submit and Reset buttons with loading state

✅ **Validation**
- **Built-in Validations**: Required fields, min length, email format
- **Custom Validations**: Phone number must be exactly 10 digits
- **Form-level Validation**: All fields validated before submission
- **Field-level Error Messages**: Real-time error feedback
- **Terms Acceptance**: Mandatory checkbox validation

✅ **Form Features**
- Real-time validation with error messages
- Loading state during form submission
- Form reset functionality
- Submitted data display in a separate panel
- Responsive design
- Professional UI with Material-UI styling

## Project Structure

```
exp6/
├── src/
│   ├── components/
│   │   └── UserForm.jsx        # Main form component
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── validationSchema.js     # Yup validation schema
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Form Fields & Validation

| Field | Type | Validation Rules |
|-------|------|------------------|
| First Name | Text | Required, min 2 characters |
| Last Name | Text | Required, min 2 characters |
| Email | Email | Required, valid email format |
| Phone | Text | Required, exactly 10 digits |
| Country | Select | Required selection |
| Gender | Radio Buttons | Required selection |
| Terms & Conditions | Checkbox | Required (must be checked) |
| Newsletter | Checkbox | Optional |

## Technologies Used

- **React 18**: UI library
- **Material-UI (MUI) 5**: Component library
- **React Hook Form 7**: Form state management
- **Yup 1**: Schema validation
- **Vite 5**: Build tool and dev server
- **Emotion**: CSS-in-JS for MUI styling

## Key Features Implemented

### 1. Form Validation
- Using Yup schema validator for comprehensive validation
- React Hook Form integration with Yup resolver
- Real-time error messages on each field

### 2. Form Components
- Controlled components using React Hook Form's Controller
- Custom error handling and display
- Proper accessibility with labels and helper text

### 3. User Feedback
- Success alert on form submission
- Submitted data display panel
- Loading state during submission
- Error messages below each field

### 4. Responsive Design
- Mobile-friendly layout
- Flex layout for side-by-side form and results display
- Proper spacing and typography using MUI theming

## How to Use

1. Fill in all the required fields (marked with *)
2. Correct validation messages will appear if fields are invalid
3. Check the "I agree to the terms and conditions" checkbox
4. Click **Submit** to submit the form
5. View the submitted data in the right panel
6. Click **Reset** to clear the form and start over

## Customization

### Add More Fields
Edit `src/validationSchema.js` to add validation rules and update `src/components/UserForm.jsx` to add new form fields.

### Change Styling
Modify the `sx` props in the MUI components or create a custom theme to adjust colors, spacing, and typography.

### Modify Validation Rules
Update the validation schema in `src/validationSchema.js` to change validation logic.

## Notes

- All validations run both on blur and on change
- The form prevents submission if any validation fails
- Phone number must be exactly 10 digits (numeric)
- Email must follow standard email format
- All required fields are clearly marked with *

---

**Created**: April 22, 2026
**Version**: 1.0.0
