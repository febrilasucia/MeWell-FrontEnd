import React, { useEffect } from "react";
import ListKonsulPsikolog from "../../components/Psikolog/ListKonsulPsikolog";

function ListKonsulPsikologPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ListKonsulPsikolog />
    </div>
  );
}

export default ListKonsulPsikologPage;
