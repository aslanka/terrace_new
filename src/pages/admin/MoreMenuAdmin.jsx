import React, { useState, useEffect } from "react";
import SectionDropdown from "./components/SectionDropdown";
import EditableTable from "./components/EditableTable";
import { fetchSet2, updateSet2Section } from "../services/api";

export default function MoreMenuAdmin() {
  const [menuData, setMenuData] = useState({});
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    fetchSet2().then((data) => {
      setMenuData(data);
      setSelectedSection(Object.keys(data)[0]);
    });
  }, []);

  const handleUpdate = (newItems) => {
    updateSet2Section(selectedSection, newItems).then((updated) => {
      setMenuData(updated);
    });
  };

  return (
    <div>
      <h1>More Menu Editor</h1>
      <SectionDropdown
        sections={Object.keys(menuData)}
        selected={selectedSection}
        onChange={setSelectedSection}
      />
      {selectedSection && (
        <EditableTable
          sectionKey={selectedSection}
          items={menuData[selectedSection]}
          isSimpleArray={typeof menuData[selectedSection][0] === "string"}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
