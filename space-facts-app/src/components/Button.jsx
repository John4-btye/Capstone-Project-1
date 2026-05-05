const Button = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {disabled ? "Generating..." : "Generate Fact"}
    </button>
  );
};

export default Button;
