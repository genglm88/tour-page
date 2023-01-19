import React from "react"
import TourCard from "../components/TourCard"
import { Container,  Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import SearchAppBar from "../components/SearchAppBar"
import cities from "../data.json"

const Home = () => {
    return (
        <div>
     
          <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
              <Box mb={8} key={city.id}>
                <Typography
                  variant="h4"
                  component="h2"
                  marginTop={5}
                  marginBottom={3}
                >
                  Top {city.name} Tours
                </Typography>
    
                <Grid container spacing={5}>
                  {city.tours.map((tour) => (
                    <TourCard tour={tour} key={tour.id} />
                  ))}
                </Grid>
              </Box>
            ))}
          </Container>
        </div>
      )
}

export default Home