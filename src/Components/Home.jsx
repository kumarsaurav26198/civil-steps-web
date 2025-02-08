import React, { useState } from "react";
import { Box, Textarea, background, position } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
  Stack,
  Image,
  useToast,
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../services/apiEndPoints";

const Home = () => {
  const toast = useToast();
  const [feedbackData, setFeedbackData] = useState({
    fullname: "Sajan Kumar",
    email: "kumarsaurav26198@gmail.com",
    mobile: "916242422155",
    description: "Hey There!",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFeedbackForm = async (e) => {
    e.preventDefault();
    console.log("feedbackData:", feedbackData);
    try {
      const responce = await axios.post(
        `${baseURL}/course-enquiry`,
        feedbackData
      );
      if (responce.status === 201) {
        toast({
          title: `Thank you for your submission!`,
          status: "success",
          isClosable: true,
        });
        setFeedbackData({
          fullname: "",
          email: "",
          mobile: "",
          description: "",
        });
      }

      console.log("responce:", responce);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <Box
        className={"custom-background"}
        backgroundColor={["#FAB519", "none", "none", "none"]}
        width={"100%"}
        height={["69vh", "69vh", "88vh", "88vh"]}
        mb={"10"}
        display="flex"
        flexDirection="column"
        justifyContent={["center", "center", "flex-end", "flex-end"]}
        alignItems={"center"}
        p={4}
      >
        <Text
          fontSize={["2.7rem", "3.2rem"]}
          color={"white"}
          zIndex={"1"}
          marginBottom={"18"}
          display={["none", "none", "block", "block"]}
        >
          Empowering Minds, Shaping Leaders:
          <br />
          Your Journey to Excellence Begins Here.
        </Text>

        <Text
          fontSize={["2.7rem", "3.2rem"]}
          fontWeight={["bold", "bold", "none", "none"]}
          color={"white"}
          zIndex={"1"}
          marginBottom={"18"}
          display={["block", "block", "none", "none"]}
        >
          Empower Dreams ,
          <br />
          Thrive Tomorrow
        </Text>

        <Text
          fontSize={["1rem", "3.2rem"]}
          color={"black"}
          zIndex={"1"}
          marginBottom={"18"}
          display={["block", "block", "none", "none"]}
        >
          Elevate your learning journey with our comprehensive UPSC test series.
          Experience excellence in preparation, conquer the challenges of the
          civil services exams.
        </Text>

        <HStack
          justifyContent={"center"}
          display={["none", "none", "block", "block"]}
        >
          <Button
            fontWeight={"400"}
            backgroundColor={"#FAB519"}
            padding={"5px 40px"}
            _hover={{
              color: "black",
              border: "2px solid #FAB519",
              backgroundColor: "white",
            }}
            marginBottom={"5vh"}
          >
            Contact us
          </Button>

          <Button
            marginLeft={"11vw"}
            fontWeight={"400"}
            border={"2px solid #FAB519"}
            padding={"5px 40px"}
            marginBottom={"5vh"}
            _hover={{ color: "black", background: "#FAB519" }}
          >
            learn more
          </Button>
        </HStack>

        <HStack
          justifyContent={"space-between"}
          width={"100vw"}
          marginTop={"5vh"}
          display={["block", "block", "none", "none"]}
        >
          <Button
            fontWeight={"400"}
            backgroundColor={"white"}
            padding={"5px 40px"}
            _hover={{
              color: "black",
              border: "2px solid #FAB519",
              backgroundColor: "white",
            }}
            marginBottom={"5vh"}
            marginLeft={"2vw"}
          >
            {" "}
            Contact us
          </Button>

          <Button
            marginLeft={"10vw"}
            fontWeight={"400"}
            backgroundColor={"white"}
            padding={"5px 40px"}
            _hover={{
              color: "black",
              border: "2px solid #FAB519",
              backgroundColor: "white",
            }}
            marginBottom={"5vh"}
          >
            learn more
          </Button>
        </HStack>
      </Box>

      <Box
        className="container1"
        width={"100%"}
        height={["160vh", "150vh", "66vh", "66vh"]}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading
          fontSize={["1.9rem", "2rem", "5rem", "5rem"]}
          css={{ textDecoration: "underline" }}
        >
          <span>Choose </span>
          <span style={{ color: "#FAB519" }}>MCQ </span>
          <span>By</span>
        </Heading>
        <Stack
          direction={["column", "column", "row", "row"]}
          width={"83vw"}
          height={"100%"}
          justifyContent={"space-around"}
          margin={"0px auto"}
        >
          <Box
            w={["80vw", "25vw"]}
            h={"40vh"}
            background={"white"}
            mt={"30"}
            border={"1px solid black"}
            borderRadius={"15px"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
          >
            <Box
              borderTopRadius={"15px"}
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
              width={"100%"}
              height={"20%"}
              border={"1px solid black"}
              fontSize={"2.375rem"}
              background={"#FAB519"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              borderBottomRadius={"15px"}
            >
              <Link
                to={`/category/subject`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Subject
              </Link>
            </Box>
          </Box>

          <Box
            w={["80vw", "25vw"]}
            h={"40vh"}
            background={"white"}
            mt={"30"}
            border={"1px solid black"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            borderRadius={"15px"}
          >
            <Box
              width={"100%"}
              height={"80%"}
              border={"1px solid black"}
              borderTopRadius={"15px"}
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
              borderBottomRadius={"15px"}
            >
              {/* <a
                href="/test1"
                style={{ textDecoration: "none", color: "black" }}
              >
                Year
              </a> */}
              <Link
                to={`/category/year`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Year
              </Link>
            </Box>
          </Box>

          <Box
            w={["80vw", "25vw"]}
            h={"40vh"}
            background={"white"}
            mt={"30"}
            border={"1px solid black"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            borderRadius={"15px"}
          >
            <Box
              width={"100%"}
              height={"80%"}
              border={"1px solid black"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderTopRadius={"15px"}
            >
              <Box
                borderTopRadius={"15px "}
                className="container30"
                width={"100%"}
                height={"100%"}
              ></Box>
            </Box>

            <Box
              borderBottomRadius={"15px"}
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
              {/* <a
                href="/test2"
                style={{ textDecoration: "none", color: "black" }}
              >
                Topic
              </a> */}
              <Link
                to={`/category/topic`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Topic
              </Link>
            </Box>
          </Box>
          <Box
            w={["80vw", "25vw"]}
            h={"40vh"}
            background={"white"}
            mt={"30"}
            border={"1px solid black"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            borderRadius={"15px"}
          >
            <Box
              width={"100%"}
              height={"80%"}
              border={"1px solid black"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderTopRadius={"15px"}
            >
              <Box
                borderTopRadius={"15px "}
                // className="container30"
                bg={
                  "url(https://static.vecteezy.com/system/resources/previews/015/156/409/non_2x/online-pc-test-icon-outline-paper-check-vector.jpg)"
                }
                bgPosition={"center"}
                bgRepeat={"no-repeat"}
                objectFit={"cover"}
                width={"100%"}
                height={"100%"}
              ></Box>
            </Box>

            <Box
              borderBottomRadius={"15px"}
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
              <Link
                to={`/category/paid-test`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Start Real test
              </Link>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box
        className="container4"
        style={{
          width: "100%",
          height: "55vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "6vh",
        }}
      >
        <HStack style={{ width: "80vw", height: "100%" }} margin={"0px auto"}>
          <Box width={"45%"} display={["none", "none", "block", "block"]}>
            <Image src={img2} width={"100%"}></Image>
          </Box>

          <Box
            style={{ marginLeft: "6%" }}
            width={["70%", "70%", "28%", "30%"]}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "10vh",
                textDecoration: "underline",
              }}
            >
              Who
              <span style={{ color: "#FAB519" }}> We </span>
              Are
            </h2>

            <Box
              style={{ height: "20vh" }}
              width={["80vw", "80vw", "30vw", "30vw"]}
            >
              We are your dedicated partner on your journey to conquer UPSC. Our
              platform provides comprehensive resources, expert guidance, and a
              supportive community to help you excel in your preparation. With a
              commitment to your success, we empower you to achieve your
              aspirations and realize your dream of becoming a civil servant.{" "}
            </Box>

            <Box></Box>
          </Box>
        </HStack>
      </Box>

      <form onSubmit={handleFeedbackForm}>
        <Box
          // border={"1px solid red"}
          marginTop={"7vh"}
          width={"100%"}
          height={"80vh"}
          boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.7)"}
        >
          <Flex width={"100%"} height={"100%"} justifyContent={"space-around"}>
            <Box
              height={"100%"}
              width={"40%"}
              display={["none", "none", "block", "block"]}
            >
              <Image src={img10} width={"100%"} height={"100%"}></Image>
            </Box>

            <VStack
              width={["80%", "80%", "45%", "45%"]}
              height={"100%"}
              style={{ margin: "0px auto" }}
            >
              <h2 style={{ fontSize: "2rem" }}>
                <span style={{ color: "#FAB519" }}> Feedback</span>
              </h2>

              <Text
                style={{
                  fontSize: "1.5rem",
                  marginTop: "2vh",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                Get in touch with us to learn more about our services.
              </Text>

              {/* <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Input
                  name="fullname"
                  value={feedbackData.fullname}
                  onChange={handleChange}
                  placeholder="Full name"
                />
              </FormControl>

              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Input
                  name="email"
                  value={feedbackData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </FormControl>

              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Input
                  name="mobile"
                  value={feedbackData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                />
              </FormControl>
             
              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Textarea
                  name="description"
                  value={feedbackData.description}
                  onChange={handleChange}
                  placeholder="enter description"
                ></Textarea>
              </FormControl> */}
              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Input
                  name="fullname"
                  value={feedbackData.fullname}
                  onChange={handleChange}
                  placeholder="Full name"
                />
              </FormControl>

              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Input
                  name="email"
                  value={feedbackData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </FormControl>

              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Input
                  name="mobile"
                  value={feedbackData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                />
              </FormControl>

              <FormControl isRequired width={"100%"} marginTop={"2vh"}>
                <Textarea
                  name="description"
                  value={feedbackData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                ></Textarea>
              </FormControl>
              <Input
                type="submit"
                marginTop={"2vh"}
                fontWeight={"400"}
                backgroundColor={"#FAB519"}
                padding={"5px 40px"}
                _hover={{
                  color: "black",
                  border: "2px solid #FAB519",
                  backgroundColor: "white",
                }}
                marginBottom={"5vh"}
              />
            </VStack>
          </Flex>
        </Box>
      </form>
    </div>
  );
};

export default Home;
