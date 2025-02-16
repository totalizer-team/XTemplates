import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

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
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Simple pricing
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Pick the best plan based on your ad spend
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            Learn more
          </Button>
        </Box>
      </Box>
      <Grid container spacing={isMd ? 0 : 2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <CardContent sx={{ padding: { sm: 4 } }}>
              <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
                <ToggleButtonGroup
                  value={pricingOption}
                  exclusive
                  onChange={handleClick}
                >
                  <ToggleButton
                    value="annual"
                    size={'small'}
                    sx={{
                      backgroundColor:
                        pricingOption === 'annual'
                          ? `${theme.palette.primary.light} !important`
                          : 'transparent',
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color:
                          pricingOption === 'annual'
                            ? theme.palette.common.white
                            : 'primary',
                      }}
                    >
                      Annual
                    </Typography>
                  </ToggleButton>
                  <ToggleButton
                    value="monthly"
                    size={'small'}
                    sx={{
                      backgroundColor:
                        pricingOption === 'monthly'
                          ? `${theme.palette.primary.light} !important`
                          : 'transparent',
                      border: `1px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'medium',
                        color:
                          pricingOption !== 'annual'
                            ? theme.palette.common.white
                            : 'primary',
                      }}
                    >
                      Monthly
                    </Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box marginBottom={4}>
                <Typography
                  fontWeight={600}
                  variant={'h2'}
                  align={'center'}
                  gutterBottom
                >
                  ${pricingOption === 'annual' ? '240' : '29'}
                </Typography>
                <Typography color="text.secondary" align={'center'}>
                  6 month of technical support.
                  <br />
                  Plus unlimited updates.
                </Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  'All features',
                  'Email support',
                  'Google Ads',
                  'SSO via Google',
                  'API access',
                  'Facebook Ads',
                ].map((item, i) => (
                  <Grid size={{ xs: 12, md: 6 }} key={i}>
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
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size={'large'}>Learn more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid display="flex" size={{ xs: 12, md: 6 }} alignItems={'center'}>
          <Box component={Card} bgcolor={theme.palette.primary.main}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: { sm: 4 },
              }}
            >
              <Box color={theme.palette.common.white} marginBottom={4}>
                <svg
                  width={80}
                  height={80}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </Box>
              <Typography
                variant={'h4'}
                gutterBottom
                sx={{ fontWeight: 600, color: theme.palette.common.white }}
              >
                Customized
              </Typography>
              <Typography
                gutterBottom
                align={'center'}
                sx={{ color: theme.palette.common.white }}
              >
                Design a custom package for your business.
              </Typography>
              <Typography
                align={'center'}
                sx={{ color: theme.palette.common.white }}
              >
                Available for businesses with large payments volume or unique
                business models.
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size={'large'} sx={{ color: theme.palette.common.white }}>
                Contact sales
              </Button>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
