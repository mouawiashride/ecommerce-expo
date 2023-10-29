import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { Colors } from "../../color";

export default function Orders() {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              21516451664564
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              JUN 22 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
        {/* NOT PAID */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              21516451664564
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              JUN 24 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              $44
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
