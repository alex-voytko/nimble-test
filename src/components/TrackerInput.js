export default function TrackerInput() {
  return (
    <div className='input-container'>
      <form action=''>
        <input
          className='input-container__input'
          type='text'
          placeholder='Enter tracker name'
        />
        <button className='input-container__button' type='submit'></button>
      </form>
    </div>
  );
}
