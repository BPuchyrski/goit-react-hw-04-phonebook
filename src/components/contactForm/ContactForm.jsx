import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
// const { Component } = require('react');

const ContactForm = ({ add, inputRef }) => {
  return (
    <form className={css.form} onSubmit={add}>
      <span>Name</span>
      <input
        ref={inputRef}
        className={css.input}
        placeholder="Enter name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <span>Number</span>
      <input
        className={css.input}
        placeholder="Enter number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn}>Add contact</button>
    </form>
  );
};

// class ContactForm extends Component {
//   render() {
//     const { add } = this.props;
//     return (
// <form onSubmit={add}>
//   <span>Name</span>
//   <input
//     type="text"
//     name="name"
//     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     required
//   />
//   <span>Number</span>
//   <input
//     type="tel"
//     name="number"
//     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//     required
//   />
//   <button>Add contact</button>
// </form>
//     );
//   }
// }

ContactForm.propTypes = {
  add: PropTypes.func,
};

export default ContactForm;
