import { useContext } from "react";
import NavigationContext from "../context/NavigationContext.jsx";

export default function useNavigation() {
  return useContext(NavigationContext);
}
