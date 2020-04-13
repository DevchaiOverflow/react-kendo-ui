import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
}))

const SortTable = props => {

  const classes = useStyles()
  const editField = "inEdit";
  const [state, setState] = React.useState({
    // data: sampleProducts.map((item) => Object.assign({ inEdit: true }, item)),
    // data: sampleProducts.slice(0),
    // data: [...sampleProducts],
    data: sampleProducts,
    sort: [
      { field: 'ProductID', dir: 'asc' }
    ],
  })

  const edit = (dataItem) => {
    console.log('edit', dataItem)
    setState(prevState => ({
      ...prevState,
      data: state.data.map(item =>
        item.ProductID === dataItem.ProductID ?
          { ...item, inEdit: true } : item
      )
    }));
  }

  const update = (dataItem) => {
    console.log('update', dataItem)

    const data = [...state.data];
    const updatedItem = { ...dataItem, inEdit: undefined };

    updateItem(data, updatedItem);
    updateItem(sampleProducts, updatedItem);

    setState(prevState => ({
      ...prevState,
      data: data
    }));
  }

  const cancel = (dataItem) => {
    const originalItem = sampleProducts.find(p => p.ProductID === dataItem.ProductID);
    setState(prevState => ({
      ...prevState,
      data: state.data.map(item => item.ProductID === originalItem.ProductID ? originalItem : item)
    }));
  }

  const updateItem = (data, item) => {
    let index = data.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
    if (index >= 0) {
      data[index] = { ...item };
    }
  }

  const itemChange = (event) => {
    setState(prevState => ({
      ...prevState,
      data: state.data.map(item =>
        item.ProductID === event.dataItem.ProductID ?
          { ...item, [event.field]: event.value } : item
      )
    }));
  }

  const CellAct = ({ dataItem }) => {
    return dataItem.inEdit ? (
      <td style={{ padding: 0 }}>
        <IconButton aria-label="update" onClick={() => update(dataItem)}>
          <CheckIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="cancel" onClick={() => cancel(dataItem)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </td>
    ) : (
        <td style={{ padding: 0 }}>
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="edit" onClick={() => edit(dataItem)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </td>
      )
  }

  const handleSortChange = (e) => {
    setState(prevState => ({
      ...prevState,
      sort: e.sort
    }))
  }

  return (
    <div className={classes.root}>
      <Grid
        style={{ height: '300px' }}
        data={orderBy(state.data, state.sort)}
        sortable={true}
        sort={state.sort}
        onSortChange={handleSortChange}
        onItemChange={itemChange}
        editField={editField}
      >
        <GridColumn field="#" cell={CellAct} width="100px" editable={false} />
        <GridColumn field="ProductID" title="Product Id" editable={false} />
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn field="UnitPrice" title="Unit Price" editor="numeric" />
      </Grid>
    </div>
  )
}

export default SortTable
