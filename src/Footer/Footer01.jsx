import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';

import DashedBorder from '@/components/DashedBorder';
import { BaseMenuList } from '@totalizer/xmenu';

const column01 = [
  {
    c: 'Title',
    title: 'X Projects',
  },
  {
    title: 'XForm',
  },
  {
    title: 'XMenu',
  },
  {
    title: 'XTable',
  },
  {
    title: 'XLayout',
  },
  {
    title: 'XCard',
  },
  {
    title: 'XBackground',
  },
  {
    title: 'XComponent',
  },
  {
    title: 'XTemplate',
  },
];

const column02 = [
  {
    c: 'Title',
    title: 'Platform',
  },
  {
    title: 'Data Delivery',
  },
  {
    title: 'Landing Page',
  },
  {
    title: 'Knowledge Base',
  },
  {
    title: 'Content Creation',
  },
];

const column03 = [
  {
    c: 'Title',
    title: 'Help',
  },
  {
    title: 'FAQ',
  },
  {
    title: 'Change Log',
  },
  {
    title: 'Discussions',
  },
];

export default function Footer({ sx }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
        ...sx,
      }}
    >
      <Container
        sx={{
          pb: 5,
          pt: 10,
        }}
      >
        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'space-between',
          }}
        >
          <Grid size={6}>
            <Stack spacing={2}>
              <DashedBorder sx={{ py: 1.5, px: 2, width: 200 }}>
                <Typography sx={{ fontSize: 28 }}>Totalizer</Typography>
              </DashedBorder>
              <Stack spacing={0.5}>
                <Typography color="textSecondary" fontSize={14}>
                  Develop the future, we’ll make it semaless.
                </Typography>
                <Typography color="textSecondary" fontSize={14}>
                  Our mission is to empower everyone to effortlessly bring their
                  websites and applications to life.
                </Typography>
              </Stack>
              <Typography variant="h6">Contact</Typography>
              <Stack spacing={1}>
                <Stack direction={'row'} alignItems="center" spacing={1}>
                  <EmailIcon sx={{ color: 'GrayText', fontSize: 18 }} />
                  <Typography color="textSecondary" fontSize={14}>
                    T***@totalizer.com
                  </Typography>
                </Stack>
                <Stack direction={'row'} alignItems="center" spacing={1}>
                  <PhoneIcon sx={{ color: 'GrayText', fontSize: 18 }} />
                  <Typography color="textSecondary" fontSize={14}>
                    180*******
                  </Typography>
                </Stack>
                <Stack direction={'row'} alignItems="center" spacing={1}>
                  <LocationOnIcon sx={{ color: 'GrayText', fontSize: 18 }} />
                  <Typography color="textSecondary" fontSize={14}>
                    L** *** ***{' '}
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="h6">Social</Typography>
              <Stack
                direction="row"
                sx={{
                  mt: 3,
                  mb: 0,
                }}
              >
                <IconButton>
                  <XIcon />
                </IconButton>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
              <Typography variant="h6">Apps</Typography>
              <Stack direction={'row'} spacing={1}>
                <Button variant="outlined" startIcon={<AppleIcon />}>
                  <Stack alignItems={'start'}>
                    <Typography fontSize={12}> Download for</Typography>
                    <Typography> macOS</Typography>
                  </Stack>
                </Button>
                <Button variant="outlined" startIcon={<WindowIcon />}>
                  <Stack alignItems={'start'}>
                    <Typography fontSize={12}> Download for</Typography>
                    <Typography> Windows</Typography>
                  </Stack>
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={6}>
            <Stack spacing={1} direction={'row'} justifyContent={'flex-end'}>
              <BaseMenuList sx={{ minWidth: 100 }} options={column01} />
              <BaseMenuList sx={{ minWidth: 100 }} options={column02} />
              <BaseMenuList sx={{ minWidth: 100 }} options={column03} />
            </Stack>
          </Grid>
        </Grid>

        <Typography fontSize={14} sx={{ mt: 5 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
