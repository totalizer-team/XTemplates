/* eslint-disable react/no-unescaped-entities */
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

const mock = [
  {
    title: 'Built for developers',
    subtitle:
      'theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Designed to be modern',
    subtitle:
      'Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Documentation for everything',
    subtitle:
      "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

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
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid size={{ xs: 12, md: 4 }} xs={12} md={4} key={i}>
            <Box width={1} height={1} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hero;
