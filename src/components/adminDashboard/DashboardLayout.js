import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
// import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './AdminSidebar';
import { AdminContextProvider } from '../../contexts/AdminContextProvider';

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 0,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = ({ isMobileNavOpen, setMobileNavOpen }) => {
  // const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <AdminContextProvider>
      <DashboardLayoutRoot>
        {/* <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} /> */}
        <DashboardSidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              <Outlet />
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
    </AdminContextProvider> 
  );
};

export default DashboardLayout;
