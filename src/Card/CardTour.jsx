import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

// ----------------------------------------------------------------------

export default () => {
  const tour = {
    priceSale: 23.34,
    price: 20,
    coverUrl: '/assets/images/travel/travel-5.webp',
    location: '地点',
    slug: '景点描述信息',
    duration: '3天2晚',
    ratingNumber: 5,
  };

  return (
    <Box
      component="section"
      columnGap={3}
      display="grid"
      rowGap={{ xs: 4, md: 5 }}
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
      }}
    >
      <Card sx={{ position: 'relative' }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pl: 2,
            top: 0,
            pt: 1.5,
            pr: 1.5,
            width: 1,
            zIndex: 9,
            position: 'absolute',
          }}
        >
          <Box
            gap={0.5}
            display="flex"
            sx={{
              px: 1,
              borderRadius: 0.75,
              typography: 'subtitle2',
              bgcolor: 'text.primary',
              color: 'background.paper',
            }}
          >
            <Box
              component="span"
              sx={{
                mr: 0.5,
                color: 'grey.500',
                textDecoration: 'line-through',
              }}
            >
              &yen; {tour.priceSale}
            </Box>
            &yen; {tour.price}
          </Box>
          <Checkbox
            color="error"
            // checked
            // onChange={() => {}}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
            inputProps={{
              id: `favorite-checkbox-${tour.id}`,
              'aria-label': 'Favorite checkbox',
            }}
            sx={{ color: 'common.white' }}
          />
        </Box>

        <img
          alt={tour.slug}
          src={tour.coverUrl}
          style={{
            display: 'block',
            aspectRatio: 1 / 1,
            width: '100%',
            objectFit: 'cover',
          }}
        />

        <Box sx={{ p: 2.5 }}>
          <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
            {tour.location}
          </Typography>

          <Link href="" color="inherit" variant="h6" underline="none">
            {tour.slug}
          </Link>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box display="flex" alignItems="center" sx={{ p: 2.5 }}>
          <Box
            gap={0.5}
            flexGrow={1}
            display="flex"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <AccessTimeIcon /> {tour.duration}
          </Box>

          <Box gap={0.5} display="flex" alignItems="center">
            <StarRoundedIcon />
            <Box component="span" sx={{ typography: 'h6' }}>
              {tour.ratingNumber}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
