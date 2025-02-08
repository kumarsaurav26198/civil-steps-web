import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import {
 Tab,
 TabList,
 TabPanel,
 TabPanels,
 Tabs,
 Table,
 Thead,
 Tbody,
 Tfoot,
 Tr,
 Th,
 Td,
 TableCaption,
 TableContainer,
 useDisclosure,
 Button,
 Box,
 Text,
 UnorderedList,
 ListItem,
 IconButton,
 Input,
} from "@chakra-ui/react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { RiFileAddLine } from "react-icons/ri";
import { baseURL } from "../../services/apiEndPoints";
const SubjectOperations = () => {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const [showTopicInput, setShowTopicInput] = useState(false);
 const [topicID, setTopicId] = useState("");
 const [subTopData, setSubTopData] = useState();
 const [topicData, setTopicData] = useState();
 const [subjectFromDb, setSubjectOfDb] = useState([]);
 const [YearFromDb, setYearOfDb] = useState([]);
 const [subjects, setSubjects] = useState([]);
 const [loading, setLoading] = useState(true);
 const [topic, setTopic] = useState([]);
 const toggleInput = () => {
  setShowTopicInput((prevState) => !prevState);
 };
 const handleAddTopic = async () => {
  console.log("topic:", topic);
  try {
   const addTopicsResponse = await axios.post(
    `${baseURL}/api/sub-topic/subject/${topicID}/topics`,
    // `https://api.civilsteps.com/api/sub-topic/subject/${topicID}/topics`,
    { topics: [topic] }
   );
   console.log("addTopicsResponse:", addTopicsResponse);
  } catch (error) {
   console.log("error:", error);
  }
 };
 const handleSizeClick = async (id) => {
  console.log("id:", id);
  setTopicId(id);
  const responce = await axios.get(
    `${baseURL}/api/sub-topic/subject/${id}/topics`,
  //  `https://api.civilsteps.com/api/sub-topic/subject/${id}/topics`
  );
  setSubTopData(responce.data);
  setTopicData(responce.data.topic);
  console.log("responce:", responce.data);
  onOpen();
 };
 const handleDelete = async (id, subject) => {
  console.log("id:", id);
  console.log("subject:", subject);
  const payload = { topicIds: id };
  console.log("payload:", payload);
  try {
   const responce = await axios.delete(
    `${baseURL}/api/sub-topic/rm-topic/${topicID}`,
    // `https://api.civilsteps.com/api/sub-topic/rm-topic/${topicID}`,
    { data: { topicIds: id } }
   );
   console.log("responce:", responce);
   getSubjects();
   onClose();
  } catch (error) {
   console.log("error:", error);
  }
 };
 const handleSubDelete = async (id, subject) => {
  try {
   const responce = await axios.delete(
    `${baseURL}/api/sub-topic/subjects/${topicID}`,
    // `https://api.civilsteps.com/api/sub-topic/subjects/${topicID}`
   );
   console.log("responce:", responce);
   getSubjects();
   onClose();
  } catch (error) {
   console.log("error:", error);
  }
 };
 const getSubData = async () => {
  try {
   const response = await axios

    // .get(`https://api.civilsteps.com/api/subjects`)
    .get(`${baseURL}/subjects`)
    .then((response) => {
     setSubjectOfDb(response.data);
    })
    .catch((error) => {
     console.error("Error fetching subjects:", error);
    });
  } catch (error) {}
 };
 useEffect(() => {
  getSubData();
 }, []);
 const getYearData = async () => {
  try {
   const responce = await axios
    // .get(`https://api.civilsteps.com/api/year`)
    .get(`${baseURL}/api/year`)
    .then((response) => {
     setYearOfDb(response.data);
    })
    .catch((error) => {
     console.error("Error fetching subjects:", error);
    });
  } catch (error) {}
 };
 useEffect(() => {
  getYearData();
 }, []);
 const getSubjects = async () => {
  try {
   const response = await axios.get(`${baseURL}/api/sub-topic/subjects`
    // "https://api.civilsteps.com/api/sub-topic/subjects"
   );
   setSubjects(response.data.data);
  } catch (error) {
   console.error("Error fetching subjects:", error);
  } finally {
   setLoading(false);
  }
 };
 useEffect(() => {
  getSubjects();
 }, []);
 useState(() => {
  if (topicID) {
   const getTopic = async () => {};
   getTopic();
  }
 }, [topicID]);
 console.log("showTopicInput:", showTopicInput);
 const handleDeletYear = async (id) => {
  try {
   console.log("id:", id);
   const response = await axios.delete(
    `https://api.civilsteps.com/api/year/${id}`
    // `https://api.civilsteps.com/api/year/${id}`
   );
   if (response.status === 200) {
    getYearData();
   }
  } catch (error) {
   console.log("error:", error);
  }
 };
 const handleSubjectDel = async (id) => {
  try {
   console.log("id:", id);
   const response = await axios.delete(
    `${baseURL}/api/subject/${id}`
    // `https://api.civilsteps.com/api/subject/${id}`
   );
   if (response.status === 200) {
    getSubData();
   }
  } catch (error) {
   console.log("error:", error);
  }
 };
 return (
  <AdminDashboard>
   <Tabs variant="enclosed">
    <TabList>
     <Tab>Subject</Tab>
     <Tab>Year</Tab>
     <Tab>Subject And Topic</Tab>
    </TabList>
    <TabPanels>
     <TabPanel>
      <TableContainer>
       <Table variant="striped" colorScheme="#FAB519">
        <Thead>
         <Tr>
          <Th>Sn.</Th>
          <Th>Subject</Th>
          <Th>Action</Th>
         </Tr>
        </Thead>
        <Tbody>
         {subjectFromDb?.map((item, index) => {
          return (
           <Tr>
            <Td>{index + 1}.</Td>
            <Td>{item.name}</Td>
            <Td>
             <MdDeleteOutline
              onClick={() => {
               handleSubjectDel(item._id);
              }}
              size={20}
             />
            </Td>
           </Tr>
          );
         })}
        </Tbody>
       </Table>
      </TableContainer>
     </TabPanel>
     <TabPanel>
      <TableContainer>
       <Table variant="striped" colorScheme="#FAB519">
        <Thead>
         <Tr>
          <Th>Sn.</Th>
          <Th>Year</Th>
          <Th>Action</Th>
         </Tr>
        </Thead>
        <Tbody>
         {YearFromDb?.map((item, index) => {
          return (
           <Tr>
            <Td>{index + 1}.</Td>
            <Td>{item.year}</Td>
            <Td>
             <MdDeleteOutline
              onClick={() => {
               handleDeletYear(item._id);
              }}
              size={20}
             />
            </Td>
           </Tr>
          );
         })}
        </Tbody>
       </Table>
      </TableContainer>
     </TabPanel>
     <TabPanel>
      <TableContainer>
       <Table variant="striped" colorScheme="#FAB519">
        <Thead>
         <Tr>
          <Th>Sn.</Th>
          <Th>Subject</Th>
          <Th>Action</Th>
         </Tr>
        </Thead>
        <Tbody>
         {subjects?.map((item, index) => {
          return (
           <Tr>
            <Td>{index + 1}.</Td>
            <Td>{item.name}</Td>
            <Td
             display={"flex"}
             align="center"
             justifyContent={"center"}
             gap={5}
             cursor={"pointer"}
            >
             <MdEditSquare
              size={20}
              onClick={() => {
               handleSizeClick(item._id);
              }}
             />
             <Text>Click to update the topic and subject</Text>
            </Td>
           </Tr>
          );
         })}
        </Tbody>
       </Table>
      </TableContainer>
      <Modal onClose={onClose} size={"md"} isOpen={isOpen}>
       <ModalOverlay />
       <ModalContent>
        <ModalHeader
         display={"flex"}
         alignItems={"center"}
         justifyContent={"center"}
         gap={5}
        >
         <IconButton
          fontSize="20px"
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<RiFileAddLine />}
          onClick={toggleInput}
         />
         <Text> Update the subject and topic</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <Box borderRadius={"8px"} h="60vh" p={5} border="1px solid #ccc">
          <Text>Subject: {subTopData?.subject}</Text>
          {showTopicInput && (
           <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
           >
            <Input
             type="text"
             mt={2}
             onChange={(e) => setTopic(e.target.value)}
             placeholder={`Add topic of ${subTopData?.subject}`}
            />
            <Button
             fontSize={"12px"}
             bg={"black"}
             color="#ffff"
             mt={2}
             onClick={() => {
              handleAddTopic();
             }}
            >
             Add Topic
            </Button>
           </Box>
          )}
          <UnorderedList>
           {topicData?.map((item) => (
            <ListItem
             mt={2}
             p={1}
             border={"1px solid #ccc"}
             borderRadius={"8px"}
             display={"flex"}
             alignItems={"center"}
             justifyContent={"space-between"}
            >
             <Text>{item.name}</Text>

             <Text>
              <MdDeleteOutline
               cursor={"pointer"}
               onClick={() => {
                handleDelete(item._id, subTopData?.subject);
               }}
              />
             </Text>
            </ListItem>
           ))}
          </UnorderedList>
         </Box>
        </ModalBody>
        <ModalFooter
         display={"flex"}
         alignItems={"flex-end"}
         justifyContent={"center"}
         gap={5}
        >
         <Button
          fontSize={"12px"}
          bg={"black"}
          color="#ffff"
          mt={2}
          onClick={handleSubDelete}
         >
          Remove Subject
         </Button>
         <Button
          fontSize={"12px"}
          bg={"black"}
          color="#ffff"
          mt={2}
          onClick={onClose}
         >
          Close
         </Button>
        </ModalFooter>
       </ModalContent>
      </Modal>
     </TabPanel>
    </TabPanels>
   </Tabs>
  </AdminDashboard>
 );
};

export default SubjectOperations;
