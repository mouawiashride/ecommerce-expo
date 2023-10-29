import React from "react";
import PropTypes,{InferProps} from "prop-types";
import { Center, Text, View } from "native-base";

function Message({ bg, color, children, size,bold }:InferProps<typeof Message.propTypes>) {
  return (
    <Center  bg={bg} p={4} rounded={5}>
  <Text color={color} fontSize={size} bold={bold ? true : false} >{children}</Text>
    </Center>
  );
}

Message.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  children:PropTypes.node,
  size: PropTypes.number,
  bold: PropTypes.bool
};

export default Message;
