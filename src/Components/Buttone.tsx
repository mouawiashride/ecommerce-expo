import PropTypes, { InferProps } from "prop-types";
import { Button } from "native-base";

function Buttone({
  mt,
  bg,
  color,
  children,
  disabled,
  onPress,
}: InferProps<typeof Buttone.propTypes>) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{
        bg: bg,
      }}
      disabled={disabled ? true : false }
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

Buttone.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  mt: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.node,
  disabled:PropTypes.bool
};

export default Buttone;
