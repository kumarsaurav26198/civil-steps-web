import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";

const DynamicInputField = ({ value, onChange, onRemove }) => {
 return (
  <Box>
   <Input
    type="text"
    placeholder="Enter something"
    value={value}
    onChange={onChange}
   />
   <Button onClick={onRemove}>Remove</Button>
  </Box>
 );
};

export default DynamicInputField;
