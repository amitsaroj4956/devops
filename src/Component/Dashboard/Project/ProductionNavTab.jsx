import React from "react";

const ProductionNavTab = () => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#production_nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Angular
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#production_nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            API
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#production_nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Admin
          </button>
        </div>
      </nav>
    </>
  );
};

export default ProductionNavTab;
