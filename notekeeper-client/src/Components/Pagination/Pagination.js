import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section>
      <nav className="my-10 w-fit mx-auto">
        <ul className="pagination flex mx-10 border-2">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item m-1 py-2 bg-gray-400  border">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link py-4 px-3"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
