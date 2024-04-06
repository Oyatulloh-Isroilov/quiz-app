import { Button, Text, Box, chakra, Flex } from "@chakra-ui/react";
import React from "react";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={6} margin="auto" marginTop={"5"}>
      <Text color={"teal.500"}>Question:{questionNr}/{totalQuestions} </Text>
      <Text fontSize="xl" mb={4} dangerouslySetInnerHTML={{ __html: question }}/>
      <Flex direction="column">
        {answers.map((el) => (
          <Button key={el} my={2} variant="outline" isDisabled={userAnswer ? true : false} onClick={callback} value={el}><chakra.span dangerouslySetInnerHTML={{ __html: el }} /></Button>
        ))}
      </Flex>
    </Box>
  );
};
export default QuestionCard;
