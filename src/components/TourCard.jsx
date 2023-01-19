import { Box, Paper, Rating, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import React from "react"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
})


  const TourCard = ({tour}) => {

  const {name, duration, rating, numberOfReviews, price, image}= tour
  //console.log(tour)
  return (
    <Grid item xs={'auto'}>
      <ThemeProvider theme={theme}>
        <Link to="/tour/1">
        <Paper elevation={3} sx={{width:"240px"}}>
          <img
            src={image}
            className="img"
            alt={name}
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={0}>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C${price}
              </Typography>
            </Box>
          </Box>
        </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard
