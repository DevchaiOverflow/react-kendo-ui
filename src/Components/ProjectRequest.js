import React from 'react'
// Material ui
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Controls
import SortTable from '../Controls/SortTable'

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
          <Typography variant="h6" gutterBottom>Project Request</Typography>
          <SortTable />
        </Paper>
      </Container>
    </div>
  )
}

export default withStyles(styles)(ProjectRequest)
