const loadFromLocalStorage = (key, defaultValue) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultValue;
};

let volunteer = loadFromLocalStorage("volunteer", []);
let work = loadFromLocalStorage("work", []);
let education = loadFromLocalStorage("education", []);
let awards = loadFromLocalStorage("awards", []);
let hobbies = loadFromLocalStorage("hobbies", []);
let skills = loadFromLocalStorage("skills", []);
let projects = loadFromLocalStorage("projects", []);

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const Info = {
  setValues: ({ skill, wrk, edu, awrds, hob, volun, proj }) => {
    if (skill.length > 0) {
      skills.push(skill);
      saveToLocalStorage("skills", skills);
    }

    if (wrk.length > 0) {
      work.push(wrk);
      saveToLocalStorage("work", work);
    }

    if (edu.length > 0) {
      education.push(edu);
      saveToLocalStorage("education", education);
    }

    if (awrds.length > 0) {
      awards.push(awrds);
      saveToLocalStorage("awards", awards);
    }

    if (hob.length > 0) {
      hobbies.push(hob);
      saveToLocalStorage("hobbies", hobbies);
    }

    if (volun.length > 0) {
      volunteer.push(volun);
      saveToLocalStorage("volunteer", volunteer);
    }

    if (proj.length > 0) {
      projects.push(proj);
      saveToLocalStorage("projects", projects);
    }
  },
  getValues: () => ({
    volunteer,
    work,
    education,
    awards,
    hobbies,
    skills,
    projects,
  }),
};

export default Info;
