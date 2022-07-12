import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { colors } from './colorsLight';
import { components } from './components';

const themeLight = createTheme({
  palette: { ...colors },
  typography: { ...typography },
  components: {
    ...components
  },
});

export default themeLight;
