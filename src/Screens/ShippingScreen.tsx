import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
  Colors,
Buttone,
useNavigation
} from "../import";


const ShippingInputs = [
    {
        label:"ENTER CITY",type:"text"
    },
    {
        label:"ENTER COUNTRY",type:"text"
    },
    {
        label:"ENTER POSTAL CODE",type:"text"
    },
    {
        label:"ENTER ADDRESS",type:"text"
    },
];

export default function ShippingScreen() {
  const navigation = useNavigation<any>();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((input,index)=>(<FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {input.label}
              </FormControl.Label>
              <Input
              type={input.type==="text" ? "text" : "password"}
                borderWidth={0.2}
                borderColor={Colors.main}
                bg={Colors.subGreen}
                py={4}
                color={Colors.main}
                _focus={{
                    bg:Colors.subGreen,
                    borderWidth:1,
                    borderColor:Colors.main
                }}
              />
            </FormControl>))}
            <Buttone onPress={()=> navigation.navigate("Checkout")} bg={Colors.main} color={Colors.white} mt={5}>
                 CONTINUE
          </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
