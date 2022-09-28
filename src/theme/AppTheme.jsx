import { ThemeProvider } from "@mui/material"
import { CssBaseline } from "@mui/material"
import { MyTheme } from "./MyTheme";

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={MyTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
