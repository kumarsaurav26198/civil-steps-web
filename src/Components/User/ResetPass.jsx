import React, { useState } from "react";
// import img1 from "./../assets/loginpageimage.png";
import {
 Box,
 Button,
 FormControl,
 HStack,
 IconButton,
 Image,
 Input,
 Text,
 InputRightElement,
 InputGroup,
 useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ResetPass = () => {
 const navigate = useNavigate();
 const { token } = useParams();
 console.log("token:", token);

 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [showPassword, setShowPassword] = useState(false);
 const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const [loading, setLoading] = useState(false);

 const toast = useToast();

 const handlePasswordChange = (event) => {
  setPassword(event.target.value);
 };

 const handleConfirmPasswordChange = (event) => {
  setConfirmPassword(event.target.value);
 };

 const handleSubmit = async (event) => {
  event.preventDefault();
  try {
   setLoading(true); // Set loading state to true
   if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
   }
   const payload = {
    token: token,
    newPassword: confirmPassword,
   };
   const response = await axios.post(
    `https://api.civilsteps.com/api/user/reset-password`,
    payload
   );
   if (response.status === 200) {
    toast({
     title: "Password reset successful",
     status: "success",
     duration: 3000,
     isClosable: true,
    });
   }
   console.log("Response:", response.data);
   navigate("/login");
  } catch (error) {
   console.log("error:", error);
   toast({
    title: "Error!",
    description: "An error occurred while resetting password.",
    status: "error",
    duration: 3000,
    isClosable: true,
   });
  } finally {
   setLoading(false);
  }
 };

 const handleClickShowPassword = () => {
  setShowPassword(!showPassword);
 };

 const handleClickShowConfirmPassword = () => {
  setShowConfirmPassword(!showConfirmPassword);
 };

 return (
  <div>
   <Box width={"30vw"} height={"60vh"} margin={"0px auto"}>
    <HStack width={"100%"} height={"100%"} border={"2px solid blue"}>
     <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
     >
      {/* <Image src={img1} width="13vw" /> */}
      <Text mb="5" fontWeight={"600"} marginTop={"4vh"}>
       Reset Your Password
      </Text>

      <form onSubmit={handleSubmit}>
       <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
       >
        <FormControl margin="normal" fullWidth>
         <InputGroup>
          <Input
           id="password"
           type={showPassword ? "text" : "password"}
           label="Password"
           placeholder="Enter new password"
           value={password}
           onChange={handlePasswordChange}
          />
          <InputRightElement width="4.5rem">
           <IconButton
            h="1.75rem"
            size="sm"
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={(event) => event.preventDefault()}
            variant="unstyled"
           >
            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
           </IconButton>
          </InputRightElement>
         </InputGroup>
        </FormControl>
        <FormControl margin="normal" fullWidth>
         <InputGroup>
          <Input
           id="confirmPassword"
           type={showConfirmPassword ? "text" : "password"}
           label="Confirm Password"
           placeholder="Re-enter new password"
           value={confirmPassword}
           onChange={handleConfirmPasswordChange}
          />
          <InputRightElement width="4.5rem">
           <IconButton
            h="1.75rem"
            size="sm"
            aria-label="toggle password visibility"
            onClick={handleClickShowConfirmPassword}
            onMouseDown={(event) => event.preventDefault()}
            variant="unstyled"
           >
            {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
           </IconButton>
          </InputRightElement>
         </InputGroup>
        </FormControl>
        <Button
         type="submit"
         variant="contained"
         colorScheme="blue"
         isLoading={loading}
        >
         {loading ? "Loading" : "Submit"}
        </Button>
       </Box>
      </form>
     </Box>
    </HStack>
   </Box>
  </div>
 );
};

export default ResetPass;
