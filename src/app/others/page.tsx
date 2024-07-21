import SanityPageRender from "@/app/components/SanityPageRender";
import { Button, Grid } from '@mui/material';

export default function OtherPage() {
  return (
    <>
      <SanityPageRender where={`[sectionIdCustom] match "page3"`}/>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{textAlign: 'center'}}>
          <Button color="primary" variant="contained" sx={{width: {xs: '100%', sm: 'auto'}, mb: {xs: 2, sm: 'auto'}}}>See your impact</Button>
        </Grid>
        <Grid item xs={12} sm={6} sx={{textAlign: 'center'}}>
          <Button color="primary" variant="outlined" sx={{width: {xs: '100%', sm: 'auto'}}}>Not Now</Button>
        </Grid>
      </Grid>
      <hr/>
    </>
  )
}