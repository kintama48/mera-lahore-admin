import './App.css'
import 'antd/dist/reset.css'
import './antd.css'
import { Provider } from 'react-redux'
import { persistor, store } from './@store/store'
import { PersistGate } from 'redux-persist/integration/react'
import router from './browserRouter'

import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

function App() {
  return (
      <>
        <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1677ff',
              },
            }}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RouterProvider router={router} />
            </PersistGate>
          </Provider>
        </ConfigProvider>
      </>
  )
}

export default App
