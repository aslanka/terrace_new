export default function SectionDropdown({ sections, selected, onChange }) {
    return (
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {sections.map((sec) => (
          <option key={sec} value={sec}>
            {sec}
          </option>
        ))}
      </select>
    );
  }
  