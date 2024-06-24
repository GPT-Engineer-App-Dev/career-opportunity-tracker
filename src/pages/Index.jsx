import { Box, Container, Heading, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const jobListings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "Develop and maintain web applications."
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    description: "Lead product development teams to success."
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "Create user-friendly interfaces and experiences."
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" bg="blue.500" color="white" py={4} textAlign="center">
        <Heading>Job Listings</Heading>
      </Box>
      <VStack spacing={8} py={8}>
        {jobListings.map((job, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <HStack justifyContent="space-between">
              <Heading size="md">{job.title}</Heading>
              <Text>{job.location}</Text>
            </HStack>
            <Text fontWeight="bold">{job.company}</Text>
            <Text>{job.description}</Text>
          </Box>
        ))}
      </VStack>
      <Divider />
      <Box as="footer" bg="gray.200" color="gray.700" py={4} textAlign="center">
        <Text>&copy; 2023 Job Listings. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;