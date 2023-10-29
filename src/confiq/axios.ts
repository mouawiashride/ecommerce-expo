import axios from "axios";
import Constants from "expo-constants";

export default axios.create({
  baseURL: Constants?.expoConfig?.extra?.EXPO_PUBLIC_API_URL,
  headers: {
    "X-Authorization": Constants?.expoConfig?.extra?.EXPO_PUBLIC_CHEC_PUBLIC_KEY,
    Accept: "application/json",
    "Content-Type": "application/json"
  },
});
