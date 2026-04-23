import { Container, Box } from '@mui/material'
import { UserForm } from './components/UserForm'

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <UserForm />
      </Box>
    </Container>
  )
}

export default App
