import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Button,
  VStack,
  Input,
  Textarea,
  HStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdPhone } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";

import { IconButton } from "@chakra-ui/react";
import DynamicInputField from "./DynamicInputField";
const AddQuesBySubTopic = () => {
  const toast = useToast();
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [addSub, setAddSub] = useState("");
  const [addTopic, setAddTop] = useState([]);
  const [selectedTopices, setSelectedTopics] = useState();
  const [showSubjectInput, setShowInputField] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    text: "",
    options: ["", "", "", ""],
    question_options: [],
    correctOption: "",
    level: "",
    remarks: "",
    paper_set: "",
  });
  const fetchSubjects = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/sub-topic/subjects`,
      );
      setSubjects(response.data.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };
  useEffect(() => {
    fetchSubjects();
  }, []);
  const handleSubjectChange = async (e) => {
    const selectedSubject = e.target.value;

    try {
      const response = await axios.get(
    `${baseURL}/api/sub-topic/subject/${selectedSubject}/topics`,
        // `https://api.civilsteps.com/api/sub-topic/subject/${selectedSubject}/topics`
      );
      console.log(response.data.subject);
      setTopics(response.data.topic); // Update topics state with fetched topics
      setFormData({ ...formData, subject: response.data.subject });
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };
  const handleTChange = (e) => {
    const selectedTopices = e.target.value;
    setFormData({ ...formData, topic: selectedTopices });
    setSelectedTopics(selectedTopices);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", formData);
    try {
      const response = await axios.post(
    `${baseURL}/api/questions/${formData.subject}/${formData.topic}`,
        // `https://api.civilsteps.com/api/questions/${formData.subject}/${formData.topic}`,
        formData
      );
      if (response.status === 201) {
        // Question added successfully, you can handle this as needed
        console.log("Question added successfully");
        toast({
          title: "Question Added",
          description: "The Question has been successfully added.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({
          subject: "",
          topic: "",
          text: "",
          options: ["", "", "", ""],
          correctOption: "",
          level: "",
          remarks: "",
          paper_set: "",
        });
        // Refresh questions after adding new question
      }
    } catch (error) {
      console.error("Error adding question:", error);

      toast({
        title: "Error",
        description: "An error occurred while adding the subject.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const showInputField = () => {
    setShowInputField(true);
  };
  const handleAddSubjectTopic = async () => {
    try {
      const payload = {
        name: addSub,
      };

      const response = await axios.post(
        `${baseURL}/api/sub-topic/subject`,
        // `https://api.civilsteps.com/api/sub-topic/subject`,
        payload
      );
      console.log("response:", response.data.data._id);
      const subjectId = response.data.data._id;

      // If subject creation was successful, add topics to the subject
      if (response.status === 201) {
        // Ensure addTopic is an array
        const topicsToAdd = Array.isArray(addTopic) ? addTopic : [addTopic];

        const addTopicsResponse = await axios.post(
          `${baseURL}/api/sub-topic/subject/${subjectId}/topics`,
          // `https://api.civilsteps.com/api/sub-topic/subject/${subjectId}/topics`,
          { topics: topicsToAdd }
        );
        console.log("addTopicsResponse:", addTopicsResponse);
        if (addTopicsResponse.status === 201) {
          toast({
            title: "Subject and topic added",
            description: "The Subject and Topic has been successfully added.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          fetchSubjects();
          setShowInputField(false);
        }
      }
    } catch (error) {
      console.log("error:", error);
    }
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

  return (
    <Box>
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <HStack
          border="1px solid #CCCC"
          w="100%"
          p={5}
          align={"center"}
          justify={"space-around"}
        >
          {showSubjectInput ? (
            <HStack>
              <FormControl>
                <FormLabel>Add Subject</FormLabel>
                <Input
                  placeholder="Subject"
                  //   value={option}
                  onChange={(e) => setAddSub(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Add Topic</FormLabel>
                <Input
                  placeholder="Subject"
                  //   value={option}
                  onChange={(e) => setAddTop(e.target.value)}
                />
              </FormControl>
              <Button
                variant={"solid"}
                mt={7}
                bg="ThreeDDarkShadow"
                color={"white"}
                onClick={handleAddSubjectTopic}
              >
                Add
              </Button>
            </HStack>
          ) : (
            <HStack>
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
                  {topics?.map((topic, index) => (
                    <option key={index} value={topic.name}>
                      {topic.name} <span></span>
                    </option>
                  ))}
                </Select>
              </FormControl>
              <IconButton
                mt={7}
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<IoAddSharp />}
                onClick={showInputField}
              />
            </HStack>
          )}
        </HStack>
        <FormControl>
          <FormLabel>Question Text</FormLabel>
          <Textarea name="text" value={formData.text} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Question Point</FormLabel>
          <Box>
            <Button onClick={handleAddQuestionOption}>
              Add Question Point
            </Button>
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
        {formData?.options?.map((option, index) => (
          <FormControl key={index}>
            <FormLabel>{`Option ${index + 1}`}</FormLabel>
            <Input
              value={option}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  options: formData?.options?.map((item, i) =>
                    i === index ? e.target.value : item
                  ),
                })
              }
            />
          </FormControl>
        ))}
        <HStack w="100%" align={"center"} justify={"space-between"}>
          <FormControl>
            <FormLabel>Correct Option</FormLabel>
            <Select
              name="correctOption"
              value={formData.correctOption}
              onChange={handleChange}
            >
              {formData?.options?.map((option, index) => (
                <option key={index} value={`${index + 1}`}>
                  {`Option ${index + 1}`}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Level</FormLabel>
            <Select
              //    disabled
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="">Choose Level</option>
              <option value="Level-1">Level-1</option>
              <option value="Level-2">Level-2</option>
              <option value="Level-3">Level-3</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Paper Set</FormLabel>
            <Select
              name="paper_set"
              value={formData.paper_set}
              onChange={handleChange}
            >
              <option value="">Choose Set</option>
              <option value="1">Set-1</option>
              <option value="2">Set-2</option>
              {/* <option value="3">Set-3</option> */}
            </Select>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Remarks</FormLabel>
          <Textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Add Question
        </Button>
      </VStack>
    </Box>
  );
};

export default AddQuesBySubTopic;
