import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UsersApp } from './componentes/UsersApp'
// import { ListadoMap } from './ListadoMap'
// import { MisContadores } from './componentes/MisContadores'
// import { UsersApp } from './componentes/UsersApp'
import { UsersApp2 } from './componentes/UsersApp2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ListadoMap/> */}
    {/* <MisContadores/> */}
    {/* <UsersApp/> */}
    <UsersApp2/>
  </StrictMode>,
)
