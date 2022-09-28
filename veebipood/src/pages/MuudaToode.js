import { useParams } from "react-router-dom";

function MuudaToode() {
  // Route path="muuda/:adasda"
  // const { adasda } = useParams();
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index];

  return ( <div>MT: {index} - {leitudToode}</div> );
}

export default MuudaToode;