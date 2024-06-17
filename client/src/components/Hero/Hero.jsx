import { Box, Container, Grid, Typography } from "@mui/material";

function Hero() {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container >
        <Grid item xs={12} md={6} sx={{ height: '350px', justifyContent: 'space-between' }}>
          <Box
            sx={{
              background: 'url(https://picsum.photos/id/4/200) center/cover',
              height: '100%',
              maxWidth: '80%'
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography
              component="h1"
              variant="h3"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero;
