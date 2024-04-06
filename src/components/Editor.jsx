import { Box } from '@chakra-ui/react'
import React from 'react'
// import './editor.scss'
import CodeEditor from './CodeEditor';
//import Editor from '@monaco-editor/react'

const Editor = () => {
  return (
    <Box
      height="100vh"
      bg="#23272d"
      color="gray.500"
      px={6}
      py={8}
    >
      <CodeEditor />
    </Box>
  );
}

export default Editor