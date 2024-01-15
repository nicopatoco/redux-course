import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from '../state/counter/counterSlice'
import { AppDispatch, RootState } from '../state/store'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <h2 className="border border-gray-900 py-4 px-4 text-2xl font-bold mb-4">{count}</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        >
          Increment by 10
        </button>
        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        >
          Increment async
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
