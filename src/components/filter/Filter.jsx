import PropTypes from 'prop-types';
// const { Component } = require('react');

const Filter = ({ filter }) => {
  return (
    <div>
      <form onChange={filter} id="filter">
        <label htmlFor="filter">
          Filter contacts by name
          <input type="search" />
        </label>
      </form>
    </div>
  );
};

// class Filter extends Component {
//   render() {
//     const { filter } = this.props;

//     return (
//       <div>
//         <form onChange={filter} id="filter">
//           <label htmlFor="filter">
//             Filter contacts by name
//             <input type="search" />
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

Filter.propTypes = {
  filter: PropTypes.func,
};

export default Filter;
