import { useState } from "react";
import "./CompStyles.css";

const Selectbutton = ({ onClick }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      {checked ? (
        <button
          onClick={() => {
            setChecked(!checked);
            onClick();
          }}
          className="Select-btn"
        >
          ✅
        </button>
      ) : (
        <button
          onClick={() => {
            setChecked(!checked);
            onClick();
          }}
          className="Select-btn"
        >
          ☐
        </button>
      )}
    </>
  );
};
export default Selectbutton;
