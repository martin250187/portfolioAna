import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const onClick = () => {
    Swal.fire({
      title: "Ok!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
  return (
    <div className="flex justify-center">
      <form action="" className="flex flex-col mb-8 p-12 w-full shadow-xl border rounded-md">
        <input
          className="m-2 px-2 border rounded dark:bg-slate-900 dark:border-slate-100"
          placeholder="Nombre"
          type="text"
          name="name"
        />
        <input
          className="m-2 px-2 border rounded dark:bg-slate-900 dark:border-slate-100"
          placeholder="E-mail"
          type="mail"
          name="email"
        />
        <textarea
          className="m-2 px-2 border rounded dark:bg-slate-900 dark:border-slate-100"
          placeholder="..."
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="hover:bg-red transition-all duration-300 text-white m-2 p-4 rounded-md bg-slate-600"
          type="button" onClick={onClick}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
