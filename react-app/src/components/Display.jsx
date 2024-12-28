function Display({ generalInfo, practicalInfo, educationInfo }) {
  return (
    <div className="output">
      <div className="general">
        <div className="name">{generalInfo.name}</div>
        <hr />
        <div className="contact-info">
          {generalInfo.email && generalInfo.phone
            ? `${generalInfo.email} | ${generalInfo.phone}`
            : generalInfo.email || generalInfo.phone}
        </div>
      </div>
      <div className="practical">
        {practicalInfo.map((data) => {
          return (
            <div>
              <div className="practical-header">
                <div className="company-name">{data.company}</div>
                <div>
                  {data.startDate && data.endDate
                    ? `${data.startDate} - ${data.endDate}`
                    : data.startDate || data.endDate}
                </div>
              </div>
              <div className="practical-title">{data.title}</div>
              <div className="practical-resp">
                {data.responsibilities && `- ${data.responsibilities}`}
              </div>
            </div>
          );
        })}
      </div>
      <div className="education">
        <div className="school-name">{educationInfo.school}</div>
        <div className="school-discipline">{educationInfo.discipline}</div>
        {educationInfo.startDate && educationInfo.endDate
          ? `${educationInfo.startDate} - ${educationInfo.endDate}`
          : educationInfo.startDate || educationInfo.endDate}
      </div>
    </div>
  );
}

export default Display;
