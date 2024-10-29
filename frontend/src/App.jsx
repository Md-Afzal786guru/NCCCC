/* eslint-disable no-unused-vars */
import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Account from './pages/account/Account';
import { UserData } from './context/UserContext';
import Loading from './components/loading/Loading';
import Courses from './pages/courses/courses';
import CourseDescription from './pages/coursedescription/CourseDescription';
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";
import Dashbord from './pages/dashboard/Dashboard';
import CourseStudy from './pages/coursestudy/CourseStudy';
import Lecture from './pages/lecture/Lecture';
import AdminDashbord from './admin/Dashboard/AdminDashboard';
import AdminCourses from './admin/Courses/AdminCourses';
import AdminUsers from './admin/Users/AdminUsers';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Products from './pages/products/Products';
import ProductDescription from './pages/Productdescription/ProductDescription';
import AdminNotes from './admin/Notes/AdminNotes';
import Solution1 from './components/Solutions/solution1';
import Solution2 from './components/Solutions/solution2';
import Result1 from './components/Results/result1';
import Result2 from './components/Results/result2';
// import NcertSolution from './pages/NCERT/NCERTsol';
// import AdminNotes from './admin/Notes/AdminNotes';
// import Products from './pages/products/Products';



const App = () => {
  const { isAuth, user, loading } = UserData();

  return (
    <>
      {loading ? <Loading /> : 
        <BrowserRouter>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/notes" element={<Products/>} />
            <Route path="/solutions/class-10" element={<Solution1/>}/>
            <Route path="/solutions/class-12" element={<Solution2/>}/>
            <Route path="/result/bbse" element={<Result1/>}/>
            <Route path="/result/cbse" element={<Result2/>}/>
            
            <Route path="/account" element={isAuth ? <Account user={user} /> : <Login />} />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route path="/register" element={isAuth ? <Home /> : <Register />} />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route path="/forgot" element={isAuth ? <Home /> : <ForgotPassword />} />
            <Route path="/reset-password/:token" element={isAuth ? <Home /> : <ResetPassword />} />
            <Route path="/course/:id" element ={isAuth?<CourseDescription user={user}/>:<Login/>}/>
            <Route path="/product/:id" element={isAuth?<ProductDescription user={user}/>:<Login/>}/>
            <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            />
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashbord user={user} /> : <Login />}
            />
             <Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />
             <Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            />
            <Route
             path="/admin/dashboard" element={isAuth ? <AdminDashbord user={user}/>:<Login/>}
             />
            <Route
             path="/admin/course" element={isAuth ? <AdminCourses user={user}/>:<Login/>}
             />
              <Route
             path="/admin/users" element={isAuth ? <AdminUsers user={user}/>:<Login/>}
             />
              <Route
             path="/admin/notes" element={isAuth ? <AdminNotes user={user}/>:<Login/>}
             />
              
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </>
  );
};

export default App;
