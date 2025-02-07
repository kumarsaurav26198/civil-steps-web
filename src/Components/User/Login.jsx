import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
 Box,
 Button,
 Input,
 HStack,
 Text,
 useToast,
 Flex,
 Image,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";
import img1 from "./WhatsApp Image 2023-10-04 at 12.06.41 PM.jpeg";
import axiosInstance from "../../module2/axiosInstance";

const Login = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const toast = useToast();
 const { setIsAuth, setToken } = useContext(AuthContext);
 const [formData, setFormData] = useState({
  Mobileno: "",
  Password: "",
 });

 const handleInput = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
   ...prevFormData,
   [name]: value,
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axiosInstance.post("/api/user/login", formData);
   console.log("responselogin:", response);
   if (response.status === 200) {
    const { user, token } = response.data;

    if (!user || !token) {
     throw new Error("Invalid response structure");
    }

    const isAdmin = user.Email === "prishadhingrafbd2020@gmail.com";
    console.log("isAdmin:", isAdmin);

    if (isAdmin) {
     localStorage.setItem("admin", true); // Store as string if needed
    }

    setIsAuth(true);
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem(
     "userDetails",
     JSON.stringify({
      ...user,
      isAdmin: isAdmin,
     })
    );
    localStorage.setItem("user", user.Firstname);
    localStorage.setItem("isAuth", true);

    toast({
     title: "User",
     description: "Login successfully.",
     status: "success",
     duration: 3000,
     isClosable: true,
    });

    const redirectTo =
     location.state?.from || localStorage.getItem("redirectTo") || "/";
    localStorage.removeItem("redirectTo");
    navigate(redirectTo, { replace: true });
   } else {
    throw new Error("Invalid response status");
   }
  } catch (error) {
   console.error("Error during login:", error);

   if (error.response && error.response.status === 401) {
    toast({
     title: "Error",
     description: "Invalid credentials",
     status: "error",
     duration: 3000,
     isClosable: true,
    });
   } else if (error.response) {
    console.error("Error response data:", error.response.data);
    console.error("Error response status:", error.response.status);
    console.error("Error response headers:", error.response.headers);

    toast({
     title: "Error",
     description: `Error: ${error.response.status} - ${
      error.response.data.message ||
      "An error occurred. Please try again later."
     }`,
     status: "error",
     duration: 3000,
     isClosable: true,
    });
   } else {
    console.error("General error:", error.message);
    toast({
     title: "Error",
     description: "An error occurred. Please try again later.",
     status: "error",
     duration: 3000,
     isClosable: true,
    });
   }
  }
 };

 return (
  <div>
   <div style={{ width: "100vw" }}>
    <Box
     width={["83vw", "80vw", "55vw", "55vw"]}
     height={"60vh"}
     margin={"0px auto"}
     justifyContent={"center"}
     alignItems={"center"}
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

      <Box
       width={["100%", "100%", "60%", "60%"]}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
       flexDirection={"column"}
       marginTop={"6vh"}
      >
       <Text
        textAlign={"center"}
        style={{
         marginTop: "4vh",
         fontSize: "1.4rem",
         fontWeight: "600",
        }}
       >
        Log in to get Started
       </Text>

       <Box
        width={"100%"}
        margin={"auto"}
        marginTop={"4vh"}
        fontSize={"1.2rem"}
        border={"none"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
       >
        <HStack justifyContent={"space-between"} width={"70%"}>
         <Box style={{ width: "100%", fontWeight: "600" }}>
          <Input
           type="number"
           variant="unstyled"
           name="Mobileno"
           _focus={{ boxShadow: "none", outline: "none" }}
           placeholder="Mobile no"
           value={formData.Mobileno}
           width={"100%"}
           border={"none"}
           textDecoration={"none"}
           height={"5vh"}
           marginTop={"0.5vh"}
           fontSize={"1rem"}
           borderRadius={"none"}
           borderBottom={"2px solid black"}
           onChange={handleInput}
          />
         </Box>
        </HStack>

        <HStack
         justifyContent={"space-between"}
         marginTop={"5vh"}
         width={"70%"}
        >
         <Box style={{ width: "100%", fontWeight: "600" }}>
          <Input
           type="password"
           variant="unstyled"
           name="Password"
           _focus={{ boxShadow: "none", outline: "none" }}
           value={formData.Password}
           placeholder="Password"
           width={"100%"}
           border={"none"}
           textDecoration={"none"}
           height={"5vh"}
           marginTop={"0.5vh"}
           fontSize={"1rem"}
           borderRadius={"none"}
           borderBottom={"2px solid black"}
           onChange={handleInput}
          />
         </Box>
        </HStack>
        <Link to="/forget-password">Forget Password</Link>
        <Button
         marginTop={["9vh", "9vh", "2vh", "2vh"]}
         fontWeight={"400"}
         backgroundColor={"#FAB519"}
         padding={"5px 40px"}
         _hover={{
          color: "black",
          border: "2px solid #FAB519",
          backgroundColor: "white",
         }}
         marginBottom={"5vh"}
         onClick={handleSubmit}
        >
         Log in
        </Button>

        <Link to="/register">
         <Text>New User</Text>
        </Link>
       </Box>
      </Box>
     </Flex>
    </Box>
   </div>
  </div>
 );
};

export default Login;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Input,
//   Stack,
//   Icon,
//   HStack,
//   VStack,
//   Text,
//   Select,
//   useToast,
//   Flex,
//   Image,
// } from "@chakra-ui/react";
// import { FaUser, FaEnvelope } from "react-icons/fa";
// import img1 from "./WhatsApp Image 2023-10-04 at 12.06.41 PM.jpeg";
// import axios from "axios";
// import { AuthContext } from "../Context/AuthContextProvider";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const toast = useToast();
//   const { isAuth, setIsAuth, setToken } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     Mobileno: "",
//     Password: "",
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         // "https://api.civilsteps.com/api/user/login",
//         "https://api.civilsteps.com/api/user/login",
//         formData
//       );
//       // https://api.civilsteps.com/login
//       if (response.status === 200) {
//         const { user, token } = response.data;

//         // Check if user is admin based on your logic
//         const isAdmin = user.Email === "prishadhingrafbd2020@gmail.com"; // Example condition, adjust as per your logic
//         console.log("isAdmin:", isAdmin);
//         if (isAdmin) {
//           localStorage.setItem("admin", true); // Store as string if needed
//         }

//         setIsAuth(true);
//         setToken(token);

//         localStorage.setItem(
//           "userDetails",
//           JSON.stringify({
//             ...user,
//             isAdmin: isAdmin, // Set isAdmin as boolean here
//           })
//         );
//         localStorage.setItem("user", user.Firstname);
//         localStorage.setItem("isAuth", true);

//         toast({
//           title: "User",
//           description: "Login successfully.",
//           status: "success",
//           duration: 3000,
//           isClosable: true,
//         });

//         const redirectTo =
//           location.state?.from || localStorage.getItem("redirectTo") || "/";
//         localStorage.removeItem("redirectTo");
//         navigate(redirectTo, { replace: true });
//       } else {
//         throw new Error("Invalid response status");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         toast({
//           title: "Error",
//           description: "Invalid credentials",
//           status: "error",
//           duration: 3000,
//           isClosable: true,
//         });
//       } else {
//         console.error("Error during login:", error);
//         toast({
//           title: "Error",
//           description: "An error occurred. Please try again later.",
//           status: "error",
//           duration: 3000,
//           isClosable: true,
//         });
//       }
//     }
//   };

//   //  const navigate = useNavigate();
//   //  const location = useLocation();
//   //  const toast = useToast();
//   //  const { isAuth, setIsAuth, toggleAuth } = React.useContext(AuthContext);
//   //  const [formData, setFormData] = useState({
//   //   Mobileno: "",
//   //   Password: "",
//   //  });

//   //  const handleinput = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //    ...formData,
//   //    [name]: value,
//   //   });
//   //  };

//   //  const handlesubmit = async () => {
//   //   try {
//   //    const response = await axios.post(
//   //     // "https://api.civilsteps.com/api/user/login",
//   //     "https://api.civilsteps.com/api/user/login",
//   //     formData
//   //    );
//   //    if (response.data.user.Email === "info@civisteps.com") {
//   //     localStorage.setItem("ADMIN_STATUS", true);
//   //     const comingFrom = location.state?.from || "/";
//   //     console.log("comingFrom:", comingFrom);
//   //     navigate(comingFrom, { replace: true });
//   //    } else if (
//   //     response.data.user.Email !== "info@civisteps.com" &&
//   //     response.status === 200
//   //    ) {
//   //     console.log("userDetails:", response.data.user);

//   //     setIsAuth(true);

//   //     const userDetails = JSON.stringify(response.data.user);
//   //     const user = JSON.stringify(response.data.user.Firstname);
//   //     const mobileNum = JSON.stringify(response.data.user.Mobileno);
//   //     localStorage.setItem("userDetails", userDetails);
//   //     localStorage.setItem("user", user);
//   //     localStorage.setItem("isAuth", true);
//   //     console.log("isAuth", isAuth);
//   //     console.log("responce", user);

//   //     toast({
//   //      title: "User",
//   //      description: "Login successfully.",
//   //      status: "success",
//   //      duration: 3000,
//   //      isClosable: true,
//   //     });
//   //     const redirectTo = localStorage.getItem("redirectTo");

//   //     if (redirectTo) {
//   //      localStorage.removeItem("redirectTo");
//   //      navigate(redirectTo);
//   //     } else {
//   //      navigate("/");
//   //     }
//   //     // const comingFrom = location.pathname;
//   //     // console.log("comingFrom:", comingFrom);
//   //     // navigate(comingFrom, { replace: true });
//   //    }
//   //    // navigate("/test");
//   //   } catch (error) {
//   //    if (error.response && error.response.status === 401) {
//   //     alert("Invalid credentials");
//   //     window.location.reload();
//   //    } else {
//   //     console.error("Error adding data", error);
//   //    }
//   //   }
//   //  };

//   return (
//     <div>
//       <div style={{ width: "100vw" }}>
//         <Box
//           width={["83vw", "80vw", "55vw", "55vw"]}
//           height={"60vh"}
//           margin={"0px auto"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           border={"2px solid #FAB415"}
//           boxShadow="10px 10px 10px 10px rgba(0,0,0,0.2)"
//           marginBottom={"15vh"}
//         >
//           <Flex width={"100%"} height={"100%"}>
//             <Box
//               width={"40%"}
//               height={"100%"}
//               display={["none", "none", "block", "block"]}
//             >
//               <Image src={img1} width={"100%"} height={"100%"}></Image>
//             </Box>

//             <Box
//               width={["100%", "100%", "60%", "60%"]}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//               flexDirection={"column"}
//               marginTop={"6vh"}
//             >
//               <Text
//                 textAlign={"center"}
//                 style={{
//                   marginTop: "4vh",
//                   fontSize: "1.4rem",
//                   fontWeight: "600",
//                 }}
//               >
//                 Log in to get Started
//               </Text>

//               <Box
//                 width={"100%"}
//                 margin={"auto"}
//                 marginTop={"4vh"}
//                 fontSize={"1.2rem"}
//                 border={"none"}
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 flexDirection={"column"}
//               >
//                 <HStack justifyContent={"space-between"} width={"70%"}>
//                   <Box style={{ width: "100%", fontWeight: "600" }}>
//                     <Input
//                       type="number"
//                       variant="unstyled"
//                       name="Mobileno"
//                       _focus={{ boxShadow: "none", outline: "none" }}
//                       placeholder="Mobile no"
//                       value={formData.Mobileno}
//                       width={"100%"}
//                       border={"none"}
//                       textDecoration={"none"}
//                       height={"5vh"}
//                       marginTop={"0.5vh"}
//                       fontSize={"1rem"}
//                       borderRadius={"none"}
//                       borderBottom={"2px solid black"}
//                       onChange={handleInput}
//                     />
//                   </Box>
//                 </HStack>

//                 <HStack
//                   justifyContent={"space-between"}
//                   marginTop={"5vh"}
//                   width={"70%"}
//                 >
//                   <Box style={{ width: "100%", fontWeight: "600" }}>
//                     <Input
//                       type="password"
//                       variant="unstyled"
//                       name="Password"
//                       _focus={{ boxShadow: "none", outline: "none" }}
//                       value={formData.Password}
//                       placeholder="Password"
//                       width={"100%"}
//                       border={"none"}
//                       textDecoration={"none"}
//                       height={"5vh"}
//                       marginTop={"0.5vh"}
//                       fontSize={"1rem"}
//                       borderRadius={"none"}
//                       borderBottom={"2px solid black"}
//                       onChange={handleInput}
//                     />
//                   </Box>
//                 </HStack>
//                 <Link to="/forget-password">Forget Password</Link>
//                 <Button
//                   marginTop={["9vh", "9vh", "2vh", "2vh"]}
//                   fontWeight={"400"}
//                   backgroundColor={"#FAB519"}
//                   padding={"5px 40px"}
//                   _hover={{
//                     color: "black",
//                     border: "2px solid #FAB519",
//                     backgroundColor: "white",
//                   }}
//                   marginBottom={"5vh"}
//                   onClick={handleSubmit}
//                 >
//                   Log in
//                 </Button>

//                 <Link to="/register">
//                   <Text
//                   //   style={{
//                   //    color: "blue",
//                   //    fontSize: "1.25rem",
//                   //    textAlign: "center",
//                   //   }}
//                   >
//                     New User
//                   </Text>
//                 </Link>
//               </Box>
//             </Box>
//           </Flex>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Login;
