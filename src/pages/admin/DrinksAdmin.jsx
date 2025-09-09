import React, { useState, useEffect } from "react";
import SectionDropdown from "./components/SectionDropdown";
import EditableTable from "./components/EditableTable";
import { fetchSet3, updateSet3Section } from "../services/api";

export default function DrinksAdmin() {
  const [drinksData, setDrinksData] = useState({});
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    fetchSet3().then((data) => {
      setDrinksData(data);
      setSelectedSection(Object.keys(data)[0]);
    });
  }, []);

  const handleUpdate = (newItems) => {
    updateSet3Section(selectedSection, newItems).then((updated) => {
      setDrinksData(updated);
    });
  };

  return (
    <div>
      <h1>Drinks Menu Editor</h1>
      <SectionDropdown
        sections={Object.keys(drinksData)}
        selected={selectedSection}
        onChange={setSelectedSection}
      />
      {selectedSection && (
        <EditableTable
          sectionKey={selectedSection}
          items={drinksData[selectedSection]}
          isSimpleArray={typeof drinksData[selectedSection][0] === "string"}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
