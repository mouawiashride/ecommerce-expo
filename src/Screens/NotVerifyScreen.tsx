import {Box, Center, Image, VStack,
  Colors,
  Buttone} from "../import";
export default function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250} > 
      <Image source={require("../../assets/favicon.png")} alt="LOGO" size="lg" />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>REGISTER</Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>LOGIN</Buttone>
      </VStack>
    </Box>
  );
}
