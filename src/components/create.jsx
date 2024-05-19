import { useState } from "react";
import supabase from "../config/supabaseClient";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Remplissez tous les champs correctement");
      return;
    }
    const { data, error } = await supabase
      .from('learningTable')
      .insert([{ title, method, rating }]);

    if (error) {
      console.log(error);
      setFormError("Remplissez tous les champs correctement");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <label className="block mb-2 font-bold" htmlFor="title">Title:</label>
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block mb-2 font-bold" htmlFor="method">Method:</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={method}
          id="method"
          onChange={(e) => setMethod(e.target.value)}
        ></textarea>
        <label className="block mb-2 font-bold" htmlFor="rating">Rating:</label>
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4"
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create Things</button>
        {formError && <p className="text-red-500 font-bold mt-4">{formError}</p>}
      </form>
    </div>
  );
}
