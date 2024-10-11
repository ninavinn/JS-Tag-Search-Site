import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState(""); // სახელის მდგომარეობა
  const [email, setEmail] = useState(""); // ელ.ფოსტის მდგომარეობა

  const handleSubmit = (e) => {
    e.preventDefault(); // ფორმის სტანდარტული გაწვდვა არ მოხდება
    alert(`Submitted Name: ${name}, Email: ${email}`); // შეტყობინება
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* ფორმის გაგზავნის დროს handleSubmit ფუნქცია გამოიძახება */}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // ინპუტის ცვლილებების მართვა
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // ინპუტის ცვლილებების მართვა
        />
      </label>
      <br />
      <button type="submit">Submit</button> {/* ღილაკი ფორმის გაგზავნისთვის */}
    </form>
  );
};

export default MyForm;
