import { Box, Typography } from '@mui/material';
import {XNavigation} from '@totalizer/xcomponents';
import { history, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import React from 'react';

import './index.less';

const Sidebar = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  console.log(pathname, sidebar, meta);

  return (
    <div className="dumi-default-sidebar">
      {sidebar.map((item, i) => (
        <Box key={i}>
          {item.title && <Typography>{item.title}</Typography>}
          <XNavigation
            options={item.children.map((el) => ({
              // icon: <ExploreIcon />,
              title: el.title,
              link: el.link,
              onClick: () => {
                history.push(el.link);
              },
            }))}
            isSelected={(el) => el.link === pathname}
          />
        </Box>
      ))}
    </div>
  );
};

export default Sidebar;
