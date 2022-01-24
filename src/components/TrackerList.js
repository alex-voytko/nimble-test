export default function TrackerList() {
  return (
    <div className='list-container'>
      <ul>
        <li className='list-container__item'>
          <p className='list-container__item__stopwatch-name'>
            No name tracker #1
          </p>
          <div>
            <p className='list-container__item__stopwatch-time'>00:01:32</p>
            <button className='list-container__item__pause-btn'></button>
            <button className='list-container__item__remove-btn'></button>
          </div>
        </li>
        <li className='list-container__item'>
          <p className='list-container__item__stopwatch-name'>
            No name tracker #1
          </p>
          <div>
            <p className='list-container__item__stopwatch-time'>00:01:32</p>
            <button className='list-container__item__pause-btn'></button>
            <button className='list-container__item__remove-btn'></button>
          </div>
        </li>
        <li className='list-container__item'>
          <p className='list-container__item__stopwatch-name'>
            No name tracker #12352361616361
          </p>
          <div>
            <p className='list-container__item__stopwatch-time'>00:01:32</p>
            <button className='list-container__item__pause-btn'></button>
            <button className='list-container__item__remove-btn'></button>
          </div>
        </li>
      </ul>
    </div>
  );
}
