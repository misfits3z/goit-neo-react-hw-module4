import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 
import css from "./SearchBar.module.css";
import { toast, Toaster } from "react-hot-toast";

export default function SearchBar({ search }) {
  const notify = () =>
    toast.error("The search query must be at least 2 characters long", {
      duration: 3000,
      position: "top-right",
    });

  const handleSubmit = (values, actions) => {
    const query = values.query.trim().toLowerCase();
    if (query.length < 2) {
      notify();
    } else {
      search(query);
    }

    actions.resetForm();
  };

  return (
    <>
     
      <Toaster position="top-center" reverseOrder={false} />

      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.inputSearch}
            name="query"
            type="text"
            placeholder="Search images and photos"
          />
          <button className={css.buttonSearch} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Form>
      </Formik>
    </>
  );
}

