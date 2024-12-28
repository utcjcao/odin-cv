function GeneralInfoForm({ updateGeneralInfo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          updateGeneralInfo((prev) => ({ ...prev, name: event.target.value }));
        }}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(event) => {
          updateGeneralInfo((prev) => ({ ...prev, email: event.target.value }));
        }}
      />
      <input
        type="tel"
        placeholder="phone"
        onChange={(event) => {
          updateGeneralInfo((prev) => ({ ...prev, phone: event.target.value }));
        }}
      />
    </div>
  );
}

export default GeneralInfoForm;
