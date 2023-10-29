import "dotenv/config";

export default  {
  name: 'ecommerceapp',
  version: '1.0.0',
  expo: {
    plugins:[[
      "@stripe/stripe-react-native",
        {
          "merchantIdentifier": 'fdd',
          "enableGooglePay": true
        }
    ]],
    extra: {
      EXPO_PUBLIC_API_URL:process.env.EXPO_PUBLIC_API_URL ,
      EXPO_PUBLIC_CHEC_PUBLIC_KEY:process.env.EXPO_PUBLIC_CHEC_PUBLIC_KEY ,
      EXPO_PUBLIC_STRIPE_PUBLIC_KEY: process.env.EXPO_PUBLIC_STRIPE_PUBLIC_KEY,
        "eas": {
          "projectId": "edc39a72-18a5-4296-8749-4a6bca5592ae"
        }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/favicon.png",
        backgroundColor: "#488600"
      },
      package: "com.mouawia.ecommerceapp"
    }
  
  },
   
};