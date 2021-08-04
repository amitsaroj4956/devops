import React from "react";

const Social = () => {
  return (
    <div className=" text-center">
      <p className="mb-0">
        © CRM. Crafted with <i className="mdi mdi-heart text-danger"></i> by
        Arivani
      </p>
      <ul className="list-inline mt-4">
        <li className="list-inline-item">
          <a
            href="https://www.facebook.com/"
            className="social-list-item bg-primary text-white border-primary"
          >
            <i className="mdi mdi-facebook"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://twitter.com/"
            className="social-list-item bg-info text-white border-info"
          >
            <i className="mdi mdi-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.instagram.com/"
            className="social-list-item bg-danger text-white border-danger"
          >
            <i className="mdi mdi-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
