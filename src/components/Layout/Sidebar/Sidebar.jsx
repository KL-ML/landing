import { Navigation } from "./Navigation/Navigation"; 
import { SidebarWrap } from "./Sidebar.styled";
import { SocialLink } from "./SocialLink/SocialLink";

export const Sidebar = () => {
  return (
    <SidebarWrap>
      <SocialLink />
      <Navigation />
    </SidebarWrap>
  );
};