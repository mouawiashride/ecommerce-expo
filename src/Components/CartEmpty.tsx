import {useNavigation,Buttone, Box, Center, FontAwesome, Text, Colors } from '../import';
function CartEmpty() {
  const navigation = useNavigation<any>();
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
        <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>CART IS EMPTY</Text>
      </Center>
      <Buttone onPress={()=>{
navigation.navigate("Home")
      }} bg={Colors.black} color={Colors.white}>
        START SHOPPING
      </Buttone>
    </Box>
  );
}

CartEmpty.propTypes = {};

export default CartEmpty;
