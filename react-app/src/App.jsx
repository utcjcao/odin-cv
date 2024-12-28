import { useState } from "react";

import "./styles/App.css";

import GeneralInfoForm from "./components/GeneralInfoForm";
import PracticalForm from "./components/PracticalForm";
import EducationForm from "./components/EducationForm";
import Display from "./components/Display";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [practicalInfo, setPracticalInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    discipline: "",
    startdate: "",
    enddate: "",
  });

  return (
    <main>
      <div className="input-container">
        <div className="title">Name</div>
        <GeneralInfoForm updateGeneralInfo={setGeneralInfo}></GeneralInfoForm>
        <div className="title">Experience</div>
        <PracticalForm
          updatePracticalForm={setPracticalInfo}
          practicalForm={practicalInfo}
        ></PracticalForm>
        <div className="title">Education</div>

        <EducationForm updateSchoolData={setEducationInfo}></EducationForm>
      </div>
      <div className="render-container">
        <Display
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
          generalInfo={generalInfo}
        ></Display>
      </div>
    </main>
  );
}

export default App;
