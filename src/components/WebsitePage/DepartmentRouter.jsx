import React from "react";
import { useParams } from "react-router-dom";
import Career from "./Career";
import RTIForm from "../WebsiteForms/RTIForm";

function DepartmentRouter() {
  const { slug } = useParams();

  // ✅ Agar slug RTI ka hai to RTIForm
  if (slug === "right-to-information-rti") {
    return <RTIForm />;
  }

  // ✅ Warna Career
  return <Career />;
}

export default DepartmentRouter;