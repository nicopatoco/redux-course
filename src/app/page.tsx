'use client'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './state/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-white">
        <div className="container mx-auto p-4">
          <h2 className="text-center">Redux Complete Tutorial</h2>
          <Counter />
        </div>
      </div>
    </Provider>
  )
}

export default App
