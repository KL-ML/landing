import { LayoutWrap, Main } from './Layout.styled';
import { Sidebar } from './Sidebar/Sidebar'; 

export const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <Sidebar />
      <Main>
        <>{children}</>
      </Main>
    </LayoutWrap>
  );
};