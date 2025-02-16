import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
  height: 6,
  maxWidth: 120,
  width: '100%',
  borderRadius: 6,
  overflow: 'hidden',
  position: 'relative',
  // color: theme.vars.palette.text.primary,
}));

const StyledProgress = styled(Box)(() => ({
  top: 0,
  bottom: 0,
  width: '100%',
  left: '-100%',
  position: 'absolute',
  backgroundColor: 'currentColor',
}));

// ----------------------------------------------------------------------

export function CarouselProgressBar({ sx, value, className, ...other }) {
  return (
    <StyledRoot sx={sx} {...other}>
      <StyledProgress
        sx={{
          transform: `translate3d(${value}%, 0px, 0px)`,
        }}
      />
    </StyledRoot>
  );
}
