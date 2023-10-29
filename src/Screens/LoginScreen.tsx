import { Text,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
  Controller,
  useForm,
  MaterialIcons,
  Ionicons,
  Colors,
  LoginUser
} from "../import";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const {
    control,
    formState: { errors,isValid,isDirty },
  } = useForm<LoginUser>({ mode: "onChange" });


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
        <Text color={Colors.red}>{isValid}</Text>
        <Text color={Colors.red}>{isDirty}</Text>
        <Heading>Login</Heading>
        <VStack space={5} pt="6">
          {/* Email */}
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
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
                pl="2"
                onChangeText={(val) => onChange(val)}
                value={value}
                color={Colors.main}
                borderBottomColor={Colors.underline}
              />
            )}
          />
          {errors.email && <Text color={Colors.red} >{errors.email.message}</Text>}
          {/* Password */}
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$%^&])[0-9a-zA-Z#@$%^&]+$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (#,$,@,%,&)",
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
                w="70%"
                pl="2"
                color={Colors.main}
                borderBottomColor={Colors.underline}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
          />
          {errors.password && <Text color={Colors.red}>{errors.password.message}</Text>}
        </VStack>
        <Button
        disabled={!isDirty || !isValid}
          _pressed={{
            bg: Colors.main,
          }}
          my="30"
          w="40%"
          rounded="50"
          _text={{
            color: Colors.white
          }}
          bg={!isDirty || !isValid ?  Colors.white : Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
            LOGIN
        </Button>
        <Pressable mt="4" onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>SIGNUP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
