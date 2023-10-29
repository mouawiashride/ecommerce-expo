import {
  Constants,
  StripeProvider,
  Stripe,
  Paypal,
  PaymentScreen,
  Ecommerce,
  BottomNav,
  createNativeStackNavigator,
  NavigationContainer,
  OrderScreen,
  QueryClient,
  QueryClientProvider,
  NativeBaseProvider,
  StatusBar,
  LogBox,
  LoginScreen,
  RigesterScreen,
} from "./src/import";

LogBox.ignoreLogs([
  "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
]);
const Stack = createNativeStackNavigator();
export const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StripeProvider
        publishableKey={
          Constants?.expoConfig?.extra?.EXPO_PUBLIC_STRIPE_PUBLIC_KEY
        }
      >
        <Ecommerce>
          <NativeBaseProvider>
            <NavigationContainer>
              <StatusBar hidden={true} />
              <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RigesterScreen} />
                <Stack.Screen name="order" component={OrderScreen} />
                <Stack.Screen name="Bottom" component={BottomNav} />
                <Stack.Screen name="payment" component={PaymentScreen} />
                <Stack.Screen name="paypal" component={Paypal} />
                <Stack.Screen name="discover" component={Paypal} />
                <Stack.Screen name="googlepay" component={Paypal} />
                <Stack.Screen name="stripe" component={Stripe} />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>
        </Ecommerce>
      </StripeProvider>
    </QueryClientProvider>
  );
}
