import ReactDOM from "react-dom";
import { useEffect } from "react";

const ModalComponent = ({ onClick, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClick}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        {children} {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container"),
  );
};
export default ModalComponent;
