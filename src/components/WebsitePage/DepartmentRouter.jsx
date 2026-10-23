import React from "react";
import { useParams } from "react-router-dom";
 
import RTIForm from "../WebsiteForms/RTIForm";
import Department from "./Department";

function DepartmentRouter() {
  const { slug } = useParams();

  // ✅ Agar slug RTI ka hai to RTIForm
  if (slug === "right-to-information-rti") {
    return <RTIForm />;
  }

  // ✅ Warna Career
  return <Department />;
}

export default DepartmentRouter;