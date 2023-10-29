import { Tabs,Colors, Text, Center, Image, Heading } from "../import";

export default function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          rounded="full"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Mouawia Sharedi
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
        Joined JUN 20 2023
        </Text>
      </Center>
    {/* TABS */}
    <Tabs/>
    </>
  );
}
