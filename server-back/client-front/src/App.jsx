import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import {AuthProvider} from './context/AuthContext'

import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'

import ProtectedRoutes from './ProtectedRoutes'
import { TaskProvider } from './context/TasksContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <main className='container mx-auto px-10'>
          <Navbar/>
          <Routes>
          {/*RUTAS PUBLICAS*/}
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
         
            <Route element={<ProtectedRoutes/>}>  {/*RUTAS PROTEGIDAS*/}
              <Route path='/tasks' element={<TasksPage/>}/>
              <Route path='/add-task' element={<TaskFormPage/>}/>
              <Route path='/tasks/:id' element={<TaskFormPage/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
            </Route>
          </Routes>
        </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
    
  )
}

export default App
