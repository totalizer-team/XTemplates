import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import React from 'react';

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
            Trust the professionals
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            {
              name: 'Chary Smith',
              title: 'SEO at Comoti',
              avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
            },
            {
              name: 'Clara Bertoletti',
              title: 'Junior Designer',
              avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
            },
            {
              name: 'Jhon Anderson',
              title: 'Senior Frontend Developer',
              avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
            },
            {
              name: 'Chary Smith',
              title: 'SEO at Comoti',
              avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
            },
          ].map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Card
                sx={{
                  boxShadow: 0,
                  background: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <Box
                  component={CardContent}
                  bgcolor={'transparent'}
                  marginTop={-5}
                >
                  <Box component={Card}>
                    <CardContent>
                      <ListItemText
                        primary={item.name}
                        secondary={item.title}
                      />
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Team;
