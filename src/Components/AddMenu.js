import { useState } from "react";
import Selectbutton from "./SelectButton";
import AddField from "./AddInput";

const Addmenu = ({ options, displayAdd, displayCreate }) => {
  const [canSelect, setCanSelect] = useState(true);
  const [selected, setSelected] = useState([]);
  const handelClick = (option) => {
    if (selected.includes(option)) {
      var index = selected.indexOf(option);
      if (index !== 0) {
        selected.splice(index, index);
      } else {
        selected.shift();
      }
    } else {
      selected.push(option);
      setSelected([...selected]);
    }
  };
  return (
    <>
      {canSelect ? (
        <>
          {" "}
          {options.map((string) => {
            return (
              <>
                <Selectbutton
                  onClick={() => {
                    handelClick(string);
                  }}
                ></Selectbutton>
                <span>{string}</span>
                <br></br>
              </>
            );
          })}
          <button
            className="Submit-btn"
            onClick={() => {
              setCanSelect(false);
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <>
          {selected.length === 0 ? (
            (() => {
              displayAdd(false);
              displayCreate(false);
            },
            (<>{displayAdd(false)}</>))
          ) : (
            <>
              {" "}
              <AddField
                fields={selected}
                displayAdd={displayAdd}
                displayCreate={displayCreate}
              ></AddField>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Addmenu;
