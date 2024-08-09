import React from "react";
import CategoryForm from "../components/templates/CategoryForm";
import CategoryList from "../components/templates/CategoryList";

function AdminPages() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPages;
