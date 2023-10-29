


import {HStack,
  Text,
  FontAwesome,
  PropTypes,InferProps,
  Colors} from "../import";
function Rating({value,text}:InferProps<typeof Rating.propTypes>) {

    const size = 8;
    const color  = Colors.Orange;
  return (
    <HStack space={0.4} mt={1} alignItems="center">
<FontAwesome name={value >= 1 ? "star" : 0.5  ? "star-half-o" : "star-o" } size={size} color={color} />
<FontAwesome name={value >= 2 ? "star" : 1.5  ? "star-half-o" : "star-o" } size={size} color={color} />
<FontAwesome name={value >= 3 ? "star" : 2.5  ? "star-half-o" : "star-o" } size={size} color={color} />
<FontAwesome name={value >= 4 ? "star" : 3.5  ? "star-half-o" : "star-o" } size={size} color={color} />
<FontAwesome name={value >= 5 ? "star" : 4.5  ? "star-half-o" : "star-o" } size={size} color={color} />
    { text &&(<Text fontSize={12} ml={2} >{text }</Text>)}
    </HStack>
  )
}

Rating.propTypes = {
    value:PropTypes.number.isRequired,
    text:PropTypes.string 
}

export default Rating
