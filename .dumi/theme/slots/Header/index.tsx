import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

// import ColorSwitch from 'dumi/theme/slots/ColorSwitch';
// import HeaderExtra from 'dumi/theme/slots/HeaderExtra';
// import LangSwitch from 'dumi/theme/slots/LangSwitch';
// import Logo from 'dumi/theme/slots/Logo';
import Logo from '../Logo';
// import Navbar from 'dumi/theme/slots/Navbar';
// import RtlSwitch from 'dumi/theme/slots/RtlSwitch';
// import SearchBar from 'dumi/theme/slots/SearchBar';
// import SocialIcon from 'dumi/theme/slots/SocialIcon';

import type { SocialTypes } from '@/client/theme-api/types';
import { useRouteMeta, useSiteData } from 'dumi';
import React, { useMemo, useState, type FC } from 'react';
import './index.less';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  const socialIcons = useMemo(
    () =>
      themeConfig.socialLinks
        ? Object.keys(themeConfig.socialLinks)
            .slice(0, 5)
            .map((key) => ({
              icon: key as SocialTypes,
              link: themeConfig.socialLinks[key as SocialTypes],
            }))
        : [],
    [themeConfig.socialLinks],
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            XTemplates
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

  // return (
  //   <div
  //     className="dumi-default-header"
  //     data-static={Boolean(frontmatter.hero) || undefined}
  //     data-mobile-active={showMenu || undefined}
  //     onClick={() => setShowMenu(false)}
  //   >
  //     <div className="dumi-default-header-content">
  //       <section className="dumi-default-header-left">
  //         <Logo />
  //       </section>
  //       <section className="dumi-default-header-right">
  //         <Navbar />
  //         <div className="dumi-default-header-right-aside">
  //           <SearchBar />
  //           <LangSwitch />
  //           <RtlSwitch />
  //           {themeConfig.prefersColor.switch && <ColorSwitch />}
  //           {socialIcons.map((item) => (
  //             <SocialIcon icon={item.icon} link={item.link} key={item.link} />
  //           ))}
  //           <HeaderExtra />
  //         </div>
  //       </section>
  //       <button
  //         type="button"
  //         className="dumi-default-header-menu-btn"
  //         onClick={(ev) => {
  //           ev.stopPropagation();
  //           setShowMenu((v) => !v);
  //         }}
  //       >
  //         {showMenu ? <IconClose /> : <IconMenu />}
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Header;
