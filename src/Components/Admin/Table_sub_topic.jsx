import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import {
 Box,
 Table,
 Thead,
 Tbody,
 Tr,
 Th,
 Td,
 FormControl,
 FormLabel,
 Select,
 IconButton,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalCloseButton,
 ModalBody,
 ModalFooter,
 Button,
 useDisclosure,
 TableContainer,
 Text,
 Card,
 CardHeader,
 Heading,
 CardFooter,
 CardBody,
} from "@chakra-ui/react";
import { RiFileAddLine } from "react-icons/ri";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaDisplay } from "react-icons/fa6";
import AddQuesBySubTopic from "./AddQuesBySubTopic";
import UpdateSubTop from "./UpdateSubTop";

const Table_sub_topic = () => {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const [subjects, setSubjects] = useState([]);
 const [loading, setLoading] = useState(true);
 const [topic, setTopic] = useState();
 const [selectedSubject, setSelectedSubject] = useState();
 const [selectedTopices, setSelectedTopics] = useState();
 const [data, setData] = useState();
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [filterData, setFilterDta] = useState({});
 const [isOpenupdae, setIsOpen] = useState(false);
 const [idToUpdate, setIdToUpdate] = useState("");
 const [showUpdate, setShowQuesOption] = useState(false);

 const handleUpdateModelOpen = (id) => {
  setIdToUpdate(id);
  setIsOpen(true);
 };

 const handleClose = () => {
  setIsOpen(false);
 };
 const handleViewCollege = () => {
  setIsModalOpen(false);
 };
 const handleViewCollegeOpen = (id) => {
  console.log(id);
  const filteredata = data?.filter((item) => item._id == id);
  setFilterDta(filteredata);
  setIsModalOpen(true); // Open the modal
 };
 const handleSubjectChange = async (e) => {
  const selectedSubject = e.target.value;
  const responce = await axios.get(
    `${baseURL}/api/sub-topic/subject/${selectedSubject}/topics`
//    `https://api.civilsteps.com/api/sub-topic/subject/${selectedSubject}/topics`
  );
  console.log("responce:1", responce);
  setTopic(responce.data.topic);
  setSelectedSubject(responce.data.subject);
  //   setSelectedTopic("");
 };
 const handleTChange = (e) => {
  const selectedTopices = e.target.value;
  setSelectedTopics(selectedTopices);
 };
 const handleUpdate = () => {
  fetchData();
 };
 const fetchData = async () => {
  if (selectedTopices && selectedSubject) {
   try {
    const response = await axios.get(
    `${baseURL}/api/${selectedSubject}/${selectedTopices}`
    //  `https://api.civilsteps.com/api/${selectedSubject}/${selectedTopices}`
    );
    console.log("response:2", response);
    if (response.status === 200) {
     setData(response.data);
    }
   } catch (error) {
    console.error("Error fetching questions:", error);
   }
  }
 };

 const fetchQData = async () => {
  try {
   const response = await axios.get(
    `${baseURL}/api/${selectedSubject}/${selectedTopices}`
    // `https://api.civilsteps.com/api/${selectedSubject}/${selectedTopices}`
   );
   console.log("response 3:", response);
   if (response.status === 200) {
    setData(response.data);
    const subTopic = {
     subject: selectedSubject,
     topic: selectedTopices,
    };
    console.log("subTopic:", subTopic);
   }
  } catch (error) {
   console.error("Error fetching questions:", error);
  }
 };

 useEffect(() => {
  if (selectedTopices && selectedSubject) {
   fetchQData();
  }
 }, [selectedSubject, selectedTopices]);
 const handleDelete = async (id) => {
  try {
   if (id && selectedSubject && selectedTopices) {
    const response = await axios.delete(
    `${baseURL}/api/questions/${selectedSubject}/${selectedTopices}/${id}`
    //  `https://api.civilsteps.com/api/questions/${selectedSubject}/${selectedTopices}/${id}`
    );
    if (response === 200) {
     console.log("done deletion");
     fetchQData(selectedSubject, selectedTopices);
    }
   }
  } catch (error) {}
 };
 useEffect(() => {
  const getSubjects = async () => {
   try {
    const response = await axios.get(
        `${baseURL}/api/sub-topic/subjects`
    //  "https://api.civilsteps.com/api/sub-topic/subjects"
    );
    setSubjects(response.data.data);
   } catch (error) {
    console.error("Error fetching subjects:", error);
   } finally {
    setLoading(false);
   }
  };
  getSubjects();
 }, []);
 console.log("showUpdate:", showUpdate);
 console.log("selectedSubject:", selectedSubject);
 console.log("selectedTopices:", selectedTopices);
 return (
  <AdminDashboard>
   <Box h="100vh">
    <Box
     w="98%"
     h="80px"
     p="20px"
     m="auto"
     display="flex"
     alignItems="center"
     boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
     gap={10}
    >
     <IconButton
      fontSize="50px"
      variant="outline"
      colorScheme="teal"
      aria-label="Send email"
      icon={<RiFileAddLine />}
      onClick={onOpen} // Open the modal when icon is clicked
     />
     <FormControl>
      <FormLabel>Subject</FormLabel>
      <Select onChange={handleSubjectChange}>
       <option value="">Select Subject</option>
       {subjects?.map((subject, index) => (
        <option key={index} value={subject._id}>
         {subject.name}
        </option>
       ))}
      </Select>
     </FormControl>
     &
     <FormControl>
      <FormLabel>Topic</FormLabel>
      <Select onChange={handleTChange}>
       <option value="">Select Topic</option>
       {topic?.map((subject, index) => (
        <option key={index} value={subject.name}>
         {subject.name}
        </option>
       ))}
      </Select>
     </FormControl>
    </Box>
    {/* Add Question Model */}
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
     <ModalOverlay />
     <ModalContent>
      <ModalHeader>Add questions based on subject and topic</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
       <AddQuesBySubTopic />
      </ModalBody>
      <ModalFooter>
       <Button onClick={onClose}>Close</Button>
      </ModalFooter>
     </ModalContent>
    </Modal>
    {/* View model */}
    <Modal onClose={handleViewCollege} size="xl" isOpen={isModalOpen}>
     <ModalOverlay />
     <ModalContent>
      <ModalHeader>Question Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
       <Card align="center">
        <CardHeader>
         <Heading size="md">
          {selectedSubject}-{selectedTopices}
         </Heading>
        </CardHeader>
        <CardBody w={"80%"}>
         <Text>{filterData[0]?.text}</Text>
         <Text ml={5}>
          <ul>
           {filterData[0]?.options?.map((option, index) => (
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
         <Text>Answer: {filterData[0]?.correctOption + 1}</Text>
         <Text display={"flex"}>Remarks: {filterData[0]?.remarks}</Text>
        </CardFooter>
       </Card>
      </ModalBody>
      <ModalFooter>
       <Button variant={"solid"} bg={"transparent"} onClick={handleViewCollege}>
        Close
       </Button>
      </ModalFooter>
     </ModalContent>
    </Modal>
    {/* Update Questions */}
    <Modal isOpen={isOpenupdae} onClose={handleClose} size="xl">
     <ModalOverlay />
     <ModalContent>
      <ModalHeader>Edit Content</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
       <UpdateSubTop
        subject={selectedSubject}
        topic={selectedTopices}
        id={idToUpdate}
        onUpdate={handleUpdate}
        showUpdate={showUpdate}
       />
      </ModalBody>
     </ModalContent>
    </Modal>
    <TableContainer height={"80vh"} overflowY={"scroll"} mt={2}>
     <Table mt={10} size="sm">
      <Thead>
       <Tr>
        <Th>Question</Th>
        <Th>Options</Th>
        <Th>Correct Option</Th>
        <Th>Remarks</Th>
        <Th>Action</Th>
       </Tr>
      </Thead>

      <Tbody
       style={{
        maxHeight: "200px",
        overflowY: "hidden",
       }}
      >
       {data?.map((question) => (
        <Tr key={question._id}>
         <Td>
          <Text isTruncated maxW="200px">
           {question.text}
          </Text>
         </Td>
         <Td>
          <ul>
           {question?.options?.map((option, index) => (
            <li key={index} isTruncated maxW="200px">
             <Text isTruncated maxW="200px">
              {option}
             </Text>
            </li>
           ))}
          </ul>
         </Td>
         <Td>
          <Text isTruncated maxW="200px">
           {question.options[question.correctOption]}{" "}
          </Text>
         </Td>

         <Td>
          {" "}
          <Text isTruncated maxW="100px">
           {question.remarks}
          </Text>
         </Td>
         <Td>
          <Box
           display={"flex"}
           alignItems={"center"}
           justifyContent={"center"}
           gap={2}
          >
           <FaDisplay
            size={20}
            cursor={"pointer"}
            onClick={() => {
             handleViewCollegeOpen(question._id);
            }}
           />
           <FaEdit
            size={20}
            cursor={"pointer"}
            onClick={() => {
             handleUpdateModelOpen(question._id);
             setShowQuesOption(true);
            }}
           />
           <AiTwotoneDelete
            onClick={() => {
             handleDelete(question._id);
            }}
            size={20}
            cursor={"pointer"}
           />
          </Box>
         </Td>
        </Tr>
       ))}
      </Tbody>
     </Table>
    </TableContainer>
   </Box>
  </AdminDashboard>
 );
};

export default Table_sub_topic;
