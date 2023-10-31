import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Footer from './Footer';
import Head from './Head';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.mainBox}>
      <Head />

      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>

      <Footer />
    </Box>
  );
};

export default Layout;

const useStyles = makeStyles(() => ({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    '& > main:first-of-type': {
      flexGrow: 1
    }
  }
}));
