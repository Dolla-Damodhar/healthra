import { Box } from '@mui/material'
import { Hero } from './Hero'
import { Services } from './Services'
import { HowItWorks } from './HowItWorks'
import { FeatureBanner } from './FeatureBanner'

export const Home = () => (
  <Box>
    <Hero />
    <Services />
    <HowItWorks />
    <FeatureBanner />
  </Box>
)
