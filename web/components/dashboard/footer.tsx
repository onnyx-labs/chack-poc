import {
  Heading,
  IconButton,
  VStack,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import { SiTwitter, SiGithub } from 'react-icons/si';

export const SimpleFooter: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (!isDesktop) return null;

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '100px',
        backgroundImage: 'linear-gradient(to left, #9945FF, #14F195)',
      }}
    >
      <VStack>
        <HStack padding={5} spacing={4}>
          <Heading size="md">Onnyx Labs</Heading>
          <HStack spacing={1}>
            <a href={'https://twitter.com/onnyxprotocol'} target="_blank">
              <IconButton
                aria-label="Twitter"
                icon={<SiTwitter />}
              ></IconButton>
            </a>
            <a href={'https://github.com/onnyx-labs'} target="_blank">
              <IconButton aria-label="Github" icon={<SiGithub />}></IconButton>
            </a>
          </HStack>
        </HStack>
      </VStack>
    </footer>
  );
};
export default SimpleFooter;
