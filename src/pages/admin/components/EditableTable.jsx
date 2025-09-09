import React, { useState } from "react";
import ItemFormModal from "./ItemFormModal";

export default function EditableTable({ sectionKey, items, onUpdate }) {
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    onUpdate(updated);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Item</button>
      <table>
        <thead>
          <tr><th>Name</th><th>Price</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name || item}</td>
              <td>{item.price || ""}</td>
              <td>{item.desc || ""}</td>
              <td>
                <button onClick={() => { setEditIndex(idx); setShowForm(true); }}>Edit</button>
                <button onClick={() => handleDelete(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <ItemFormModal
          initialData={items[editIndex]}
          onSave={(newItem) => {
            const updated = [...items];
            if (editIndex != null) updated[editIndex] = newItem;
            else updated.push(newItem);
            onUpdate(updated);
            setShowForm(false);
            setEditIndex(null);
          }}
          onClose={() => {
            setShowForm(false);
            setEditIndex(null);
          }}
        />
      )}
    </div>
  );
}
