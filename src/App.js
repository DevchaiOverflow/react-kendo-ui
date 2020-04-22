import React from 'react'
import Appbar from './Controls/Appbar'
import MenuStep from './Controls/MenuStep'
import ProjectRequest from './Components/ProjectRequest'

const App = props => {
  return (
    <div>
      <Appbar />
      <MenuStep />
      <ProjectRequest />
    </div>
  )
}

export default App