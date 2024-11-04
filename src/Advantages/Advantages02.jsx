import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

const mock = [
  {
    title: 'Google Drive',
    subtitle:
      'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
  },
  {
    title: 'Google Ad Manager',
    subtitle:
      'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
  },
  {
    title: 'Atlassian',
    subtitle:
      'Keep your entire team in sync with development and easily manage tasks, goals, and deadlines. Easily manage and edit any Adwords campaign inline to improve ROI with constant review.',
    icon: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
  },
];

const Reviews = () => {
  const theme = useTheme();

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
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                flexDirection={'column'}
                display={'flex'}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    component={Avatar}
                    width={{ xs: 60, md: 80 }}
                    height={{ xs: 60, md: 80 }}
                    marginBottom={2}
                    src={item.icon}
                  />
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
