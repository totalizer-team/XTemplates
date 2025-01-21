import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import AutoScroll from 'embla-carousel-auto-scroll';

import { Carousel, useCarousel } from './carousel';

import { useTheme } from '@mui/material/styles';
import CardJob01 from '../../../../src/Card/CardJob01.jsx';
import CardPost01 from '../../../../src/Card/CardPost01.jsx';
import CardPost02 from '../../../../src/Card/CardPost02.jsx';
import CardPost03 from '../../../../src/Card/CardPost03.jsx';
import CardUser01 from '../../../../src/Card/CardUser01.jsx';
import CardUser02 from '../../../../src/Card/CardUser02.jsx';

// ----------------------------------------------------------------------

export default function CarouselVariableWidths({}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const carousel = useCarousel(
    {
      slidesToShow: 'auto',
      slideSpacing: '20px',
      loop: true,
    },
    [AutoScroll({ playOnInit: true })],
  );

  const playProps = {
    onMouseEnter: () => {
      carousel.autoScroll.isPlaying && carousel.autoScroll.onTogglePlay();
    },
    onMouseLeave: () => {
      !carousel.autoScroll.isPlaying && carousel.autoScroll.onTogglePlay();
    },
  };

  return (
    <Box
      component={Paper}
      sx={{
        py: 2,
        borderRadius: 1,
        // border: 1,
        // borderColor: 'divider',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.06)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
      }}
      onMouseLeave={() => {
        !carousel.autoScroll.isPlaying && carousel.autoScroll.onTogglePlay();
      }}
    >
      <Carousel carousel={carousel} sx={{ py: 1 }}>
        <CardJob01 sx={{ width: 400 }} {...playProps} />
        <CardPost01 sx={{ width: 400 }} {...playProps} />
        <CardPost02 sx={{ width: 500 }} {...playProps} />
        <CardPost03 sx={{ width: 300 }} {...playProps} />
        <CardUser01 sx={{ width: 300 }} {...playProps} />
        <CardUser02 sx={{ width: 300 }} {...playProps} />
      </Carousel>

      {/* <CarouselProgressBar
        {...carousel.progress}
        sx={{
          top: 20,
          right: 20,
          color: 'info.light',
          position: 'absolute',
        }}
      /> */}

      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 3 }}
      >
        <CarouselArrowBasicButtons
          {...carousel.arrows}
          options={carousel.options}
        />
        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />
      </Box> */}
    </Box>
  );
}
