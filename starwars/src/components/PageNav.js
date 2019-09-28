import React from 'react';
import {Pagination} from "semantic-ui-react";

const PageNav = props => {
  const {pages, setCurrentPage} = props;

  const handlePageChange = element => {
    return element.getAttribute('value');
  }

  return (
    <Pagination
      boundaryRange={pages}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      totalPages={pages}
      onPageChange={e => setCurrentPage(handlePageChange(e.target))} />
  )
}

export default PageNav; 