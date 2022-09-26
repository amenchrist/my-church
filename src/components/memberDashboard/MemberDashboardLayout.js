import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
// import DashboardNavbar from './DashboardNavbar';
import MemberSidebar from './MemberSidebar';
import { useStateContext } from '../../contexts/ContextProvider';

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    overflow: 'auto',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'auto',
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
  overflow: 'auto',
  paddingTop: '20px'
});

const MemberDashboardLayout = () => {
  const { isMobileNavOpen, setMobileNavOpen } = useStateContext();

  return (
    <DashboardLayoutRoot>
      {/* <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} /> */}
      <MemberSidebar
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
  );
};

export default MemberDashboardLayout;
