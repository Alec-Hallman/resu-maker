import { useEffect, useState } from "react";
import Addmenu from "./AddMenu";
import Info from "../Data/Info";
import CreatePage from "./CreatePage";

const MainMenu = () => {
  const [displayAdd, setAdd] = useState(false);
  const [displayCreate, setCreate] = useState(false);
  const addOptions = [
    "Volunteer",
    "Projects",
    "Work",
    "Education",
    "Awards",
    "Hobbies",
    "Skills",
  ];
  return (
    <>
      {(displayAdd === false) & (displayCreate === false) ? (
        <>
          <p>Would you like to:</p>

          <button
            onClick={() => {
              setAdd(true);
            }}
          >
            Add
          </button>
          <span> or </span>
          <button
            onClick={() => {
              setCreate(true);
            }}
          >
            Create
          </button>
        </>
      ) : (
        <></>
      )}
      {displayAdd ? (
        <>
          <Addmenu
            options={addOptions}
            displayAdd={setAdd}
            displayCreate={setCreate}
          ></Addmenu>
        </>
      ) : (
        <></>
      )}
      {displayCreate ? (
        <>
          <CreatePage
            displayAdd={setAdd}
            displayCreate={setCreate}
          ></CreatePage>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default MainMenu;
