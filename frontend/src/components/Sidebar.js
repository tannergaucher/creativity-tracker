import React from 'react'
import { Layer, Box, Button, Text } from 'grommet'

const handleClose = () => {
  //set local @client state to isModalOpen false
}

const Sidebar = ({ onClose }) => {
  return (
    <Layer position="left" full="vertical" modal={true} plain={true}>
      <Box background="brand" fill="vertical">
        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Text size="large">Modal Title</Text>
        </Box>

        <Button
          onClick={handleClose}
          hoverIndicator={{ background: 'light-5' }}
        >
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text size="large">test</Text>
          </Box>
        </Button>
      </Box>
    </Layer>
  )
}

export default Sidebar
