import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// ----------------------------------------------------------------------

export default () => {
  const job = {
    company: {
      name: '公司名称',
      logo: '/assets/images/company/company-6.webp',
    },
    urgent: '',
    slug: '职位描述',
    location: '北京',
    createdAt: '2024',
    experience: 4,
    type: 'part time',
    salary: 'competitive',
    level: 'manager',
  };
  return (
    <Box
      columnGap={4}
      display="grid"
      rowGap={{ xs: 4, md: 5 }}
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      <Card sx={{ position: 'relative' }}>
        <Checkbox
          color="error"
          onChange={() => {}}
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon />}
          inputProps={{
            id: `favorite-checkbox-${job.id}`,
            'aria-label': 'Favorite checkbox',
          }}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        />

        <Stack sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
          <Box gap={2} display="flex" alignItems="center">
            <img
              alt={job.company.name}
              src={job.company.logo}
              style={{ width: 48, height: 48, borderRadius: 1 }}
            />

            {job.urgent}
          </Box>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Link href="" color="inherit" variant="h6" noWrap>
              {job.slug}
            </Link>

            <Typography
              variant="body2"
              sx={{ mt: 0.5, mb: 0.75, color: 'info.main' }}
            >
              {job.company.name}
            </Typography>

            <Box
              gap={0.5}
              display="flex"
              alignItems="center"
              sx={{ typography: 'body2', color: 'text.secondary' }}
            >
              <LocationOnOutlinedIcon />
              {job.location}
            </Box>
          </Box>

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Posted at: {job.createdAt}
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box
          gap={1.5}
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          sx={{
            typography: 'body2',
            color: 'text.secondary',
            p: (theme) => theme.spacing(2, 3, 3, 3),
          }}
        >
          <Box component="span" gap={1} display="flex" alignItems="center">
            <AccessTimeIcon />
            {`${job.experience} year exp`}
          </Box>
          <Box component="span" gap={1} display="flex" alignItems="center">
            <AccessTimeIcon />
            {job.type}
          </Box>
          <Box component="span" gap={1} display="flex" alignItems="center">
            <AccessTimeIcon />
            {job.salary}
          </Box>
          <Box component="span" gap={1} display="flex" alignItems="center">
            <AccessTimeIcon />
            {job.level}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
