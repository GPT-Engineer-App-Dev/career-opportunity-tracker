import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from '@chakra-ui/react';

const JobPostingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.company && formData.location && formData.description) {
      onSubmit(formData);
      setFormData({
        title: '',
        company: '',
        location: '',
        description: '',
      });
      toast({
        title: "Job Posted",
        description: "Your job listing has been successfully added.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="500px" margin="auto">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input name="title" value={formData.title} onChange={handleChange} placeholder="Enter job title" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Company</FormLabel>
          <Input name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input name="location" value={formData.location} onChange={handleChange} placeholder="Enter job location" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter job description" />
        </FormControl>
        <Button type="submit" colorScheme="blue">Post Job</Button>
      </VStack>
    </Box>
  );
};

export default JobPostingForm;