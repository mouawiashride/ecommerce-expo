
import {
  Box,
  Heading,
  Text,
  Colors,
useState,
Rating,
Message
} from "../import";



function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/*  IF THERE IS NO REVIEW */}
      {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        size={10}
        bold={true}
        children={"No REVIEW"}
      /> */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text mb={2} fontSize={11}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            " Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau.The         city is also known for its parks and nightlife."
          }
        />
      </Box>

      {/* WRITE REVIEW */}
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              selectedValue={ratings}
              onValueChange={(value) => setRatings(value)}
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <FontAwesome name="check-square" size={2} />,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              autoCompleteType
              w="full"
              placeholder="This product is good ..."
              borderWidth={0}
              py={4}
              bg={Colors.subGreen}
              _focus={{
                bg:Colors.subGreen
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone> */}
          {/* IF NOT LOGIN */}
          {/* <Message
            color={Colors.white}
            bg={Colors.black}
            size={10}
            bold={true}
            children={"Please 'Login' to write a review "}
          /> */}
        {/* </VStack>
      </Box> */}
    </Box>
  );
}

Review.propTypes = {};

export default Review;
