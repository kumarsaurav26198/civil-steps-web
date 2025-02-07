import React from "react";
import { Box, background, position } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
 HStack,
 Flex,
 Icon,
 Divider,
 Button,
 Heading,
 VStack,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import backgroundImage from "../Rectangle 2.png";
import img2 from "../Rectangle 15.png";
import img3 from "../Group 20.png";
import img4 from "../Group 19.png";
import img5 from "../Rectangle 16.png";
import { MdPerson } from "react-icons/md";
import img6 from "../Ellipse 9.png";
import img7 from "../Ellipse 10.png";
import img8 from "../Ellipse 10 (1).png";
import img9 from "../Ellipse 10 (2).png";
import img10 from "../Rectangle 43.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBook } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
 return (
  <div>
   <Box
    className="custom-background"
    minwidth={"400px"}
    minheight="100vh"
    mt={{ base: 0, md: -60, lg: -40 }}
    mb={{ base: 4, md: 8, lg: 40 }}
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
    alignItems="center"
    p={4}
   >
    <div className="overlay"></div>

    <Text
     fontSize={{ base: "2rem", md: "3rem", lg: "4.2rem" }}
     color="white"
     zIndex="1"
     marginBottom={8}
     textAlign="center"
    >
     "Empowering Minds, Shaping Leaders:"
     <br />
     Your Journey to Excellence Begins Here.
    </Text>

    <HStack spacing={4}>
     <Button
      style={{
       background: "#FAB519",
       width: "11vw",
       height: "5vh",
       padding: "0.9vw",
       borderRadius: "14px",
       fontSize: "1.25rem",
       cursor: "pointer",
      }}
     >
      <a href="/contact" style={{ textDecoration: "none", color: "black" }}>
       Contact us
      </a>
     </Button>

     <Button
      style={{
       background: "white",
       width: "11vw",
       padding: "0.9vw",
       height: "5vh",
       borderRadius: "14px",
       fontSize: "1.25rem",
       cursor: "pointer",
      }}
     >
      <a href="/about" style={{ textDecoration: "none", color: "black" }}>
       Learn more
      </a>
     </Button>
    </HStack>
   </Box>

   <Box
    className="container1"
    style={{
     width: "100vw",
     height: "66vh",
     display: "flex",
     justifyContent: "center",
     flexDirection: "column",
     alignItems: "center",
    }}
   >
    <Heading
     as="h2"
     style={{ fontSize: "5rem" }}
     size="xl"
     css={{ textDecoration: "underline" }}
    >
     <span>Choose </span>
     <span style={{ color: "#FAB519" }}>MCQ </span>
     <span>By</span>
    </Heading>
    <HStack>
     <Box
      w={"30vw"}
      h={"40vh"}
      background={"white"}
      mt={"100"}
      mr={"80"}
      border={"1px solid black"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"80%"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container2" width={"65%"} height={"100%"}></Box>
      </Box>

      <Box
       style={{ fontSize: "2.375rem" }}
       width={"100%"}
       height={"20%"}
       border={"1px solid black"}
       fontSize={"1.25rem"}
       background={"#FAB519"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
       cursor={"pointer"}
      >
       <a href="/test" style={{ textDecoration: "none", color: "black" }}>
        Subject
       </a>
      </Box>
     </Box>

     <Box
      w={"30vw"}
      h={"40vh"}
      background={"white"}
      mt={"100"}
      mr={"80"}
      border={"1px solid black"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"80%"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container3" width={"65%"} height={"100%"}></Box>
      </Box>

      <Box
       style={{ fontSize: "2.375rem" }}
       width={"100%"}
       height={"20%"}
       border={"1px solid black"}
       fontSize={"1.25rem"}
       background={"#FAB519"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <a href="/test" style={{ textDecoration: "none", color: "black" }}>
        Year
       </a>
      </Box>
     </Box>
    </HStack>
   </Box>

   <Box
    className="container4"
    style={{
     width: "100vw",
     height: "55vh",
     display: "flex",
     justifyContent: "center",
     flexDirection: "column",
     alignItems: "center",
     marginTop: "6vh",
    }}
   >
    <HStack style={{ width: "100vw", height: "100%" }}>
     <div style={{ marginLeft: "15%" }}>
      <img src={img2} style={{ height: "40vh", width: "30vw" }}></img>
     </div>

     <Box style={{ marginLeft: "6%", width: "28%" }}>
      <h2
       style={{
        fontSize: "4rem",
        marginBottom: "10vh",
        textDecoration: "underline",
       }}
      >
       Who
       <span style={{ color: "#FAB519" }}> We </span>
       Are
      </h2>

      <Box style={{ width: "30vw", height: "20vh" }}>
       We are your dedicated partner on your journey to conquer UPSC. Our
       platform provides comprehensive resources, expert guidance, and a
       supportive community to help you excel in your preparation. With a
       commitment to your success, we empower you to achieve your aspirations
       and realize your dream of becoming a civil servant.{" "}
      </Box>

      <Box>
       <img
        src={img3}
        style={{ position: "absolute", top: "180vh", left: "83vw" }}
       ></img>
      </Box>

      <Box>
       <img
        src={img4}
        style={{ position: "absolute", top: "220vh", left: "77vw" }}
       ></img>
      </Box>
     </Box>
    </HStack>
   </Box>

   <Box
    className="container5"
    style={{
     width: "100vw",
     height: "57vh",
     display: "flex",
     // justifyContent:'center',
     flexDirection: "column",
     alignItems: "center",
     marginTop: "2vh",
    }}
   >
    <h2 style={{ fontSize: "4rem", textDecoration: "underline" }}>
     Popular
     <span style={{ color: "#FAB519" }}> Courses </span>{" "}
    </h2>
    <HStack style={{ width: "100%", height: "100%", marginTop: "-10vh" }}>
     <Box
      w={"17vw"}
      h={"32vh"}
      background={"white"}
      mt={"100"}
      mr={"60"}
      ml={"200"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"80%"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container6" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"20%"}
       fontSize={"1.25rem"}
       background={"#2C2B29"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Flex p={4}>
        <Box color={"#FFB606"}>Maths</Box>
        <Box color={"#FFB606"} ml={"9vw"}>
         Free
        </Box>
       </Flex>
      </Box>
     </Box>
     <Box
      w={"17vw"}
      h={"32vh"}
      background={"white"}
      mt={"100"}
      mr={"60"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"80%"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container7" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"20%"}
       fontSize={"1.25rem"}
       background={"#2C2B29"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Flex p={4}>
        <Box color={"#FFB606"}>English</Box>
        <Box color={"#FFB606"} ml={"9vw"}>
         Free
        </Box>
       </Flex>
      </Box>
     </Box>

     <Box
      w={"17vw"}
      h={"32vh"}
      background={"white"}
      mt={"100"}
      mr={"60"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"80%"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container8" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"20%"}
       fontSize={"1.25rem"}
       background={"#2C2B29"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Flex p={4}>
        <Box color={"#FFB606"}>History</Box>
        <Box color={"#FFB606"} ml={"9vw"}>
         Free
        </Box>
       </Flex>
      </Box>
     </Box>

     <Box
      w={"17vw"}
      h={"32vh"}
      background={"white"}
      mt={"100"}
      mr={"60"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"80%"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container9" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"20%"}
       fontSize={"1.25rem"}
       background={"#2C2B29"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Flex p={4}>
        <Box color={"#FFB606"}>Politics</Box>
        <Box color={"#FFB606"} ml={"9vw"}>
         Free
        </Box>
       </Flex>
      </Box>
     </Box>
    </HStack>
   </Box>

   <Box
    className="container10"
    width={"100vw"}
    height={"65vh"}
    display="flex" // Use flex layout for the box
    flexDirection="column" // Stack the children vertically
    alignItems={"center"} // Align content to the bottom
    p={4}
   >
    <div class="overlay"></div>

    <h2
     style={{
      fontSize: "4rem",
      zIndex: "1",
      marginTop: "4vh",
      textDecoration: "underline",
      color: "white",
     }}
    >
     <span style={{ color: "#FFFFFF" }}> Number says</span>
     <span style={{ color: "#FAB519" }}> It All </span>
    </h2>
    <HStack>
     <Box
      w={"23vw"}
      h={"37vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"30"}
      ml={"60"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
       }}
      >
       <div className="user-icon">
        <FaUser className="icon" />
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <span style={{ fontSize: "2.5rem" }}>Total No Of </span>
        <br />
        <span style={{ fontSize: "2.5rem" }}>Registered Users</span>
       </div>

       <div style={{ fontSize: "5rem", marginTop: "2vh" }}>
        <span>400</span>
        <span style={{ color: "#FAB519" }}>+</span>
       </div>
      </Box>
     </Box>

     <Box
      w={"23vw"}
      h={"37vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"30"}
      ml={"60"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
       }}
      >
       <div className="user-icon">
        <FaUser className="icon" />
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <span style={{ fontSize: "2.5rem" }}>Total No Of </span>
        <br />
        <span style={{ fontSize: "2.5rem" }}>Tests</span>
       </div>

       <div style={{ fontSize: "5rem", marginTop: "2vh" }}>
        <span>1100</span>
        <span style={{ color: "#FAB519" }}>+</span>
       </div>
      </Box>
     </Box>

     <Box
      w={"23vw"}
      h={"37vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"30"}
      ml={"60"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
       }}
      >
       <div className="user-icon">
        <FaUser className="icon" />
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <span style={{ fontSize: "2.5rem" }}>Positive </span>
        <br />
        <span style={{ fontSize: "2.5rem" }}>Reviews</span>
       </div>

       <div style={{ fontSize: "5rem", marginTop: "2vh" }}>
        <span>500</span>
        <span style={{ color: "#FAB519" }}>+</span>
       </div>
      </Box>
     </Box>
    </HStack>
   </Box>

   <Box
    className="container11"
    style={{
     width: "100vw",
     height: "90vh",
     display: "flex",
     // justifyContent:'center',
     flexDirection: "column",
     alignItems: "center",
     marginTop: "2vh",
    }}
   >
    <h2
     style={{ fontSize: "4rem", textDecoration: "underline", marginTop: "4vw" }}
    >
     Latest From
     <span style={{ color: "#FAB519" }}> The Blogs </span>{" "}
    </h2>
    <HStack style={{ width: "100%", height: "100%" }}>
     <Box
      w={"20vw"}
      h={"60vh"}
      background={"white"}
      mt={"100"}
      mr={"10"}
      ml={"170"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"42vh"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container12" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"18vh"}
       fontSize={"1.25rem"}
       display={"flex"}
       flexDirection={"column"}
       position={"relative"}
      >
       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", left: "4px" }}
       >
        <Text backgroundColor={"#FAB519"} fontSize={"1.5rem"}>
         20 DEC,2022
        </Text>
       </Box>

       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", right: "-10px" }}
       >
        <Flex>
         <div className="yellow-bg">
          <FaUser className="black-icon" />
         </div>
         <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
          By admin
         </Text>
        </Flex>
       </Box>

       <Box className="blog1">Sed ut perspiciatis unde omnis iste natus</Box>

       <Box className="blog2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
       </Box>

       <Box className="blog3">
        <div className="arrow-icon">
         <FiArrowRight className="black-icon1" />
        </div>
        Read More
       </Box>
      </Box>
     </Box>
     <Box
      w={"20vw"}
      h={"60vh"}
      background={"white"}
      mt={"100"}
      mr={"10"}
      ml={"10"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"42vh"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container13" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"18vh"}
       fontSize={"1.25rem"}
       display={"flex"}
       flexDirection={"column"}
       position={"relative"}
      >
       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", left: "4px" }}
       >
        <Text backgroundColor={"#FAB519"} fontSize={"1.5rem"}>
         20 DEC,2022
        </Text>
       </Box>

       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", right: "-10px" }}
       >
        <Flex>
         <div className="yellow-bg">
          <FaUser className="black-icon" />
         </div>
         <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
          By admin
         </Text>
        </Flex>
       </Box>

       <Box className="blog1">Sed ut perspiciatis unde omnis iste natus</Box>

       <Box className="blog2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
       </Box>

       <Box className="blog3">
        <div className="arrow-icon">
         <FiArrowRight className="black-icon1" />
        </div>
        Read More
       </Box>
      </Box>
     </Box>

     <Box
      w={"20vw"}
      h={"60vh"}
      background={"white"}
      mt={"100"}
      mr={"10"}
      ml={"10"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"42vh"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container14" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"18vh"}
       fontSize={"1.25rem"}
       display={"flex"}
       flexDirection={"column"}
       position={"relative"}
      >
       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", left: "4px" }}
       >
        <Text backgroundColor={"#FAB519"} fontSize={"1.5rem"}>
         20 DEC,2022
        </Text>
       </Box>

       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", right: "-10px" }}
       >
        <Flex>
         <div className="yellow-bg">
          <FaUser className="black-icon" />
         </div>
         <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
          By admin
         </Text>
        </Flex>
       </Box>

       <Box className="blog1">Sed ut perspiciatis unde omnis iste natus</Box>

       <Box className="blog2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
       </Box>

       <Box className="blog3">
        <div className="arrow-icon">
         <FiArrowRight className="black-icon1" />
        </div>
        Read More
       </Box>
      </Box>
     </Box>

     <Box
      w={"20vw"}
      h={"60vh"}
      background={"white"}
      mt={"100"}
      mr={"10"}
      ml={"10"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
     >
      <Box
       width={"100%"}
       height={"42vh"}
       border={"1px solid black"}
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
      >
       <Box className="container15" width={"100%"} height={"100%"}></Box>
      </Box>

      <Box
       width={"100%"}
       height={"18vh"}
       fontSize={"1.25rem"}
       display={"flex"}
       flexDirection={"column"}
       position={"relative"}
      >
       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", left: "4px" }}
       >
        <Text backgroundColor={"#FAB519"} fontSize={"1.5rem"}>
         20 DEC,2022
        </Text>
       </Box>

       <Box
        width={"8vw"}
        style={{ position: "absolute", top: "4px", right: "-10px" }}
       >
        <Flex>
         <div className="yellow-bg">
          <FaUser className="black-icon" />
         </div>
         <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
          By admin
         </Text>
        </Flex>
       </Box>

       <Box className="blog1">Sed ut perspiciatis unde omnis iste natus</Box>

       <Box className="blog2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
       </Box>

       <Box className="blog3">
        <div className="arrow-icon">
         <FiArrowRight className="black-icon1" />
        </div>
        Read More
       </Box>
      </Box>
     </Box>
    </HStack>
   </Box>

   <Box
    className="container16"
    width={"100vw"}
    height={"85vh"}
    display="flex" // Use flex layout for the box
    flexDirection="column" // Stack the children vertically
    alignItems={"center"} // Align content to the bottom
    p={4}
   >
    <div class="overlay"></div>

    <h2
     style={{
      fontSize: "4rem",
      zIndex: "1",
      marginTop: "4vh",
      textDecoration: "underline",
      color: "white",
     }}
    >
     <span style={{ color: "#FFFFFF" }}> What Our </span>
     <span style={{ color: "#FAB519" }}> Student Says </span>
    </h2>
    <HStack>
     <Box
      w={"20vw"}
      h={"45vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"10"}
      ml={"20"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      borderRadius={"25"}
     >
      <Box
       style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
       }}
      >
       <div style={{ position: "absolute", top: "-85px" }}>
        <img src={img6}></img>
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <Text
         style={{ fontSize: "2.375rem", marginTop: "2vw", fontWeight: "600" }}
        >
         Noah King
        </Text>
        <Text
         style={{
          color: "rgba(0,0,0,0.3)",
          fontSize: "1.635rem",
          marginTop: "0.5vh",
         }}
        >
         Student
        </Text>

        <div class="five-star-rating">
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
        </div>
       </div>
       <div style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}>
        <Text>
         "Highly recommended platform for focused UPSC preparation. Insightful
         resources, effective strategies."
        </Text>
       </div>
      </Box>
     </Box>

     <Box
      w={"20vw"}
      h={"45vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"10"}
      ml={"20"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      borderRadius={"25"}
     >
      <Box
       style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
       }}
      >
       <div style={{ position: "absolute", top: "-85px" }}>
        <img src={img7}></img>
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <Text
         style={{ fontSize: "2.375rem", marginTop: "2vw", fontWeight: "600" }}
        >
         Noah King
        </Text>
        <Text
         style={{
          color: "rgba(0,0,0,0.3)",
          fontSize: "1.635rem",
          marginTop: "0.5vh",
         }}
        >
         Student
        </Text>

        <div class="five-star-rating">
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
        </div>
       </div>
       <div style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}>
        <Text>
         "Invaluable mock tests, precise content – UPSC victory owes much to
         this platform."
        </Text>
       </div>
      </Box>
     </Box>

     <Box
      w={"20vw"}
      h={"45vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"10"}
      ml={"20"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      borderRadius={"25"}
     >
      <Box
       style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
       }}
      >
       <div style={{ position: "absolute", top: "-85px" }}>
        <img src={img8}></img>
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <Text
         style={{ fontSize: "2.375rem", marginTop: "2vw", fontWeight: "600" }}
        >
         Noah King
        </Text>
        <Text
         style={{
          color: "rgba(0,0,0,0.3)",
          fontSize: "1.635rem",
          marginTop: "0.5vh",
         }}
        >
         Student
        </Text>

        <div class="five-star-rating">
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
        </div>
       </div>
       <div style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}>
        <Text>
         "Brilliant guidance, streamlined my UPSC journey. Grateful for the
         results."
        </Text>
       </div>
      </Box>
     </Box>

     <Box
      w={"20vw"}
      h={"45vh"}
      background={"white"}
      mt={"100"}
      zIndex={"1"}
      mr={"10"}
      ml={"20"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      borderRadius={"25"}
     >
      <Box
       style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
       }}
      >
       <div style={{ position: "absolute", top: "-85px" }}>
        <img src={img6}></img>
       </div>

       <div style={{ marginTop: "6vh", textAlign: "center" }}>
        <Text
         style={{ fontSize: "2.375rem", marginTop: "2vw", fontWeight: "600" }}
        >
         Noah King
        </Text>
        <Text
         style={{
          color: "rgba(0,0,0,0.3)",
          fontSize: "1.635rem",
          marginTop: "0.5vh",
         }}
        >
         Student
        </Text>

        <div class="five-star-rating">
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
         <span class="star yellow-star"></span>
        </div>
       </div>
       <div style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}>
        <Text>
         "Exceptional content and guidance; UPSC success made achievable."
        </Text>
       </div>
      </Box>
     </Box>
    </HStack>
   </Box>

   <Box
    marginTop={"7vh"}
    width={"100vw"}
    height={"95vh"}
    boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.7)"}
   >
    <Flex>
     <div>
      <img style={{ height: "95vh" }} src={img10}></img>
     </div>

     <VStack style={{ margin: "0px auto" }}>
      <h2 style={{ fontSize: "4rem" }}>
       <span style={{ color: "#FAB519" }}>Get </span>
       <span style={{ color: "#000000" }}>In Touch</span>
      </h2>

      <Text
       style={{
        fontSize: "2.375rem",
        marginTop: "2vh",
        color: "rgba(0,0,0,0.5)",
       }}
      >
       Let's discuss your project right now
      </Text>

      <div class="search-bars">
       <input
        type="text"
        className="search-bar"
        placeholder="Full Name"
       ></input>
       <input type="text" className="search-bar" placeholder="Email"></input>
       <input
        type="text"
        className="search-bar"
        placeholder="Mobile Number"
       ></input>
       <input type="text" className="search-bar1" placeholder="Message"></input>
      </div>

      <Button
       style={{
        backgroundColor: "#FAB519",
        outline: "none",
        fontSize: "3.5rem",
        border: "1px solid #ccc",
        padding: "5px 10px",
        borderRadius: "12px",
        marginLeft: "-14vw",
       }}
      >
       Contact Us
      </Button>
     </VStack>
    </Flex>
   </Box>

   <Box className="fback"></Box>
  </div>
 );
};

export default Home;
