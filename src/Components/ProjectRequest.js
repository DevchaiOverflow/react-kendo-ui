import React from 'react'
// Material ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
// Controls
import SortTable from '../Controls/SortTable'
import TabMenu from '../Controls/TabMenu'

const styles = {
  root: {
    marginTop: 10,
  },
};

const ProjectRequest = props => {

  const { classes } = props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper>
          {/* <TabMenu /> */}
          <SortTable />
        </Paper>
      </Container>
    </div>
  )
}

export default withStyles(styles)(ProjectRequest)
