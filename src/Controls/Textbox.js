import React from 'react'
import TextField from "@material-ui/core/TextField";

const Textbox = props => {
  console.log('Textbox', props)
  const { form } = props

  return <TextboxView />
}

const TextboxView = () => {
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        InputProps={{
          readOnly: true,
          shrink: true
        }}
      />
    </div>
  )
}

export default Textbox
