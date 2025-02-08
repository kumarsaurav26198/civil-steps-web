import { EmailIcon } from "@chakra-ui/icons";
import {
 Box,
 Button,
 Input,
 Text,
 VStack,
 FormControl,
 FormErrorMessage,
 useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../../services/apiEndPoints";

const ForgetPassword = () => {
 const toast = useToast();
 const [email, setEmail] = useState("");
 const [isEmailValid, setIsEmailValid] = useState(true);

 const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
 };

 const handleSendEmail = async () => {
  if (validateEmail(email)) {
   try {
    const response = await axios.post(
//      `https://api.civilsteps.com/api/user/forget-password`,
     `${baseURL}/api/user/forget-password`,
     { Email: email }
    );
    console.log("response:", response);
    if (response.status === 200) {
     toast({
      title: "Password reset link sent successful",
      status: "success",
      duration: 3000,
      isClosable: true,
     });
    }
   } catch (error) {
    console.log("error:", error);
   }
  } else {
   setIsEmailValid(false);
  }
 };

 const handleBlur = () => {
  if (email === "" || validateEmail(email)) {
   setIsEmailValid(true);
  } else {
   setIsEmailValid(false);
  }
 };

 return (
  <Box border={"1px solid"}>
   <VStack
    w="45%"
    h="500px"
    m={"50px auto"}
    align={"center"}
    justify={"center"}
    borderRadius={"15px"}
    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    p="5"
   >
    <Text color={"#61656e"} fontSize="2.5rem" fontWeight={"600"}>
     Password reset
    </Text>
    <Text>You will receive instructions for resetting your password.</Text>
    <FormControl isInvalid={!isEmailValid} mt="30px" w="50%">
     <Input
      pr="4.5rem"
      type="email"
      focusBorderColor="teal.400"
      placeholder="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onBlur={handleBlur}
      required
     />
     {!isEmailValid && <FormErrorMessage>Email is invalid.</FormErrorMessage>}
    </FormControl>
    <Button
     variant="outline"
     colorScheme="teal"
     aria-label="Send email"
     leftIcon={<EmailIcon />}
     onClick={handleSendEmail}
    >
     Send
    </Button>
   </VStack>
  </Box>
 );
};

export default ForgetPassword;

// import { EmailIcon } from "@chakra-ui/icons";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { HiOutlineEye } from "react-icons/hi2";
// import {
//  Box,
//  Button,
//  Input,
//  InputGroup,
//  InputRightElement,
//  Stack,
//  Text,
//  VStack,
// } from "@chakra-ui/react";
// import React, { useState } from "react";

// const ForgetPassword = () => {
//  const [email, setEmail] = useState();
//  const handleSendEmail = async () => {
//   try {
//    console.log("email:", email);
//   } catch (error) {
//    console.log("error:", error);
//   }
//  };
//  return (
//   <Box border={"1px solid"}>
//    <VStack
//     w="45%"
//     h="500px"
//     m={"50px auto"}
//     align={"center"}
//     justify={"center"}
//     borderRadius={"15px"}
//     boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
//     p="5"
//    >
//     <Text color={"#61656e"} fontSize="2.5rem" fontWeight={"600"}>
//      Password reset
//     </Text>
//     <Text>You will receive instructions for reseting your password.</Text>
//     <Input
//      mt="30px"
//      pr="4.5rem"
//      w="50%"
//      type="email"
//      focusBorderColor="1px solid #cccc"
//      placeholder="email"
//      onChange={(e) => setEmail(e.target.value)}
//      required
//     />
//     <Button
//      variant="outline"
//      colorScheme="#61656e"
//      aria-label="Send email"
//      leftIcon={<EmailIcon />}
//      onClick={handleSendEmail}
//     >
//      Send
//     </Button>
//    </VStack>
//   </Box>
//  );
// };

// export default ForgetPassword;
/*
 const [show, setShow] = React.useState(false);
 const handleClick = () => setShow(!show);
*/
{
 /* <InputRightElement width="4.5rem">
       <IconButton
        h="1.75rem"
        variant="outline"
        colorScheme="#FAB519"
        aria-label="Send email"
        icon={show ? <HiOutlineEye /> : <FaRegEyeSlash />}
        onClick={handleClick}
       />
      </InputRightElement> */
}
