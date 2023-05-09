import { Sidebar } from './Sidebar/Sidebar'; 

export const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>
        <>{children}</>
      </main>
    </div>
  );
};