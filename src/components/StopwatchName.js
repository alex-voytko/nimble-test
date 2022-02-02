function StopwatchName({ name, className }) {
  return (
    <>
      <p className='list-container__item__stopwatch-name'>
        <span className={className}>{name}</span>
      </p>
    </>
  );
}
export default StopwatchName;
