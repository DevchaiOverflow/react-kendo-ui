import React from 'react'

const MyCommandCell = props => {

  const { edit, remove, add, update, discard, cancel, editField } = props

  return class extends GridCell {
    render() {
      const { dataItem } = this.props;
      const inEdit = dataItem[editField];
      const isNewItem = dataItem.ProductID === undefined;

      return inEdit ? (
        <td className="k-command-cell">
          <button
            className="k-button k-grid-save-command"
            onClick={() => isNewItem ? add(dataItem) : update(dataItem)}
          >
            {isNewItem ? 'Add' : 'Update'}
          </button>
          <button
            className="k-button k-grid-cancel-command"
            onClick={() => isNewItem ? discard(dataItem) : cancel(dataItem)}
          >
            {isNewItem ? 'Discard' : 'Cancel'}
          </button>
        </td>
      ) : (
        <td className="k-command-cell">
          <button
            className="k-primary k-button k-grid-edit-command"
            onClick={() => edit(dataItem)}
          >
            Edit
                  </button>
          <button
            className="k-button k-grid-remove-command"
            onClick={() => confirm('Confirm deleting: ' + dataItem.ProductName) &&
              remove(dataItem)
            }
          >
            Remove
                  </button>
        </td>
      );
    }
  }

}

export default MyCommandCell