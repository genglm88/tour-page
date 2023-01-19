import React from "react"
import { Box, Container, Typography, Paper } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArchiveIcon from "@mui/icons-material/Archive"
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined"

import ImagePanel from "../components/ImagePanel"
import FAQ from "../components/FAQ"
import TransitionsModal from "../components/TransitionsModal"
import { Directions } from "@mui/icons-material"

const Tour = () => (
  <Container sx={{ width: { xs: 400, md: 900 } }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box
      marginTop={3}
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap:"10px" }}
    >
      
        <img
          src="https://images.pexels.com/photos/5447716/pexels-photo-5447716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="las vegas"
          height={350}
        
        />
     

      <ImagePanel />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Aut dolorum totam a voluptas quia ea commodi ipsam! Ut consequatur
        repellendus ea excepturi laudantium quo deserunt veniam. Id earum sequi
        a ratione autem et nihil autem 33 quasi similique ut omnis consequatur.
        Qui beatae consequatur aut laboriosam ipsum 33 quibusdam enim in omnis
        ducimus ut incidunt deleniti et consectetur esse.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
        Frequently Asked Questions
      </Typography>
      <FAQ />
    </Box>

    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        //value={}
        onChange={(event, newValue) => {
          //setValue(newValue);
        }}
      >
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Book the Touernow" icon={<StoreOutlinedIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
        <TransitionsModal />
      </BottomNavigation>
    </Paper>
  </Container>
)

export default Tour
