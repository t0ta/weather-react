import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="float-end">
      <form>
        <input
          type="search"
          placeholder="Type the city..."
          autoFocus
          autoComplete="off"
          className="City-form"
        />
        <input
          type="submit"
          value="🔍 Search"
          className="City-form shadow-sm"
        />
      </form>
    </div>
  );
}
