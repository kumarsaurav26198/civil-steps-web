import React, { useEffect, useState } from "react";
import { Box, Link } from "@chakra-ui/react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
 Table,
 TableBody,
 TableContainer,
 TableHead,
 TableRow,
 Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { fetchUnlockedLevels } from "../redux/testReducer/action";
import { useDispatch, useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
 [`&.${tableCellClasses.head}`]: {
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
 },
 [`&.${tableCellClasses.body}`]: {
  fontSize: 14,
 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
 "&:nth-of-type(odd)": {
  backgroundColor: theme.palette.action.hover,
 },
 // hide last border
 "&:last-child td, &:last-child th": {
  border: 0,
 },
}));

const PremiumResult = () => {
 const [token, setToken] = useState(localStorage.getItem("token") || "");
 const [userID, setUserID] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || ""
 );
 const user_ID = userID._id;
 const dispatch = useDispatch();
 const { unlockedLevels } = useSelector((state) => state.testReducer);

 useEffect(() => {
  dispatch(fetchUnlockedLevels(userID._id, token));
 }, [dispatch, userID._id, token]);


  return (
    <Box>
      <Box
        p="5"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <TableContainer
          component={Paper}
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dzz32ksnf/image/upload/v1715192668/map-bg_xurtzo.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "85%",
            margin: "50px auto",
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr.n</StyledTableCell>
                <StyledTableCell align="right">Subject</StyledTableCell>
                <StyledTableCell align="right">Topic</StyledTableCell>
                <StyledTableCell align="right">Level</StyledTableCell>
                <StyledTableCell align="right">Total Questions</StyledTableCell>
                <StyledTableCell align="right">Correct</StyledTableCell>
                <StyledTableCell align="right">Wrong</StyledTableCell>
                <StyledTableCell align="right">Passed</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unlockedLevels?.attempts && unlockedLevels?.attempts?.map((attempt, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{attempt?.subject}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.topic}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.level}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.questions.length}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.correctCount}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.incorrectCount}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.passed ? "Yes" : "No"}</StyledTableCell>
                  <StyledTableCell align="right">{attempt?.date}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        p="5"
        border={"1px solid #cccc"}
        w="85%"
        margin={"auto"}
        height={"40px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Link style={{ color: "blue" }} to="/user-test-results">
          Go to Dashboard
        </Link>
        <Link style={{ color: "blue" }} to="/">
          Go to Home
        </Link>
      </Box>
    </Box>
  );
};

export default PremiumResult;

// import React, { useEffect, useState } from "react";
// import { Box, Link } from "@chakra-ui/react";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import {
//   Table,
//   TableBody,
//   // TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// // Custom StyledTableCell and StyledTableRow components
// import { styled } from "@mui/material/styles";
// import { fetchUnlockedLevels } from "../redux/testReducer/action";
// import { useDispatch, useSelector } from "react-redux";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const PremiumResult = () => {
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [userID, setUserID] = useState(
//     JSON.parse(localStorage.getItem("userDetails")) || ""
//   );
//   const user_ID = userID._id;
//   const dispatch=useDispatch()
//   const { unlockedLevels } = useSelector((state) => state.testReducer);

//   const resultData = {
//     correctCount: 1,
//     incorrectCount: 9,
//     level: "Level-1",
//     passed: false,
//     questions: [
//       { id: 1, question: "Question 1", answer: "Answer 1" },
//       { id: 2, question: "Question 2", answer: "Answer 2" },
//       // add more questions as needed
//     ],
//     _id: "6672b33ea49b92991c0f1ba9",
//   };

//   const rows = resultData.questions.map((q) => ({
//     id: q.id,
//     question: q.question,
//     answer: q.answer,
//   }));
//   useEffect(() => {
//     dispatch(fetchUnlockedLevels(userID._id, token));
//   }, [dispatch, userID._id, token]);
//   console.log('unlockedLevels:', unlockedLevels.attempts)
//   return (
//     <Box>
//       <Box
//         p="5"
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//       >
//         <TableContainer
//           component={Paper}
//           style={{
//             backgroundImage: `url("https://res.cloudinary.com/dzz32ksnf/image/upload/v1715192668/map-bg_xurtzo.png")`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             width: "85%",
//             margin: "50px auto",
//           }}
//         >
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell component="th" scope="row">
//                     {row.id}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.question}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.answer}</StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//       <Box
//         p="5"
//         border={"1px solid #cccc"}
//         w="85%"
//         margin={"auto"}
//         height={"40px"}
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"space-around"}
//       >
//         <Link style={{ color: "blue" }} to="/user-test-results">
//           Go to Dashboard
//         </Link>
//         <Link style={{ color: "blue" }} to="/">
//           Go to Home
//         </Link>
//       </Box>
//     </Box>
//   );
// };

// export default PremiumResult;
