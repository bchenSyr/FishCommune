import React from "react";

export default function footer() {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Beier Chen, bchen22@syr.edu
      </footer>
    </div>
  );
}
