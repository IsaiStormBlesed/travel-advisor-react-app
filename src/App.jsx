import { CssBaseline, Grid } from "@mui/material";
import { Header } from "./components/header/Header";
import { Map } from "./components/map/Map";
import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}