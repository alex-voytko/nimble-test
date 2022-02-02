function Button({ className, type, onClick }) {
  return (
    <>
      <button className={className} type={type} onClick={onClick}></button>
    </>
  );
}

export default Button;
