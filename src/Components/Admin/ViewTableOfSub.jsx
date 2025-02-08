import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import {
 Table,
 Thead,
 Tbody,
 Tr,
 Th,
 Td,
 TableCaption,
 TableContainer,
 Box,
 Button,
 Select,
 Spinner,
 Alert,
 AlertIcon,
 Text,
 IconButton,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalBody,
 ModalFooter,
 Textarea,
 Input,
 FormControl,
 FormLabel,
 VStack,
 HStack,
 useToast,
 Heading,
 Card,
 CardHeader,
 CardBody,
 CardFooter,
 ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

import { IoIosAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { TiDocumentAdd } from "react-icons/ti";
import { FaDisplay } from "react-icons/fa6";
import DynamicInputField from "./DynamicInputField";
import { baseURL } from "../../services/apiEndPoints";

const ViewTableOfSub = () => {
 const toast = useToast();
 const [formData, setFormData] = useState({
  text: "",
  options: ["", "", "", ""],
  question_options: [],
  correctOption: 0,
  level: "",
  remarks: "",
  subject: "",
 });
 const [togleQuestionTopin, setTogleForQuesPoint] = useState(false);
 console.log("togleQuestionTopin:", togleQuestionTopin);
 // State for managing questions data
 const [questions, setQuestions] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");

 // State for managing modal
 const [isOpen, setIsOpen] = useState(false);
 const [isOpenView, setIsOpenView] = useState(false);
 const [updateQues, setUpdateQue] = useState(false);
 const [viewQues, setViewQue] = useState(false);
 const [ids, setID] = useState("");
 const [questionId, setQuestionId] = useState(null);
 // State for managing subjects
 const [subject, setSubject] = useState("");
 const [subjectFromDb, setSubjectOfDb] = useState([]);
 const [subjectSingleData, setSubjectSingleData] = useState([]);

 // State for managing add subject
 const [showAddSubject, setShowSubject] = useState(false);
 const [addSubject, setAddSubject] = useState("");

 // Handler functions
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
   ...formData,
   [name]: value,
  });
 };

 const handleOptionChange = (index, value) => {
  const newOptions = [...formData.options];
  newOptions[index] = value;
  setFormData({
   ...formData,
   options: newOptions,
  });
 };
 const handleQuestionOptionChange = (index, value) => {
  const newOptions = [...formData.question_options];
  newOptions[index] = value;
  setFormData({
   ...formData,
   question_options: newOptions,
  });
 };

 const handleAddBySubject = async (e) => {
  e.preventDefault();
  try {
   if (updateQues === false) {
    // Adding a new question
    const response = await axios.post(
     `${baseURL}/api/question/sub/`,
    //  `https://api.civilsteps.com/api/question/sub/`,
     formData
    );
    console.log("response:", response);
    if (response.status === 201) {
     setQuestions([...questions, response.data]);
     toast({
      title: "Question Added",
      description: "The question has been successfully added.",
      status: "success",
      duration: 5000,
      isClosable: true,
     });
    }
   } else {
    const responce = await axios.patch(
     `${baseURL}/api/question/sub/${ids}`,
     formData
    );
    console.log("Update logic goes here");
    if (responce.status === 201) {
     toast({
      title: "Successfully",
      description: "Updated the question",
      status: "info",
      duration: 5000,
      isClosable: true,
     });
     window.location.reload();
    }
   }
  } catch (error) {
   console.error("Error:", error);
   toast({
    title: "Error",
    description: "An error occurred while adding/updating the question.",
    status: "error",
    duration: 5000,
    isClosable: true,
   });
  }
 };
 const handleDelete = async (id) => {
  try {
   const response = await axios.delete(
    `${baseURL}/api/question/sub/${id}`
    // `https://api.civilsteps.com/api/question/sub/${id}`
   );
   console.log("response:", response);
   if (response.status === 200) {
    setQuestions(questions.filter((question) => question._id !== id));
    toast({
     title: "Question Deleted",
     description: "The question has been successfully deleted.",
     status: "success",
     duration: 5000,
     isClosable: true,
    });
   }
  } catch (error) {
   console.error("Error:", error);
   toast({
    title: "Error",
    description: "An error occurred while deleting the question.",
    status: "error",
    duration: 5000,
    isClosable: true,
   });
  }
 };
 const handleAddSubjects = async () => {
  try {
   console.log("addSubject:", addSubject);
   const payload = {
    name: addSubject,
   };
   const response = await axios.post(
    `${baseURL}/api/subjects`,
    // `https://api.civilsteps.com/api/subjects`,
    payload
   );
   console.log("response:", response);
   if (response.status === 201) {
    setSubjectOfDb([...subjectFromDb, response.data]);
    setShowSubject(false);
    console.log("added");

    toast({
     title: "Subject Added",
     description: "The subject has been successfully added.",
     status: "success",
     duration: 5000,
     isClosable: true,
    });
   }
  } catch (error) {
   console.error("Error:", error);
   toast({
    title: "Error",
    description: "An error occurred while adding the subject.",
    status: "error",
    duration: 5000,
    isClosable: true,
   });
  }
 };

 const handleView = async (id) => {
  setIsOpenView(true);
  // setQuestionId(id);
  try {
   const response = await axios.get(
    `${baseURL}/api/question/sub/get/${id}`
   );
   console.log("response:", response);
   setSubjectSingleData(response.data);
  } catch (error) {
   console.log("error:", error);
  }
  // You can perform any other actions you need here
 };
 const handleUpdate = async (id) => {
  setIsOpen(true);
  setUpdateQue(true);
  try {
   const response = await axios.get(
    `${baseURL}/api/question/sub/get/${id}`
    // `https://api.civilsteps.com/api/question/sub/get/${id}`
   );
   const questionData = response.data;
   console.log("questionData ==========================>:", questionData);
   setFormData({
    text: questionData.text || "",
    options: questionData.options || ["", "", "", ""],
    correctOption: questionData.correctOption || 0,
    level: questionData.level || "",
    remarks: questionData.remarks || "",
    subject: questionData.subject || "",
    question_options: questionData.question_options || "",
   });
   console.log("Response:", questionData);
  } catch (error) {
   console.error("Error:", error);
  }
 };

 const handleSubjectChange = (e) => {
  setSubject(e.target.value);
 };

 const handleOpen = () => {
  setIsOpen(true);
 };

 const handleClose = () => {
  setIsOpenView(false);
  setIsOpen(false);
 };
 const handleAddQuestionOption = () => {
  setFormData({
   ...formData,
   question_options: [...formData.question_options, ""],
  });
 };

 const handleRemoveQuestionOption = (index) => {
  const questionOptions = [...formData.question_options];
  questionOptions.splice(index, 1);
  setFormData({
   ...formData,
   question_options: questionOptions,
  });
 };

 const handleChangeQuestionOption = (index, value) => {
  const questionOptions = [...formData.question_options];
  questionOptions[index] = value;
  setFormData({
   ...formData,
   question_options: questionOptions,
  });
 };
 useEffect(() => {
  axios
  //  .get(`https://api.civilsteps.com/api/subjects`)
   .get(`${baseURL}/api/subjects`)
   .then((response) => {
    setSubjectOfDb(response.data);
   })
   .catch((error) => {
    console.error("Error fetching subjects:", error);
   });
 }, []);

 useEffect(() => {
  if (subject) {
   setLoading(true);
   setError("");

   axios
   // .get(`https://api.civilsteps.com/api/question/sub/${subject}`)
   .get(`${baseURL}/api/question/sub/${subject}`)
    .then((response) => {
     setQuestions(response.data);
     setLoading(false);
    })
    .catch((error) => {
     setError("Error fetching questions. Please try again later.");
     setLoading(false);
    });
  }
 }, [subject]);
 console.log("ids:", ids);
 console.log("subjectSingleData:", subjectSingleData);
 console.log("formData:", formData);
 return (
  <AdminDashboard>
   <TableContainer>
    <Box position={"relative"}>
     <Box
      position={"sticky"}
      top={"0px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={5}
     >
      <IconButton
       variant="outline"
       bgColor={"#FAB519"}
       color="white"
       aria-label="Add-Questions"
       icon={<TiDocumentAdd size={40} />}
       _hover={{
        color: "black",
        border: "2px solid black",
        backgroundColor: "white",
       }}
       onClick={handleOpen}
      />
      <Modal size={"xl"} isOpen={isOpen} onClose={handleClose}>
       <ModalOverlay />
       <ModalContent>
        <ModalHeader>Add Questions of {subject}</ModalHeader>
        <form onSubmit={handleAddBySubject}>
         <ModalBody>
          <VStack spacing={4}>
           <FormControl>
            <FormLabel>Question Text</FormLabel>
            <Textarea
             type="text"
             name="text"
             value={formData.text}
             onChange={handleInputChange}
            />
           </FormControl>
           {togleQuestionTopin ? (
            <Box>
             <FormControl>
              <FormLabel>Question Point</FormLabel>
              <Box>
               {/* <Button onClick={handleAddQuestionOption}>
                            Add Question Point
                          </Button> */}
               {formData?.question_options?.map((option, index) => {
                return (
                 <Input
                  value={option}
                  onChange={(event) =>
                   handleQuestionOptionChange(index, event.target.value)
                  }
                  // onRemove={() =>
                  //   handleRemoveQuestionOption(index)
                  // }
                 />
                );
               })}
              </Box>
             </FormControl>
            </Box>
           ) : (
            <FormControl>
             <FormLabel>Question Point</FormLabel>
             <Box>
              <Button
               fontWeight={"400"}
               backgroundColor={"#FAB519"}
               onClick={handleAddQuestionOption}
               padding={"5px 40px"}
               _hover={{
                color: "black",
                border: "2px solid #FAB519",
                backgroundColor: "white",
               }}
              >
               Add Question Point
              </Button>
              {/* <Button onClick={handleAddQuestionOption}>
               Add Question Point
              </Button> */}
              {formData?.question_options?.map((option, index) => (
               <Box key={index}>
                <DynamicInputField
                 value={option}
                 onChange={(event) =>
                  handleChangeQuestionOption(index, event.target.value)
                 }
                 onRemove={() => handleRemoveQuestionOption(index)}
                />
               </Box>
              ))}
             </Box>
            </FormControl>
           )}
           {formData?.options?.map((option, index) => (
            <FormControl key={index}>
             <FormLabel>{`Option ${index + 1}`}</FormLabel>
             <Input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
             />
            </FormControl>
           ))}
           <FormControl>
            <FormLabel>Correct Option Index</FormLabel>
            <Select
             name="correctOption"
             value={formData.correctOption}
             onChange={handleInputChange}
            >
             {formData?.options?.map((option, index) => (
              <option key={index} value={index}>{`Option ${index + 1}`}</option>
             ))}
            </Select>
           </FormControl>
           <Box
            w={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
           >
            {!showAddSubject && (
             <FormControl w="80%">
              <FormLabel>Select Subject</FormLabel>
              <Select
               name="subject"
               backgroundColor={"white"}
               fontSize={"1.3rem"}
               onChange={handleInputChange}
               h="8vh"
               textDecoration={"none"}
               focusBorderColor="transparent"
              >
               <option value="option1">Select Subject</option>

               {subjectFromDb?.map((subject) => (
                <option key={subject._id} value={subject.name}>
                 {subject.name}
                </option>
               ))}
              </Select>
             </FormControl>
            )}
            {showAddSubject ? (
             <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
              w="100%"
             >
              <FormControl h="80px">
               <FormLabel>Add Subject</FormLabel>
               <Input
                h={"50px"}
                placeholder="Add subject"
                onChange={(e) => setAddSubject(e.target.value)}
               />
              </FormControl>
              <Button
               mt={8}
               height={"50px"}
               fontWeight={"400"}
               backgroundColor={"#FAB519"}
               _hover={{
                color: "black",
                border: "2px solid #FAB519",
                backgroundColor: "white",
               }}
               onClick={handleAddSubjects}
              >
               Add
              </Button>
             </Box>
            ) : (
             <IoIosAddCircleOutline
              onClick={() => setShowSubject(true)}
              size={40}
              style={{
               marginTop: "30px",
               width: "15%",
              }}
             />
            )}
           </Box>
           <FormControl>
            <FormLabel>Level</FormLabel>
            <Input
             disabled
             type="text"
             name="level"
             value={formData.level}
             onChange={handleInputChange}
            />
           </FormControl>
           <FormControl>
            <FormLabel>Remarks</FormLabel>
            <Textarea
             name="remarks"
             value={formData.remarks}
             onChange={handleInputChange}
            />
           </FormControl>
          </VStack>
         </ModalBody>
         <ModalFooter>
          <HStack gap={10}>
           <Button
            fontWeight={"400"}
            backgroundColor={"#FAB519"}
            _hover={{
             color: "black",
             border: "2px solid #FAB519",
             backgroundColor: "white",
            }}
            type="submit"
           >
            Submit
           </Button>
           <Button
            bgColor="black"
            color={"white"}
            mr={3}
            onClick={handleClose}
            _hover={{
             color: "black",
             border: "2px solid #FAB519",
             backgroundColor: "white",
            }}
           >
            Close
           </Button>
          </HStack>
         </ModalFooter>
        </form>
       </ModalContent>
      </Modal>
      <Select
       backgroundColor={"white"}
       fontSize={"1.3rem"}
       onChange={handleSubjectChange}
       h="8vh"
       textDecoration={"none"}
       focusBorderColor="transparent"
      >
       <option value="option1">Select Subject</option>

       {subjectFromDb?.map((subject) => (
        <option key={subject._id} value={subject.name}>
         {subject.name}
        </option>
       ))}
      </Select>
     </Box>
     {loading ? (
      <Spinner size="lg" />
     ) : error ? (
      <Alert status="error" variant="subtle" alignItems="center">
       <AlertIcon />
       {error}
      </Alert>
     ) : questions.length === 0 ? (
      <Box
       w="100%"
       h="50vh"
       display={"flex"}
       alignItems={"center"}
       justifyContent={"center"}
      >
       <Heading>Please select any subject to see questions.</Heading>
      </Box>
     ) : (
      <Table variant="simple" size={"sm"}>
       <TableCaption>
        <Box
         display={"flex"}
         alignItems={"center"}
         justifyContent={"center"}
         gap={10}
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
         >
          Prev
         </Button>
         <Button
          fontWeight={"400"}
          backgroundColor={"#FAB519"}
          padding={"5px 40px"}
          _hover={{
           color: "black",
           border: "2px solid #FAB519",
           backgroundColor: "white",
          }}
         >
          Next
         </Button>
        </Box>
       </TableCaption>
       <Thead>
        <Tr>
         <Th>Sr-No.</Th>
         <Th>Questions</Th>
         <Th
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
         >
          Action
         </Th>
        </Tr>
       </Thead>
       <Tbody>
        {questions?.map((question, index) => (
         <Tr key={question._id}>
          <Td>{index + 1}</Td>
          <Td _hover={{ bg: "blue.600", cursor: "pointer" }} w="20vw">
           <Text>
            {question.text.length > 80
             ? question.text.slice(0, 50) + "........"
             : question.text}
           </Text>
          </Td>
          <Td
           display={"flex"}
           alignItems={"center"}
           justifyContent={"center"}
           gap={2}
          >
           {/* <Box> */}
           <FaDisplay
            size={20}
            cursor={"pointer"}
            onClick={() => {
             handleView(question._id);
            }}
           />
           <FaEdit
            size={20}
            cursor={"pointer"}
            onClick={() => {
             handleUpdate(question._id);
             setID(question._id);
             setTogleForQuesPoint(true);
            }}
           />
           <AiTwotoneDelete
            onClick={() => handleDelete(question._id)}
            size={20}
            cursor={"pointer"}
           />
           {/* </Box> */}
          </Td>
         </Tr>
        ))}
       </Tbody>
      </Table>
     )}
     <Modal size={"xl"} isOpen={isOpenView} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
       <ModalHeader>Question Details</ModalHeader>
       <ModalCloseButton />
       <ModalBody>
        <Card align="center">
         <CardHeader>
          <Heading size="md">
           {/* {selectedSubject}- */}
           {subjectSingleData.subject}
          </Heading>
         </CardHeader>
         <CardBody w={"80%"}>
          {subjectSingleData.text}
          <Text ml={5}>
           <ul>
            {subjectSingleData?.options?.map((option, index) => (
             <li key={index}>{option}</li>
            ))}
           </ul>
          </Text>
         </CardBody>
         <CardFooter
          display={"flex"}
          flexDirection={"column"}
          alignItems="flex-start"
          w="80%"
         >
          {/* <Text>Answer: {filterData[0]?.correctOption + 1}</Text> */}
          <Text display={"flex"}>Remarks: {subjectSingleData.remarks}</Text>
         </CardFooter>
        </Card>
       </ModalBody>
       <ModalFooter>
        <Button
         variant={"solid"}
         bg={"transparent"}
         onClick={() => setIsOpenView(false)}
        >
         Close
        </Button>
       </ModalFooter>
      </ModalContent>
     </Modal>
    </Box>
   </TableContainer>
  </AdminDashboard>
 );
};

export default ViewTableOfSub;
