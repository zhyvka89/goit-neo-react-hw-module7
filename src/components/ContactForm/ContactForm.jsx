import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice"; 
import {
  form_wrapper,
  form,
  input,
  button,
  error_text,
} from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initialFormValues = {
    contactName: "",
    contactNumber: "",
  };

  const numberRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Field name is required!"),
    contactNumber: Yup.string()
      .matches(numberRegExp, "Number is not valid!")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Field number is required!"),
  });

  function handleFormSubmit(values, actions) {
    const { contactName, contactNumber } = values;
    dispatch(addContact({ name: contactName, number: contactNumber, id: uuidv4() }));
    actions.resetForm();
  }

  return (
    <div className={form_wrapper}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        <Form className={form}>
          <label htmlFor={nameId}>Name</label>
          <Field className={input} type="text" name="contactName" id={nameId} />
          <ErrorMessage
            className={error_text}
            name="contactName"
            component="span"
          />

          <label htmlFor={numberId}>Number</label>
          <Field
            className={input}
            type="text"
            name="contactNumber"
            id={numberId}
          />
          <ErrorMessage
            className={error_text}
            name="contactNumber"
            component="span"
          />

          <button className={button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
