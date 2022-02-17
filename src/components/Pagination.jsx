import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={0}>
      <Pagination count={7} color="primary" />
    </Stack>
  );
}

// import React from "react";

// const MAX_ITEMS = 5;
// const MAX_LEFT = (MAX_ITEMS - 1) / 2;

// const Pagination = ({ limit, total, offset, setOffset }) => {
//   const currentPage = offset ? (offset / limit) + 1 : 1;
//   const totalPages = Math.ceil(total / limit);
//   const firstPage = Math.max(currentPage - MAX_LEFT, 1)
//   return (
//     <ul className="pagination">
//       {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
//         .map((_, indice) => indice + firstPage)
//         .map((page) => (
//           <li key={page}>
//             <button
//               onClick={() => setOffset((page - 1) * limit)}
//               className={
//                 page === currentPage
//                 ? "pagination__item--active"
//                 : null
//               }
//             >
//               {page}
//             </button>
//           </li>))}
//     </ul>
//   )
// }

// export default Pagination;