
import reactLogo from './assets/react.svg'
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './components/Body';


function App() {
  return (
      <div className='h-[full] scroll-my-80'>
        <div >
          <Dashboardview />
        </div>
         
        <div className='flex w-full'>
          <Sidebar />
            <Body />
        </div>
        <div >
       
        </div>
      </div>
      
  )
}

export default App
