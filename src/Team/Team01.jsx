import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import XIcon from '@mui/icons-material/X';

import Stack from '@mui/material/Stack';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

const mock = [
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
];

const Team = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.06)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
      }}
    >
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin={'0 auto'}
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography fontWeight={700} variant={'h4'} align={'center'}>
            Our Team
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Box
                component={Card}
                boxShadow={2}
                sx={{
                  pt: 1,
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component={Avatar}
                      src={item.avatar}
                      height={55}
                      width={55}
                    />
                    <ListItemText
                      primary={item.name}
                      secondary={item.title}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: 20,
                          },
                        },
                      }}
                    />
                  </Stack>
                  <Stack spacing={1.5} marginTop={2.5}>
                    <Typography
                      variant={'subtitle2'}
                      color={'text.secondary'}
                      sx={{
                        p: 1,
                        fontSize: 12,
                        bgcolor: isDark
                          ? 'rgba(255,255,255,.05)'
                          : 'rgba(0,0,0,.05)',
                        borderRadius: 1,
                      }}
                    >
                      {item.about}
                    </Typography>

                    <Stack spacing={0.5}>
                      <Stack direction={'row'} alignItems="center" spacing={1}>
                        <CodeIcon sx={{ color: 'GrayText', fontSize: 18 }} />
                        <Typography color="textSecondary" fontSize={14}>
                          @totalizer/xmenu
                        </Typography>
                      </Stack>
                      <Stack direction={'row'} alignItems="center" spacing={1}>
                        <LanguageIcon
                          sx={{ color: 'GrayText', fontSize: 18 }}
                        />
                        <Typography color="textSecondary" fontSize={14}>
                          English * Chinese
                        </Typography>
                      </Stack>
                      <Stack direction={'row'} alignItems="center" spacing={1}>
                        <LocationOnIcon
                          sx={{ color: 'GrayText', fontSize: 18 }}
                        />
                        <Typography color="textSecondary" fontSize={14}>
                          China, Beijing
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack direction="row" spacing={1} justifyContent={'end'}>
                      <IconButton size="small" color={'primary'}>
                        <GitHubIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                      <IconButton size="small" color={'primary'}>
                        <XIcon sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Stack>
                  </Stack>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Team;
