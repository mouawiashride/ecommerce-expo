import { Box,useState,Colors,HomeProducts,HomeSearch } from "../import";
export default function HomeScreen() {
  const [Search, setSearch] = useState<string>("");
  return (
    <Box flex={1} bg={Colors.subGreen}> 
       <HomeSearch Search={Search} setSearch={setSearch} />
       <HomeProducts Search={Search} />
    </Box>
  );
}

