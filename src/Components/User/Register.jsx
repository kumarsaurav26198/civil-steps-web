import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
 Box,
 Button,
 Input,
 HStack,
 Text,
 Flex,
 Image,
} from "@chakra-ui/react";
import img1 from "./WhatsApp Image 2023-09-30 at 12.20.18 PM.jpeg";
import axios from "axios";

const Register = () => {
 const navigate = useNavigate();

 const [formData, setFormData] = useState({
  Firstname: "",
  Lastname: "",
  Age: "",
  Location: "",
  Gender: "",
  Noofattempts: "",
  Email: "",
  Whatsappno: "",
  Mobileno: "",
  Password: "",
 });

 const handleinput = (e) => {
  const { name, value } = e.target;
  setFormData({
   ...formData,
   [name]: value,
  });
 };
 const handlesubmit = async () => {
  try {
   const response = await axios.post(
    "https://api.civilsteps.com/api/user/register",
    formData
   );

   console.log("registration successful", response.data);
   navigate("/login");
  } catch (error) {
   if (error.response && error.response.status === 400) {
    alert("User already exists");
    window.location.reload();
   } else {
    console.error("Error adding data", error);
   }
  }
 };

 return (
  <div style={{ width: "100vw" }}>
   <Box
    width={["95vw", "80vw", "60vw", "55vw"]}
    height={"85vh"}
    margin={"0px auto"}
    border={"2px solid #FAB415"}
    boxShadow="10px 10px 10px 10px rgba(0,0,0,0.2)"
    marginBottom={"15vh"}
   >
    <Flex width={"100%"} height={"100%"}>
     <Box
      width={"40%"}
      height={"100%"}
      display={["none", "none", "block", "block"]}
     >
      <Image src={img1} width={"100%"} height={"100%"}></Image>
     </Box>

     <Box width={["100%", "100%", "60%", "60%"]} height={"100%"}>
      <Text
       textAlign={"center"}
       fontSize={["1.3rem", "1.3rem", "1.5rem", "1.5rem"]}
       style={{ marginTop: "4vh", fontWeight: "600" }}
      >
       Register to get Started
      </Text>

      <Box
       width={"80%"}
       margin={"auto"}
       marginTop={"4vh"}
       fontSize={"1.2rem"}
       border={"none"}
      >
       <HStack justifyContent={"space-between"}>
        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          name="Firstname"
          value={formData.Firstname}
          _focus={{ boxShadow: "none", outline: "none" }}
          placeholder="First name"
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          onChange={handleinput}
          borderRadius={"none"}
         />
        </Box>

        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          fontSize={"1rem"}
          name="Lastname"
          value={formData.Lastname}
          _focus={{ boxShadow: "none", outline: "none" }}
          placeholder="Last name"
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          height={"5vh"}
          marginTop={"0.5vh"}
          borderBottom={"2px solid black"}
          onChange={handleinput}
          borderRadius={"none"}
         />
        </Box>
       </HStack>

       <HStack justifyContent={"space-between"} marginTop={"5vh"}>
        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          type="number"
          variant="unstyled"
          name="Age"
          value={formData.Age}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          placeholder="Age"
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          onChange={handleinput}
          borderRadius={"none"}
         />
        </Box>

        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          name="Location"
          value={formData.Location}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          placeholder="Location"
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          onChange={handleinput}
          borderRadius={"none"}
         />
        </Box>
       </HStack>

       <HStack justifyContent={"space-between"} marginTop={"5vh"}>
        <Box width="45%" height={"2vh"} fontWeight="600">
         <select
          name="Gender"
          value={formData.Gender}
          onChange={handleinput}
          style={{
           width: "100%",
           height: "2rem", // Set the height of the select element
           padding: "0.2rem 0.5rem", // Add padding to give space for text
           fontSize: "1rem",
           border: "none",
           outline: "none",
           placeholder: "Select Gender",

           marginLeft: "-2px",
           borderBottom: "2px solid black",
           borderRadius: "0px",
          }}
         >
          <option value="Select Gender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
         </select>
        </Box>

        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          type="number"
          name="Noofattempts"
          value={formData.Noofattempts}
          onChange={handleinput}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          placeholder="no of attempts"
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          borderRadius={"none"}
         />
        </Box>
       </HStack>

       <HStack justifyContent={"space-between"} marginTop={"5vh"}>
        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          name="Email"
          value={formData.Email}
          onChange={handleinput}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          borderBottom={"2px solid black"}
          placeholder="Email"
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderRadius={"none"}
         />
        </Box>

        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          name="Whatsappno"
          type="number"
          value={formData.Whatsappno}
          onChange={handleinput}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          placeholder="Whatsapp no"
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          borderRadius={"none"}
         />
        </Box>
       </HStack>

       <HStack justifyContent={"space-between"} marginTop={"5vh"}>
        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          name="Mobileno"
          type="number"
          value={formData.Mobileno}
          onChange={handleinput}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          placeholder="Mobile no"
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          borderRadius={"none"}
         />
        </Box>

        <Box style={{ width: "45%", fontWeight: "600" }}>
         <Input
          variant="unstyled"
          name="Password"
          type="password"
          value={formData.Password}
          onChange={handleinput}
          _focus={{
           boder: "none",
           boxShadow: "none",
           outline: "none",
          }}
          width={"100%"}
          border={"none"}
          textDecoration={"none"}
          placeholder="Password"
          height={"5vh"}
          marginTop={"0.5vh"}
          fontSize={"1rem"}
          borderBottom={"2px solid black"}
          borderRadius={"none"}
         />
        </Box>
       </HStack>

       <Button
        marginTop={"2vh"}
        width={"100%"}
        fontWeight={"400"}
        backgroundColor={"#FAB519"}
        padding={"5px 40px"}
        _hover={{
         color: "black",
         border: "2px solid #FAB519",
         backgroundColor: "white",
        }}
        marginBottom={"5vh"}
        onClick={handlesubmit}
       >
        Register
       </Button>

       <a href="/login">
        <Text
         style={{
          color: "blue",
          fontSize: "1rem",
          textAlign: "center",
         }}
        >
         Already Have an account
        </Text>
       </a>
      </Box>
     </Box>
    </Flex>
   </Box>
  </div>
 );
};

export default Register;
