import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Output = ({editorRef}) => {
     const runCode = async() => {
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;

        try {
            
        } catch (error) {
            
        }

     };



  return (
   
    <Box w="50%">
      <Text mb={1} fontSize="s">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="whiteAlpha"
        height="25px"
        fontSize="13px"
        mb={4}
        bg="#66ffde68"
        color="#ffffffd0"
      >
        Run
      </Button>

      <Box
        height="80vh"
        mt={4}
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#66ffde"
      >
        test
      </Box>
    </Box>
  );
};

export default Output;
