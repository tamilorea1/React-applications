//Using props
//props will be a parameter for the component Student
//to get the value associated with the key from the parent,
//you use the format props.nameoftheykey

//In line 22, using the ternary operator "?" to help with booleans


//propTypes= these ensure a passed value is of the correct datatype.
//example: age = PropTypes.number

//defaultProps = default values for props in case they are not passed from the
//parent component

import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps ={
    name: "Guest",
    age: 0,
    isStudent : false,
}
export default Student;