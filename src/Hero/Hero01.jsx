'use client';
import DashedBorder from '@/components/DashedBorder';
import Typed from '@/components/Typed';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
      }}
    >
      <Container
        maxWidth="md"
        sx={{ position: 'relative', py: '120px', zIndex: 3 }}
      >
        <Stack spacing={4}>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <DashedBorder
              sx={{
                p: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 48,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textAlign: 'center',
                }}
              >
                Totalizer
              </Typography>
            </DashedBorder>
            <Box sx={{ height: 50 }}>
              <Typed
                sx={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textAlign: 'center',
                }}
                animate={{
                  strings: [
                    'Develop the future, we’ll make it seamless.',
                    'Our mission is to empower everyone to effortlessly bring their websites and applications to life.',
                  ],
                  typeSpeed: 50,
                }}
              ></Typed>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button variant="outlined" onClick={() => {}}>
              Browse All Projects
            </Button>
            <Button onClick={() => {}}>custom built</Button>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: 'center', justifyContent: 'center ' }}
          >
            <AvatarGroup>
              <Avatar alt="User 5" src="/assets/avatar-5.png" />
              <Avatar alt="User 1" src="/assets/avatar-1.png" />
              <Avatar alt="User 2" src="/assets/avatar-2.png" />
            </AvatarGroup>
            <Typography sx={{ whiteSpace: 'nowrap' }} variant="caption">
              Developed by{' '}
              <Typography
                color="inherit"
                component="span"
                sx={{ fontWeight: 700 }}
                variant="inherit"
              >
                20+
              </Typography>{' '}
              experts
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
