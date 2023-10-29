import {
  CardField,
  useStripe,
  usePaymentSheet,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import { Box } from "native-base";
import { Buttone, Colors, useEffect, useState } from "./../../import";
import {StyleSheet} from 'react-native';

export default function Stripe({navigation}) {
  
    const { confirmPayment } = useStripe();

    
  
  return (
    <Box style={styles.container} >
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          //   console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          //   console.log('focusField', focusedField);
        }}
      />
       <Buttone   bg={Colors.black} color={Colors.main} onPress={()=>navigation.goBack()} >
        Back
      </Buttone>
      <Buttone   bg={Colors.white} color={Colors.main}  >
        Buy
      </Buttone>
    </Box>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      margin: 20,
    },
    input: {
      backgroundColor: "#efefefef",
  
      borderRadius: 8,
      fontSize: 20,
      height: 50,
      padding: 10,
    },
    card: {
      backgroundColor: "#efefefef",
    },
    cardContainer: {
      height: 50,
      marginVertical: 30,
    },
  });