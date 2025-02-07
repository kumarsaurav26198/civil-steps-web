import React, { useState, useEffect } from "react";
import axios from "axios";
import {
 Box,
 FormControl,
 FormLabel,
 Input,
 Textarea,
 Select,
 Button,
} from "@chakra-ui/react";

const UpdateSubTop = ({ subject, topic, id, onUpdate, showUpdate }) => {
 //   const [dataToUpdate, setDataUpdate] = useState({});
 //   const [formData, setFormData] = useState({
 //     text: "",
 //     options: [],
 //     correctOption: "",
 //     level: "",
 //     remarks: "",
 //   });

 //   const handleChange = (e) => {
 //     const { name, value } = e.target;
 //     setFormData({ ...formData, [name]: value });
 //   };

 //   const handleSubmit = async (e) => {
 //     e.preventDefault();
 //     try {
 //      const response= await axios.put(
 //         `https://api.civilsteps.com/api/questions/${subject}/${topic}/${id}`,
 //         formData
 //       );
 //       if(response.status===200){
 //         sessionStorage.setItem("dataUpdated", true);
 //       }
 //       console.log("Question updated successfully");
 //     } catch (error) {
 //       console.error("Error updating question:", error);
 //     }
 //   };

 //   useEffect(() => {
 //     const fetchQuestion = async () => {
 //       try {
 //         const response = await axios.get(
 //           `https://api.civilsteps.com/api/questions/${subject}/${topic}/${id}`
 //         );
 //         setDataUpdate(response.data.question);
 //         setFormData(response.data.question);
 //       } catch (error) {
 //         console.error("Error fetching question:", error);
 //       }
 //     };
 //     fetchQuestion();
 //   }, [subject, topic, id]);
 const [formData, setFormData] = useState({
  text: "",
  options: [],
  correctOption: "",
  level: "",
  remarks: "",
  question_options: [],
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.put(
    `https://api.civilsteps.com/api/questions/${subject}/${topic}/${id}`,
    formData
   );
   if (response.status === 200) {
    sessionStorage.setItem("dataUpdated", true);
    // Notify the parent component about the update
    if (typeof onUpdate === "function") {
     onUpdate();
    }
    console.log("Question updated successfully");
   }
  } catch (error) {
   console.error("Error updating question:", error);
  }
 };
 const handleQuestionOptionChange = (index, value) => {
  const newOptions = [...formData.question_options];
  newOptions[index] = value;
  setFormData({
   ...formData,
   question_options: newOptions,
  });
 };

 useEffect(() => {
  const fetchQuestion = async () => {
   try {
    const response = await axios.get(
     `https://api.civilsteps.com/api/questions/${subject}/${topic}/${id}`
    );
    setFormData(response.data.question);
   } catch (error) {
    console.error("Error fetching question:", error);
   }
  };
  fetchQuestion();
 }, [subject, topic, id]);

 return (
  <Box>
   <form onSubmit={handleSubmit}>
    <FormControl>
     <FormLabel>Question Text</FormLabel>
     <Textarea name="text" value={formData.text} onChange={handleChange} />
    </FormControl>
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
    <FormControl>
     <FormLabel>Options</FormLabel>
     {formData.options.map((option, index) => (
      <Input
       key={index}
       name={`option${index}`}
       value={option}
       onChange={(e) => {
        const newOptions = [...formData.options];
        newOptions[index] = e.target.value;
        setFormData({ ...formData, options: newOptions });
       }}
      />
     ))}
    </FormControl>

    <FormControl>
     <FormLabel>Correct Option</FormLabel>
     <Select
      name="correctOption"
      value={formData.correctOption}
      onChange={handleChange}
     >
      {formData.options.map((option, index) => (
       <option key={index} value={index}>
        Option {index + 1}
       </option>
      ))}
     </Select>
    </FormControl>

    <FormControl>
     <FormLabel>Level</FormLabel>
     <Select name="level" value={formData.level} onChange={handleChange}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
     </Select>
    </FormControl>

    <FormControl>
     <FormLabel>Remarks</FormLabel>
     <Textarea
      name="remarks"
      value={formData.remarks}
      onChange={handleChange}
     />
    </FormControl>

    <Button type="submit" colorScheme="teal" mt={4}>
     Update
    </Button>
   </form>
  </Box>
 );
};

export default UpdateSubTop;
