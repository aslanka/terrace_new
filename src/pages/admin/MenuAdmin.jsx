import React, { useState, useEffect } from "react";
import SectionDropdown from "./components/SectionDropdown";
import EditableTable from "./components/EditableTable";
import { fetchSet1 } from "./services/api";

export default function MenuAdmin() {
  const [menuData, setMenuData] = useState({});
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    fetchSet1().then((data) => {
      setMenuData(data);
      setSelectedSection(Object.keys(data)[0]); // default
    });
  }, []);

  return (
    <div>
      <h1>Menu Editor</h1>
      <SectionDropdown
        sections={Object.keys(menuData)}
        selected={selectedSection}
        onChange={setSelectedSection}
      />
      {selectedSection && (
        <EditableTable
          sectionKey={selectedSection}
          items={menuData[selectedSection]}
          onUpdate={(newItems) => {
            setMenuData((prev) => ({ ...prev, [selectedSection]: newItems }));
          }}
        />
      )}
    </div>
  );
}
