import React from "react";
import FacultyForm from "./forms/FacultyForm";
import IndustryPersonForm from "./forms/IndustryPersonForm";
import StudentForm from "./forms/StudentForm";

const Pages = {
  STUDENT_FORM: StudentForm,
  FACULTY_FORM: FacultyForm,
  INDUSTRY_PERSON_FORM: IndustryPersonForm,
};

const IdeaSubmissionForm = () => {
  const [page, setPage] = React.useState("STUDENT_FORM");

  console.log(page);
  const PageComponent = Pages[page];
  return (
    <>
    <div className="d-flex mt-5">
      <p className="mx-4 border border-1 px-5" onClick={() => setPage("STUDENT_FORM") ? "active" : ""}>Student</p>
      <p className="mx-4 border border-1 px-5" onClick={() => setPage("FACULTY_FORM") ? "active" : ""}>Faculty</p>
      <p className="mx-4 border border-1 px-5" onClick={() => setPage("INDUSTRY_PERSON_FORM") ? "active" : ""}>Industry Person</p>
    </div>
      <PageComponent {...{ setPage }} />
    </>
  );
};

export default IdeaSubmissionForm;
