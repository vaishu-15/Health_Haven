import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
      <Box
        id="about"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "70vh",
        }}
        points="0,100 50,00, 100,100"
      >
        <Container maxWidth="xl">
          <Typography
            sx={{ color: "primary.main", mx: 2, p: 2, textAlign: "center" }}
            variant="h4"
          >
            All-in-One Website Health Solution
          </Typography>

          <Typography sx={{ mx: 2, p: 2, textAlign: "center" }} variant="h6">
            10 Years Of Experience in Medical Services
          </Typography>

          <Typography
            sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
            variant="p"
          >
            With a decade of experience in medical services, we've crafted an
            all-in-one website health solution designed to revolutionize your
            healthcare experience. Our platform is built on the principle of
            providing comprehensive, accurate, and unbiased information to
            empower individuals in making informed decisions about their health.
            <br />
            <br />
            Unlike traditional web reviews that often suffer from motivated
            complainer bias, our methodology ensures fairness to hospitals and
            health systems. By surveying our patient users in a way that
            minimizes bias, we offer a more accurate view of real patient
            satisfaction. Our goal is to bridge the gap between healthcare
            providers and patients by fostering trust and transparency.
            <br />
            <br />
            We understand the importance of patient satisfaction in the
            healthcare journey. While typical web reviews may skew perceptions
            with negativity, our platform aims to provide a balanced
            perspective. We believe that around 8 to 9 out of 10 patients leave
            hospitals satisfied, and it's crucial to reflect this positivity in
            our reviews.
            <br />
            <br />
            Join our community and share your experiences with hospitals on
            Health Haven. Whether positive or negative, your feedback matters.
            Leave a review and help others navigate their healthcare journey
            with confidence. Your input drives our commitment to excellence in
            healthcare.
          </Typography>
        </Container>
      </Box>
    );
};

export default About;