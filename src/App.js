import React from 'react'
import Appbar from './Controls/Appbar'
import MenuStep from './Controls/MenuStep'
import SortTable from './Controls/SortTable'

const App = props => {
  return (
    <div>
      <Appbar />
      <MenuStep />
      <SortTable />
    </div>
  )
}

export default App