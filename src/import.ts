import apiclient from "./confiq/axios";
import { PRODUCT } from "./services/products";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Components/Loading";
import { CART } from "./services/carts";
import { useState, useEffect, useMemo } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
  Heading,
  Spacer,
  Spinner,
  Button,
  FormControl,
  Box,
  ScrollView,
  Image,
  View,Modal,
  Icon,
  Input,
  Flex,
  Pressable,
  Center,
} from "native-base";
import { Colors } from "./color";
import { RenderHTML } from "react-native-render-html";
import NumericInput from "react-native-numeric-input";
import Buttone from "../src/Components/Buttone";
import Review from "../src/Components/Review";
import { FontAwesome } from "@expo/vector-icons";
import { LoginUser } from "./interfaces/Users";
import { useWindowDimensions } from "react-native";
import Error from "../src/Components/alerts/Error";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { EcommerceContext } from "../src/context/Ecommerce";
import { Errors } from "../src/interfaces/Errors";
import { HandleError } from "../src/utils/HandleError";
import { LineItem } from "../src/interfaces/LineItem";
import PropTypes, { InferProps } from "prop-types";
import { ToastAndroid } from "react-native";
import { queryClient } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import Animated, {
  Transition,
  Layout,
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import { NativeBaseProvider, StatusBar } from "native-base";
import { LogBox } from "react-native";
import LoginScreen from "./../src/Screens/LoginScreen";
import RigesterScreen from "./../src/Screens/RigesterScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OrderScreen from "./../src/Screens/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./../src/Navigations/BottomNav";
import Ecommerce from "./../src/context/Ecommerce";

import PaymentScreen from "./../src/Screens/PaymentScreen";
import Paypal from "./../src/Components/Payments/Paypal";
import Stripe from "./../src/Components/Payments/Stripe";
import { StripeProvider } from "@stripe/stripe-react-native";
import Constants from "expo-constants";
import Tabs from "./../src/Components/Profile/Tabs";
import OrderInfo from "./../src/Components/OrderInfo";
import OrderIterm from "./../src/Components/OrderIterm";
import PlaceOrderModel from "./../src/Components/PlaceOrderModel";
import OrderModel from "./../src/Components/OrderModel";
import HomeProducts from "./../src/Components/HomeProducts";
import HomeSearch from "./../src/Components/HomeSearch";
import CartEmpty from "./../src/Components/CartEmpty";
import CartItems from "./../src/Components/CartItems";
import Rating from "./../src/Components/Rating";
import Message from "./../src/Components/Notifications/Message";

export {
  NumericInput,
  Buttone,
  useNavigation,
  Review,
  apiclient,
  PRODUCT,
  useQuery,
  Loading,
  useMemo,
  Controller,
  useForm,
  Alert,
  CloseIcon,
  IconButton,
  Input,
  SwipeListView,
  Stack,
  Text,
  VStack,
  Animated,
  View,
  ToastAndroid,
  Box,
  FormControl,
  OrderModel,
  ScrollView,
  Image,
  Heading,
  HStack,
  Button,
  Center,
  Spacer,
  LineItem,
  Spinner,
  useState,
  Colors,
  CART,
  Flex,
  Icon,
  CartEmpty,
  CartItems,
  FontAwesome,
  useEffect,
  OrderInfo,
  OrderIterm,
  PlaceOrderModel,
  Pressable,
  Transition,
  HomeProducts,Modal,
  HomeSearch,
  RenderHTML,
  useWindowDimensions,
  Rating,
  Message,
  Error,
  Layout,
  FadeInUp,
  FadeOutDown,
  useMutation,
  useContext,
  EcommerceContext,
  Errors,
  HandleError,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome5,
  queryClient,
  Constants,
  NativeBaseProvider,
  StatusBar,
  LogBox,
  LoginScreen,
  RigesterScreen,
  QueryClient,
  QueryClientProvider,
  OrderScreen,
  NavigationContainer,
  createNativeStackNavigator,
  BottomNav,
  Ecommerce,
  Tabs,
  PaymentScreen,
  Paypal,
  Stripe,
  StripeProvider,
  PropTypes,
};
export type { LoginUser, InferProps };
