const Checkbox = ({ name, id, checked, handleCheckboxChange }) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={() => handleCheckboxChange(id)}
        />
        {name}
      </label>
    </>
  );
};
export default Checkbox;
