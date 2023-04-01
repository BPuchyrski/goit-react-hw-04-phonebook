import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
// const { Component } = require('react');

const ContactList = ({ contacts, delite, filter }) => {
  return (
    <ul className={css.list}>
      {filter === ''
        ? contacts.map(contact => {
            return (
              <li className={css.item} key={nanoid()}>
                {contact.name}: {contact.number}
                <button
                  className={css.btn}
                  number={contact.number}
                  onClick={delite}
                >
                  Remove
                </button>
              </li>
            );
          })
        : filter.map(contact => {
            return (
              <li className={css.item} key={nanoid()}>
                {contact.name}: {contact.number}
                <button
                  className={css.btn}
                  number={contact.number}
                  onClick={delite}
                >
                  Remove
                </button>
              </li>
            );
          })}
    </ul>
  );
};

// class ContactList extends Component {
//   render() {
//     const { contacts, delite, filter } = this.props;
//     return (
//       <ul>
//         {filter === ''
//           ? contacts.map(contact => {
//               return (
//                 <li key={nanoid()}>
//                   {contact.name}: {contact.number}
//                   <button number={contact.number} onClick={delite}>
//                     Remove
//                   </button>
//                 </li>
//               );
//             })
//           : filter.map(contact => {
//               return (
//                 <li key={nanoid()}>
//                   {contact.name}: {contact.number}
//                   <button number={contact.number} onClick={delite}>
//                     Remove
//                   </button>
//                 </li>
//               );
//             })}
//       </ul>
//     );
//   }
// }

ContactList.propTypes = {
  contact: PropTypes.array,
  delite: PropTypes.func,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default ContactList;
