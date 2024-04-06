import { chakra, Stack, Center } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Center p={[2, 5]}>
      <Stack direction="column" spacing={6} alignItems="center">
        <chakra.h1 fontSize={{ base: '4xl', sm: '5xl' }} fontWeight="bold" textAlign="center">Quiz App</chakra.h1>
      </Stack>
    </Center>
  );
};

export default HeroSection;
