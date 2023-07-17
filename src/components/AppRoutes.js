import { Route, Routes } from "react-router-dom";
import Dashboard from '../views/Dashboard';
import Inventory from '../views/Inventory';
import Customers from '../views/Customers';
import Orders from '../views/Orders';

function AppRoutes() {
       return (
              <Routes>
                     <Route path='/' element={<Dashboard />}/>
                     <Route path='/inventory' element={<Inventory />}/>
                     <Route path='/orders' element={<Orders />}/>
                     <Route path='/customers' element={<Customers />}/>
              </Routes>
       )
}


export default AppRoutes;