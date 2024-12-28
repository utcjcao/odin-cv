function EducationForm({ updateSchoolData }) {
  /*
    make a new school object, 
    where school = 
    {
    school: 
    discipline:
    startdate:
    enddate:
    }
    */
  return (
    <div className="education-input">
      <input
        type="text"
        placeholder="school"
        onChange={(event) => {
          updateSchoolData((prev) => ({ ...prev, school: event.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="discipline"
        onChange={(event) => {
          updateSchoolData((prev) => ({
            ...prev,
            discipline: event.target.value,
          }));
        }}
      />
      <input
        type="date"
        placeholder="start date"
        onChange={(event) => {
          updateSchoolData((prev) => ({
            ...prev,
            schoolDate: event.target.value,
          }));
        }}
      />
      <input
        type="date"
        placeholder="end date"
        onChange={(event) => {
          updateSchoolData((prev) => ({
            ...prev,
            endDate: event.target.value,
          }));
        }}
      />
    </div>
  );
}

export default EducationForm;
