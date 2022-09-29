import React from 'react';

import { MdExplore, MdFeedback, MdHelp, MdHistory, MdHome, MdWatchLater, MdWhatshot, MdSettings, MdSubscriptions, MdThumbUp, MdVideoLibrary } from 'react-icons/md'
import SidebarRow from './sidebar_row';

const Sidebar = ({ onClick }) => (
  <div class='sidebar' onClick={onClick}>
    <SidebarRow selected Icon={MdHome} title='Home' id='home' />
    <SidebarRow Icon={MdWhatshot} title='Trending' />
    <SidebarRow Icon={MdExplore} title='Explore' />
    <hr />
    <SidebarRow Icon={MdSubscriptions} title='Subscriptions' />
    <SidebarRow Icon={MdVideoLibrary} title='Library' />
    <SidebarRow Icon={MdHistory} title='History' />
    <SidebarRow Icon={MdWatchLater} title='Watch later' />
    <SidebarRow Icon={MdThumbUp} title='Liked videos' />
    <hr />
    <SidebarRow Icon={MdSettings} title='Settings' />
    <SidebarRow Icon={MdHelp} title='Help' />
    <SidebarRow Icon={MdFeedback} title='Feedback' />
  </div>
);

export default Sidebar;

