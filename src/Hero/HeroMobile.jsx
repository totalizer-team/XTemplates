/* eslint-disable react/no-unescaped-entities */
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

const PhoneSkeleton = () => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      enableBackground="new 0 0 444 908"
      viewBox="0 0 444 908"
    >
      <path
        fill={theme.palette.background.paper}
        stroke={theme.palette.primary}
        strokeMiterlimit="10"
        d="M378.8.5H65.6C29.6.5.5 29.6.5 65.6V843c0 35.9 29.1 65.1 65.1 65.1h313.2c35.9 0 65.1-29.1 65.1-65.1V65.6c0-36-29.2-65.1-65.1-65.1zm46.5 838.8c0 28-21.8 50.7-48.8 50.7H67.9c-26.9 0-48.8-22.7-48.8-50.7V74.1c0-28 21.8-50.7 48.8-50.7h35.3c4 0 7.2 3.4 7.2 7.5 0 14.9 11.6 27 26 27h171.5c14.4.1 26-12 26-27 0-4.1 3.2-7.5 7.2-7.5h35.4c26.9 0 48.8 22.7 48.8 50.7v765.2z"
      ></path>
      <path
        fill="none"
        stroke={theme.palette.primary}
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M243.3 37.3h-46.4c-2 0-3.6-1.6-3.6-3.6h0c0-2 1.6-3.6 3.6-3.6h46.4c2 0 3.6 1.6 3.6 3.6h0c0 2-1.6 3.6-3.6 3.6z"
      ></path>
      <circle
        cx="270"
        cy="33.7"
        r="5.5"
        fill="none"
        stroke={theme.palette.primary}
        strokeMiterlimit="10"
        strokeWidth="4"
      ></circle>
      <path
        fill={theme.palette.primary}
        d="M285.7 880.3h-127c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6h127c1.4 0 2.6 1.2 2.6 2.6 0 1.5-1.2 2.6-2.6 2.6z"
      ></path>
    </svg>
  );
};

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
      <Grid container spacing={0}>
        <Grid display={'flex'} alignItems={'center'} size={{ xs: 12, md: 6 }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                }}
              >
                Don't listen to what they say{' '}
                <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.3,
                    )} 0%)`,
                  }}
                >
                  go and see
                </Typography>
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Travelling with our app is easy.
                <br />
                Join the biggest community of travellers.
              </Typography>
            </Box>
            <Box display="flex" marginTop={1}>
              <Box
                component={Avatar}
                bgcolor={'primary.main'}
                width={{ xs: 40, sm: 50 }}
                height={{ xs: 40, sm: 50 }}
              >
                <Box
                  component={'img'}
                  src={
                    'https://assets.maccarianagency.com/svg/icons/app-store-icon.svg'
                  }
                  alt={'app store'}
                  width={{ xs: 15, md: 20 }}
                />
              </Box>
              <Box
                component={Avatar}
                bgcolor={'primary.main'}
                marginLeft={1}
                width={{ xs: 40, sm: 50 }}
                height={{ xs: 40, sm: 50 }}
              >
                <Box
                  component={'img'}
                  src={
                    'https://assets.maccarianagency.com/svg/icons/play-store-icon.svg'
                  }
                  alt={'play store'}
                  sx={{ filter: 'brightness(0) invert(1)' }}
                  width={{ xs: 15, md: 20 }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              maxWidth: 450,
              position: 'relative',
              marginX: 'auto',
              perspective: 1500,
              transformStyle: 'preserve-3d',
              perspectiveOrigin: 0,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '2.75rem',
                boxShadow: 1,
                width: '75% !important',
                marginX: 'auto',
                transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
              }}
            >
              <Box>
                <Box
                  position={'relative'}
                  zIndex={2}
                  maxWidth={1}
                  height={'auto'}
                  sx={{ verticalAlign: 'middle' }}
                >
                  <PhoneSkeleton />
                </Box>
                <Box
                  position={'absolute'}
                  top={'2.4%'}
                  left={'4%'}
                  width={'92.4%'}
                  height={'96%'}
                >
                  <Box
                    component={'img'}
                    src={
                      theme.palette.mode === 'light'
                        ? 'https://assets.maccarianagency.com/screenshots/crypto-mobile.png'
                        : 'https://assets.maccarianagency.com/screenshots/crypto-mobile--dark.png'
                    }
                    loading={'lazy'}
                    width={1}
                    height={1}
                    sx={{
                      objectFit: 'cover',
                      borderRadius: '2.5rem',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
