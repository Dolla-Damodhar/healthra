import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layouts'
import { Home } from '../views/home'
import { Login } from '../views/login'
import { BookAppointment } from '../views/book-appointment'
import { MyBookings } from '../views/my-bookings'
import { ProtectedRoute } from './protectedRoute'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
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
