Transform this into a styled-component. Structure for help : Update to use this code best practices : 
## Styled Components Best Practices ### Prefer functional components with hooks const preferFunctionalComponents = true; ### Styled Components best practices - Use the styled-components/macro for better debugging - Implement a global theme using ThemeProvider - Create reusable styled components - Use props for dynamic styling - Utilize CSS helper functions like css`` when needed - Always reuse CSS variables when possible ### Folder Structure ``` components/ interfaces/ styles/ theme.js globalStyles.js pages/ utils/ ```

Use import styled from 'styled-components', not /macro;
Remove old module.css import, remove unused styles.className.
Do not ommit anything.