function StopwatchName({ name, isPausable }) {
  return (
    <>
      <p className='list-container__item__stopwatch-name'>
        <span
          className={
            !isPausable
              ? `list-container__item__stopwatch-name vertical-align`
              : `list-container__item__stopwatch-name vertical-align pausable`
          }
        >
          {name}
        </span>
      </p>
    </>
  );
}
export default StopwatchName;
