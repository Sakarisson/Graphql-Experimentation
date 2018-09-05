import { compose, withState, withHandlers } from 'recompose';

const baseState = { author: '', title: '' };

export default compose(
  withState('form', 'setForm', baseState),
  withHandlers({
    handleFormChange: ({ form, setForm }) => (event) => {
      event.preventDefault();
      const { target } = event;
      const { name, value } = target;
      const newForm = { ...form };
      Object.assign(newForm, { [name]: value });
      setForm(newForm);
    },
    handleSubmit: ({ store, form, setForm }) => async (event) => {
      event.preventDefault();
      try {
        const newBook = await store.api.addBook(form);
        store.addBook(newBook);
      } catch (e) {
        console.log(e);
      }
      setForm(baseState);
    },
  }),
);
