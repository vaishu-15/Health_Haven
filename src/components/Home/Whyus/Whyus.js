import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useData from '../../../Hooks/useData';
import './Whyus.css'

const Whyus = () => {
  const [ourServices, setOurServices] = useState([]);
  const mainData = useData();
  let services = mainData[0];

  // handle undefined problem in mapping data
  useEffect(() => {
    if (services.length > 0) {
      const serv = services.slice(0, 3);
      setOurServices(serv);
    }
  }, [services]);

  return (
    <Box
      sx={{
        bgcolor: "#f3f8fb",
        color: "primary.main",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Why Choose Our Medical
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </Typography>

        <Grid container spacing={3}>
          {ourServices.map((service) => (
            <Grid key={service.id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: "100%",
                  transition: "0.5s all ease-in-out",
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: 10,
                    color: "#146eb4",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={service?.service_img}
                    alt="card image of service"
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <Avatar
                      alt="service icon"
                      src={service?.icon}
                      sx={{
                        width: 40,
                        height: 40,
                        mx: "auto",
                        mb: 1,
                      }}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Consult for {service.treatment}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
                    <Link className="text-style" to="/services" color="primary">
                      See More Details...
                    </Link>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <HashLink
            smooth
            to="/services#services"
            className="text-style"
            color="primary"
          >
            See All services
          </HashLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Whyus;
