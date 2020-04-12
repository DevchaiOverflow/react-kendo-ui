import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import '@progress/kendo-theme-default/dist/all.css';
import { Grid as GridTable, GridColumn as Column, GridCell } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
}))

const SortTable = props => {

  const classes = useStyles()
  const [state, setState] = React.useState({
    data: sampleProducts.map((item) => Object.assign({ inEdit: true }, item)),
    sort: [
      { field: 'ProductID', dir: 'asc' }
    ],
  })

  const edit = (dataItem) => {
    console.log('edit', dataItem)
    dataItem.inEdit = true;
  }

  const CellAct = (props) => {
    console.log('CellAct', props)
    const { dataItem } = props
    return (<>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => edit(dataItem)}>
        <EditIcon />
      </IconButton>
    </>)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container direction="row" alignItems="flex-end">

          <GridTable
            style={{ height: '300px' }}
            // data={state.data}
            // editField="inEdit"
            data={orderBy(sampleProducts, state.sort)}
            sortable
            sort={state.sort}
            onSortChange={(e) => {
              setState({
                sort: e.sort
              });
            }}
          >
            <Column field="#" cell={CellAct} width="100px" editable={false}/>
            <Column field="ProductID" title="Product Id" editor="numeric"/>
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" editor="numeric"/>
          </GridTable>

        </Grid>
      </Container>
    </div>
  )
}

export default SortTable
