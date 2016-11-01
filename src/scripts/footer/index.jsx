import React from "react";

export default function(props) {
  let year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {year} DSTIL</p>
    </footer>
  );
}
