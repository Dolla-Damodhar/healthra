export type NavItem = {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Book Appointment', path: '/book-appointment' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Hospitals', path: '/hospitals' },
  { label: 'About Us', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

export const myBookingsNavItem: NavItem = { label: 'My Bookings', path: '/my-bookings' }
