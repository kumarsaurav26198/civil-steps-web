import React from "react";
import { useLocation } from "react-router-dom";
import { Box, background, position, button } from "@chakra-ui/react";
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

const Results = () => {
  const location = useLocation();
  const { score, totalQuestions, questionsAttempted } = location.state;

  return (
    <div>
      <Box
        textAlign={"center"}
        fontSize={"1.5rem"}
        width={"70vw"}
        boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.6)"}
        margin={"auto"}
        marginBottom={"3vw"}
        padding={"3vw"}
      >
        <h1
          style={{ width: "100%", backgroundColor: "#FAB519" }}
          fontWeight={"100"}
        >
          Test Results
        </h1>
        <div
          style={{
            fontSize: "1.5rem",
            width: "100%",
            fontWeight: "600",
            marginTop: "2vh",
            textAlign: "center",
            marginTop: "8vh",
          }}
        >
          <p style={{ marginTop: "6vh" }}>Your score: {score}</p>
          <p style={{ marginTop: "6vh" }}>Total Questions: {totalQuestions}</p>
          <p style={{ marginTop: "6vh" }}>
            Questions Attempted: {questionsAttempted}
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Results;
