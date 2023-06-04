import 'react-toastify/dist/ReactToastify.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Dashboardlayout } from './layouts/DashboardLayout';
import { Brand } from './pages/dashboard/Brand';
import { Category } from './pages/dashboard/Category';
import { Department } from './pages/dashboard/Department';
import { Product } from './pages/dashboard/Product';
import { Employee } from './pages/dashboard/Employee';
import { Supporter } from './pages/dashboard/Supporter';
import { Customer } from './pages/dashboard/Customer';
import { Login } from './pages/dashboard/Login';
import { LoginLayout } from './layouts/LoginLayout';
import { Register } from './pages/dashboard/Register';
import { Home } from './pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Home Route Rederice to dashboard  */}
      <Route path="/" element={<Home />}>
        <Route index element={<Brand />} />
      </Route>
      {/* Dashboard Route  */}
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="brand" element={<Brand />} />
        <Route path="department" element={<Department />} />
        <Route path="product" element={<Product />} />
        <Route path="customer" element={<Customer />} />
        <Route path="category" element={<Category />} />
        <Route path="employee" element={<Employee />} />
        <Route path="supporter" element={<Supporter />} />
      </Route>
      {/* Form Route*/}
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="form/brand" element={<Brand />} />
        <Route path="form/department" element={<Department />} />
        <Route path="form/product" element={<Product />} />
        <Route path="form/customer" element={<Customer />} />
        <Route path="form/category" element={<Category />} />
        <Route path="form/employee" element={<Employee />} />
        <Route path="form/supporter" element={<Supporter />} />
        <Route path="form/register" element={<Register />} />
      </Route>
      {/* Login Route*/}
      <Route path="/dashboard" element={<LoginLayout />}>
        <Route path="dashboard/login" element={<Login />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
