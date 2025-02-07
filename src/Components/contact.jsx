import React from "react";
import { Box, Text, VStack, FormControl, Input, Textarea, Button } from "@chakra-ui/react";
import img19 from "./call-us.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Box
        marginTop={"7vh"}
        width={"100vw"}
        minHeight={"95vh"} // Using minHeight instead of fixed height for flexibility
        boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.7)"}
        display="flex" // Flexbox for better layout control
        flexDirection={["column", "row"]} // Responsive layout for different screen sizes
        alignItems="center"
        justifyContent="center"
        overflow="hidden" // Prevent content overflow
      >
        <div style={{ flex: 1 }}>
          <img
            style={{
              width: "100%", // Ensure the image covers the full width
              height: "50%", // Allow the image to cover the available height
              // objectFit: "cover", // Prevent stretching of the image
            }}
            src={img19}
            alt="Contact Us"
          />
        </div>

        <VStack spacing={4} alignItems="flex-start" padding={["2rem", "4rem"]}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "#000000" }}>CONTACT US</span>
          </h2>

          <Text
            style={{
              color: "#FAB519",
              fontSize: "3.5rem",
              marginTop: "1vh",
              fontWeight: "bold",
            }}
          >
            Request a Callback
          </Text>

          <FormControl isRequired width={"100%"} marginTop={"2vh"}>
            <Input placeholder="Full name" />
          </FormControl>

          <FormControl isRequired width={"100%"} marginTop={"2vh"}>
            <Input placeholder="Email" />
          </FormControl>

          <FormControl isRequired width={"100%"} marginTop={"2vh"}>
            <Input placeholder="Mobile" />
          </FormControl>

          <FormControl isRequired width={"100%"} marginTop={"2vh"}>
            <Textarea placeholder="Enter description" />
          </FormControl>

          <Button
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
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </div>
  );
};

export default Contact;
