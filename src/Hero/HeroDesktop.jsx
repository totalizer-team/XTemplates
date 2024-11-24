'use client';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

import HomeRectanglesDark from './home-rectangles-dark.svg';
import HomeRectanglesLight from './home-rectangles-light.svg';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={
            theme.palette.mode === 'dark'
              ? HomeRectanglesDark
              : HomeRectanglesLight
          }
          sx={{ height: 'auto', width: '1900px' }}
        />
      </Box>
      <Container
        maxWidth="md"
        sx={{ position: 'relative', py: '120px', zIndex: 3 }}
      >
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography
              sx={{
                fontSize: 56,
                fontWeight: 600,
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              Develop the future, we’ll make it {''}
              <Typography
                color="primary.main"
                component="span"
                variant="inherit"
              >
                SEAMLESS
              </Typography>{' '}
              !
            </Typography>
            <Typography sx={{ fontWeight: 400, textAlign: 'center' }}>
              The{' '}
              <Typography
                color="primary.main"
                component="span"
                variant="inherit"
              >
                XComponents
              </Typography>{' '}
              is built on top of MUI, an efficient, elegant, and continuously
              updated front-end component library.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button variant="contained" onClick={() => {}}>
              Guide
            </Button>
            <Button onClick={() => {}}>Components</Button>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', justifyContent: 'center ' }}
          >
            <AvatarGroup>
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Avatar>C</Avatar>
            </AvatarGroup>
            <Typography
              color="neutral.300"
              sx={{ whiteSpace: 'nowrap' }}
              variant="caption"
            >
              <Typography
                color="inherit"
                component="span"
                sx={{ fontWeight: 700 }}
                variant="inherit"
              >
                4.7/5
              </Typography>{' '}
              based on (100+ reviews)
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
