import { createContext } from "react";
import {useState} from "../import";

interface EcommerceContextProps {
    cartId: string;
    setCartId: React.Dispatch<React.SetStateAction<string>>;
    totalItems:number;
    setTotlaItems:React.Dispatch<React.SetStateAction<number>>;
  }
  export const EcommerceContext = createContext<EcommerceContextProps>({
    cartId: '',
    setCartId: () => {},
    totalItems:0,
    setTotlaItems:() => {},
  });

  export default function Ecommerce({ children }: { children: React.ReactNode }) {
    
    const [cartId, setCartId] = useState<string>(''); // The state should be just a string, not an object
    const [totalItems, setTotlaItems] = useState<number>(0); // The state should be just a string, not an object

  return (
    <EcommerceContext.Provider value={{ cartId, setCartId,totalItems,setTotlaItems }}>
      {children}
    </EcommerceContext.Provider>
  )
}