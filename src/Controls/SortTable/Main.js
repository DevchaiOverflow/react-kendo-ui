import React from 'react'
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { sampleProducts } from 'sampleProducts';
import { MyCommandCell } from './MyCommandCell';

const styles = {
  root: {
    marginTop: 0,
  },
};

const Main = props => {

  const { classes } = props

  return (
    <div className={classes.root}>
      
    </div>
  )
}

export default withStyles(styles)(Main)
