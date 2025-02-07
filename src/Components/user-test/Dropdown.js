// Dropdown.js
import React from "react";
import { Select } from "@chakra-ui/react";

const Dropdown = ({ options, value, onChange, placeholder }) => {
 return (
  <Select
   focusBorderColor="none"
   backgroundColor={"white"}
   fontSize={"1.3rem"}
   padding={"30px"}
   width={"80%"}
   margin={"auto"}
   height={"8vh"}
   value={value}
   onChange={onChange}
   alignItems={"center"}
   alignContent={"center"}
   alignSelf={"center"}
   justifyItems={"center"}
   placeholder={placeholder}
  >
   {options.map((option, index) => (
    <option key={index} value={option.value}>
     {option.label}
    </option>
   ))}
  </Select>
 );
};

export default Dropdown;
