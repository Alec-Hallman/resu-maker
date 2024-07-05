import { useEffect, useState } from "react";
import "./CompStyles.css";
import Info from "../Data/Info";
import DescriptionMap from "./MapDescription";
import Map from "./Map";
const AddField = ({ fields, displayAdd, displayCreate }) => {
  const [descriptions, setDescriptions] = useState(["Title"]);
  var [index, setIndex] = useState(0);
  const [value, setValue] = useState([]);
  var [vol, setVol] = useState([]);
  var [proj, setProj] = useState([]);
  var [wrk, setWrk] = useState([]);
  var [edu, setEdu] = useState([]);
  var [awrds, setAwrds] = useState([]);
  var [hob, setHob] = useState([]);
  var [skill, setSkill] = useState([]);
  var [dscripCount, setDscripCount] = useState(1);
  var [userContent, setContent] = useState([]);
  const handelClick = () => {
    console.log(userContent + "UserContent" + "Fields: " + fields[index]);
    if (fields[index] === "Volunteer") {
      vol = userContent;
      setVol([...vol]);
      console.log("setting vol " + vol);
    } else if (fields[index] === "Work") {
      wrk = userContent;
      setWrk([...wrk]);
      console.log("setting wrk " + wrk);
    } else if (fields[index] === "Education") {
      edu = userContent;
      setEdu([...edu]);
      console.log("setting edu " + edu);
    } else if (fields[index] === "Awards") {
      awrds = userContent;
      setAwrds([...awrds]);
      console.log("setting awrds");
    } else if (fields[index] === "Hobbies") {
      hob = userContent;
      setHob([...hob]);
      console.log("setting hob");
    } else if (fields[index] === "Projects") {
      console.log("setting projects");
      proj = userContent;
      setProj([...proj]);
    } else {
      skill = userContent;
      setSkill([...skill]);
      console.log("setting skills");
    }

    console.log("Setting values");
    setIndex((index += 1));
    setValue("");
    if (index === fields.length) {
      console.log(vol, wrk, edu, awrds, hob, skill, proj);
      Info.setValues({
        volun: vol,
        wrk: wrk,
        edu: edu,
        awrds: awrds,
        hob: hob,
        skill: skill,
        proj: proj,
      });
      displayAdd(false);
      displayCreate(false);
    } else {
      console.log("Clearing user content");
      userContent = [];
      setContent([...userContent]);
    }
  };
  return (
    <>
      <p>{fields[index]}</p>
      <DescriptionMap
        descriptions={descriptions}
        list={userContent}
      ></DescriptionMap>
      <br></br>
      <button
        className="Submit-btn"
        onClick={() => {
          descriptions.push("description " + dscripCount);
          setDescriptions([...descriptions]);
          setDscripCount((dscripCount += 1));
          userContent.push("");
          setContent([...userContent]);
        }}
      >
        add
      </button>
      <br></br>
      <button className="Submit-btn" onClick={handelClick}>
        {index === fields.length - 1 ? "Done" : "Next"}
      </button>
    </>
  );
};
export default AddField;
