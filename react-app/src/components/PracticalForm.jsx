// imagine pacticalform as a list of practical data objects, so [{}, {}, {}]

function PracticalForm({ practicalForm, updatePracticalForm }) {
  return (
    <div className="practical-input">
      {practicalForm.map((data) => {
        return (
          <PracticalData
            key={data.id}
            updatePracticalForm={updatePracticalForm}
            data={data}
          ></PracticalData>
        );
      })}
      <button onClick={() => addData(updatePracticalForm)}>
        add practical exp
      </button>
    </div>
  );
}

function PracticalData({ updatePracticalForm, data }) {
  /*
      make a new practical object, and append
      where practical = 
      {
      company: 
      title:
      responsibilities:
      startdate:
      enddate:
      }
      */
  return (
    <div className="practical-card">
      <div>
        <input
          type="text"
          placeholder="company"
          onChange={(event) => {
            editData(
              updatePracticalForm,
              data.id,
              "company",
              event.target.value
            );
          }}
        />
        <input
          type="date"
          placeholder="start date"
          onChange={(event) => {
            editData(
              updatePracticalForm,
              data.id,
              "startDate",
              event.target.value
            );
          }}
        />
        <input
          type="date"
          placeholder="end date"
          onChange={(event) => {
            editData(
              updatePracticalForm,
              data.id,
              "endDate",
              event.target.value
            );
          }}
        />
        <button
          className="remove-button"
          onClick={() => {
            deleteData(updatePracticalForm, data.id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(event) => {
            editData(updatePracticalForm, data.id, "title", event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="responsibilities"
          onChange={(event) => {
            editData(
              updatePracticalForm,
              data.id,
              "responsibilities",
              event.target.value
            );
          }}
        />
      </div>
    </div>
  );
}

function addData(updatePracticalForm) {
  let data = {
    company: "",
    title: "",
    responsibilities: "",
    startdate: "",
    enddate: "",
    id: crypto.randomUUID(),
  };
  updatePracticalForm((prev) => [...prev, data]);
}

function editData(updatePracticalForm, itemId, attr, newValue) {
  updatePracticalForm((prev) => {
    const index = prev.findIndex((data) => data.id === itemId);

    if (index !== -1) {
      const newItems = [...prev];
      newItems[index] = { ...newItems[index], [attr]: newValue };
      return newItems;
    }

    return prev;
  });
}

function deleteData(updatePracticalForm, itemId) {
  updatePracticalForm((prev) => {
    const index = prev.findIndex((data) => data.id === itemId);

    if (index !== -1) {
      const newItems = [...prev];
      newItems.splice(index, 1); // 2nd parameter means remove one item only
      return newItems;
    }

    return prev;
  });
}

export default PracticalForm;
