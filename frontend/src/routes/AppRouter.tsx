import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layouts'
import { Home } from '../views/home'
import { Login } from '../views/login'
import { BookAppointment } from '../views/book-appointment'
import { MyBookings } from '../views/my-bookings'
import { Services } from '../views/services'
import { Doctors } from '../views/doctors'
import { Hospitals } from '../views/hospitals'
import { About } from '../views/about'
import { Pricing } from '../views/pricing'
import { Contact } from '../views/contact'
import { ProtectedRoute } from './protectedRoute'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/book-appointment"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
