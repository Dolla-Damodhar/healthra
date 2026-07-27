import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Pricing = () => (
  <Box sx={{ py: { xs: 8, md: 12 } }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
        Pricing
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Pricing page will come soon.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Button component={Link} to="/book-appointment" variant="contained">Book an Appointment</Button>
        <Button component={Link} to="/my-bookings" variant="outlined">View My Bookings</Button>
      </Stack>
    </Container>
  </Box>
)
