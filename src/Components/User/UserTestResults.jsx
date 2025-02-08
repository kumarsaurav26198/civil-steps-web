import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetails";
import {
 Table,
 Thead,
 Tbody,
 Tfoot,
 Tr,
 Th,
 Td,
 TableCaption,
 TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "../../services/apiEndPoints";
const UserTestResults = () => {
 const [result, setResult] = useState();
 const [userDetails, setUserDetails] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || ""
 );
 const getMyResult = async () => {
  try {
   const responce = await axios.get(
    `${baseURL}/api/test-results/${userDetails._id}`,
    // `https://api.civilsteps.com/api/test-results/${userDetails._id}`
   );
   console.log("responce:", responce.data);
   setResult(responce.data);
  } catch (error) {
   console.log("error:", error);
  }
 };
 useEffect(() => {
  getMyResult();
 }, []);
 console.log("result:", result);
 /*
correctAnswers
questionsAttempted
score
submissionTime
wrongAnswers
*/
 return (
  <UserDetail>
   <TableContainer>
    <Table variant="simple">
     <TableCaption>These are the result of your MCQ Test's</TableCaption>
     <Thead>
      <Tr>
       {/* <Th>Sr-No.</Th> */}
       <Th>Questions Attempted</Th>
       <Th>Correct Answers</Th>
       <Th>Wrong Answers</Th>
       <Th>Score</Th>
       <Th>Submission Time</Th>
      </Tr>
     </Thead>
     <Tbody>
      {result?.map((item, index) => {
       return (
        <Tr key={index}>
         {/* <Td>{item.index}</Td> */}
         <Td>{item.questionsAttempted}</Td>
         <Td>{item.correctAnswers}</Td>
         <Td>{item.wrongAnswers}</Td>
         <Td>{item.score}</Td>
         <Td>{item.submissionTime}</Td>
        </Tr>
       );
      })}
     </Tbody>
     <Tfoot>
      {/* <Tr>
       <Th>To convert</Th>
       <Th>into</Th>
       <Th isNumeric>multiply by</Th>
      </Tr> */}
     </Tfoot>
    </Table>
   </TableContainer>
  </UserDetail>
 );
};

export default UserTestResults;
