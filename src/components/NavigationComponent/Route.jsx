import useNavigation from "../../hooks/useNavigation.jsx";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  if (path === currentPath) return children;

  return null;
};

export default Route;
