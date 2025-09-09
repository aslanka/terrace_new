import { useState, useEffect } from "react";

export default function ItemFormModal({ initialData = {}, onSave, onClose }) {
  const [form, setForm] = useState({ name: "", price: "", desc: "" });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="modal">
      <h3>{initialData ? "Edit Item" : "Add Item"}</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
      <textarea name="desc" value={form.desc} onChange={handleChange} placeholder="Description" />
      <button onClick={() => onSave(form)}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
