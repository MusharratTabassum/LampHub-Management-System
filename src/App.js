import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registration from './Pages/Login/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import ProductInformation from './Pages/Home/ProductInformation/ProductInformation'
import AddProduct from './Pages/AddProduct/AddProduct';
import AllBookings from './Pages/AllBookings/AllBookings';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import UpdatingStatus from './Pages/UpdatingStatus/UpdatingStatus';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import NotFound from './Pages/NotFound/NotFound';
import DashBoard from './Pages/DashBoard/DashBoard';
import Payment from './Pages/Payment/Payment';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddReview from './Pages/AddReview/AddReview';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>



          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/productdetail/:productId">
              <ProductInformation></ProductInformation>
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageproducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path="/bookings/update/:id">
              <UpdatingStatus></UpdatingStatus>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>



        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
