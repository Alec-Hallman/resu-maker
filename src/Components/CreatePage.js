import { useState } from "react";
import Info from "../Data/Info";
import "./CompStyles.css";
import Map from "./Map";
import GeneratePDF from "./GeneratePDF";
const CreatePage = ({ displayAdd, displayCreate }) => {
  const [selected, setSelected] = useState([]);
  const [display, setDisplay] = useState(true);
  const [data, setData] = useState({
    Volunteer: [],
    Work: [],
    Education: [],
    Awards: [],
    Hobbies: [],
    Skills: [],
    Projects: [],
  });
  const [Titles, setTitle] = useState([]);
  const manageTitle = (value, tag) => {
    if (Titles.includes(value)) {
      var count = data[tag].length;
      if (count === 0) {
        var index = Titles.indexOf(value);
        Titles.splice(index, 1);
      }
    } else {
      Titles.push(value);
      setTitle([...Titles]);
    }
  };
  const addInformation = (tag, value) => {
    setData((prevData) => ({
      ...prevData,
      [tag]: prevData[tag] ? [...prevData[tag], value] : [value],
    }));
  };
  const handelClick = (value, tag, title) => {
    if (data[tag].includes(value)) {
      if (data[tag].length === 2) {
        data[tag] = [];
      } else {
        var index = data[tag].indexOf(value);
        data[tag].splice(index, 1);
      }
      setData({ ...data });
      console.log(data[tag]);
    } else {
      if (!data[tag].includes(title)) {
        data[tag].push(title);
      }
      data[tag].push(value);
      setData({ ...data });
      console.log(data[tag]);
    }
    manageTitle(title, tag);
    if (selected.includes(tag)) {
      var length = data[tag].length;
      if (length === 0) {
        var index = selected.indexOf(tag);
        selected.splice(index, 1);
        setSelected([...selected]);
      }
    } else {
      selected.push(tag);
      setSelected([...selected]);
    }
  };
  var stuff = Info.getValues();
  return (
    <>
      {display ? (
        <div className="Container">
          <div className="Experience-back">
            <p className="Experience-head">Volunteer</p>
            <Map
              items={stuff.volunteer}
              onClick={handelClick}
              tag="Volunteer"
            ></Map>
          </div>
          <div className="Experience-back">
            <p className="Experience-head">Work</p>
            <Map items={stuff.work} onClick={handelClick} tag="Work"></Map>
          </div>
          <div className="Experience-back">
            <p className="Experience-head">Education</p>
            <Map
              items={stuff.education}
              onClick={handelClick}
              tag="Education"
            ></Map>
          </div>
          <div className="Experience-back">
            <p className="Experience-head">Awards</p>
            <Map items={stuff.awards} onClick={handelClick} tag="Awards"></Map>
          </div>
          <div className="Experience-back">
            <p className="Experience-head">Hobbies</p>
            <Map
              items={stuff.hobbies}
              onClick={handelClick}
              tag="Hobbies"
            ></Map>
          </div>
          <div className="Experience-back">
            <p className="Experience-head">Skills</p>
            <Map items={stuff.skills} onClick={handelClick} tag="Skills"></Map>
          </div>
          <div className="Experience-back">
            <p className="Experience-head">Projects</p>
            <Map
              items={stuff.projects}
              onClick={handelClick}
              tag="Projects"
            ></Map>
          </div>

          <button
            className="Submit-btn"
            onClick={() => {
              setDisplay(false);
            }}
          >
            {" "}
            Done{" "}
          </button>
        </div>
      ) : (
        <GeneratePDF
          data={data}
          order={selected}
          titles={Titles}
          addDisplpay={displayAdd}
          createDisplay={displayCreate}
        ></GeneratePDF>
      )}
    </>
  );
};
export default CreatePage;
