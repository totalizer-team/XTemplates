import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

const mock = [
  {
    title: 'Starter',
    price: '$22',
    features: ['1 User', '1 App', 'Integrations'],
    isHighlighted: true,
  },
  {
    title: 'Pro',
    price: '$44',
    features: [
      'All in Starter plan',
      'Google Ads',
      'SSO via Google',
      'API access',
    ],
    isHighlighted: true,
  },
  {
    title: 'Enterprise',
    price: '$77',
    features: [
      'All features',
      'Email support',
      'Google Ads',
      'SSO via Google',
      'API access',
      'Facebook Ads',
    ],
    isHighlighted: true,
  },
];

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin={'0 auto'}
      paddingX={2}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
    >
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Flexible and transparent pricing
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Whatever your status, our offers evolve according to your needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Box
              component={Card}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={item.isHighlighted ? 4 : 0}
            >
              <CardContent
                sx={{
                  padding: 4,
                }}
              >
                <Box
                  marginBottom={2}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Typography variant={'h4'}>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant={'subtitle2'} color={'text.secondary'}>
                      /mo
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid size={12} key={j}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.secondary.main}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={feature} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', p: 4, pt: 0 }}>
                <Button size={'large'} variant={'contained'}>
                  Learn more
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
