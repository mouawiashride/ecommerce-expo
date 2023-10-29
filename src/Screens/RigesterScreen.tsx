import {
  Text,
  Controller,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Colors,
  Pressable,
} from "../import";

export default function RigesterScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>ٍSIGN UP</Heading>
        <VStack space={5} pt="6">
          {/* USERNAME */}
          <Controller
            control={control}
            name="username"
            defaultValue=""
            rules={{
              required: 'User name is required',
              minLength: {
                value: 6,
                message: 'User name must be at least 6 characters long',
              },
              pattern: {
                value: /^(?=.*[a-zA-Z]).+$/,
                message: 'User name must contain at least one letter',
              },
            }}
            render={({ field: { onChange, value } }) => (
          <Input
            InputLeftElement={
              <Feather name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="Mouawia Sharedi"
            w="70%"
            onChangeText={(val) => onChange(val)}
            value={value}
            type="text"
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          )}
          />
          {errors.username && <Text>{errors.username.message}</Text>}
          {/* Email */}
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field: { onChange, value } }) => (
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            onChangeText={(val) => onChange(val)}
            value={value}
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          )}
          />
          {errors.email && <Text>{errors.email.message}</Text>}
          {/* Password */}
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$%^&])[0-9a-zA-Z#@$%^&]+$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (#,$,@,%,&)',
              },
            }}
            render={({ field: { onChange, value } }) => (
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="********"
            type="password"
            onChangeText={(val) => onChange(val)}
            value={value}
            w="70%"
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          )}
          />
          {errors.password && <Text>{errors.password.message}</Text>}
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my="30"
          _text={{
            color: !isDirty || !isValid   ? Colors.main : Colors.white
          }}
          w="40%"
          rounded="50"
          bg={Colors.main}
          onPress={() => navigation.navigate("Login")}
        >
          SIGN UP
        </Button>
        <Pressable mt="4" onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
