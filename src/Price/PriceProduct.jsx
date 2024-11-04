import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin={'0 auto'}
      paddingX={2}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Experience your music{' '}
                </Typography>
                like never before.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Supper offer till the end of June. All the original headphones
                at maximum:
              </Typography>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700, color: colors.red[400] }}
              >
                $299.95
              </Typography>
              <Box
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                height={54}
                marginTop={2}
              >
                Discover the offer
              </Box>
            </Box>
            <Box
              paddingX={2}
              paddingY={1}
              bgcolor="ButtonFace"
              borderRadius={2}
            >
              <Typography variant="body1" component="p">
                $60 Apple Music gift card with purchase of select Beats
                products.*
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          display="flex"
          size={{ xs: 12, md: 6 }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            component={'img'}
            loading="lazy"
            height={1}
            width={1}
            src={'https://assets.maccarianagency.com/backgrounds/img34.png'}
            alt="..."
            maxWidth={600}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
