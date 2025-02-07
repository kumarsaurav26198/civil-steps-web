import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import About from "./Components/About/About";
import Contact from "./Components/contact";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import UserDetail from "./Components/User/UserDetails";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ViewTableOfSub from "./Components/Admin/ViewTableOfSub";
import UserPersonalDetails from "./Components/User/UserPersonalDetails";
import UserTestResults from "./Components/User/UserTestResults";
import Userlevel from "./Components/User/Userlevel";
import ViewTableOfYear from "./Components/Admin/ViewTableOfYear";
import Table_sub_topic from "./Components/Admin/Table_sub_topic";
import RequireAuth from "./Components/Context/RequireAuth";
import SubjectOperations from "./Components/Admin/SubjectOperations";
import Subject from "./Components/user-test/Subject";
import Year from "./Components/user-test/Year";
import Topic from "./Components/user-test/Topic";
import TestDescription from "./Components/user-test/TestDescription";
import TestWithAnswers from "./Components/user-test/TestWithAnswers";
import TestHavingNoAnswer from "./Components/user-test/TestHavingNoAnswer";
import TestResult from "./Components/user-test/TestResult";
import PageNtFound from "./Components/PageNtFound";
import ForgetPassword from "./Components/User/ForgetPassword";
import ResetPass from "./Components/User/ResetPass";
import SelectTest from "./module2/SelectTest";
import PremiumTestDescription from "./module2/PremiumTestDescription";
import PremiumTestWithAnswer from "./module2/PremiumTestWithAnswer";
import PremiumResult from "./module2/PremiumResult";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/subject" element={<Subject />} />
        <Route path="/category/year" element={<Year />} />
        <Route path="/category/topic" element={<Topic />} />
        <Route path="/test-description" element={<TestDescription />} />
        <Route
          path="/description/:subject/:topic"
          element={
            <RequireAuth>
              <PremiumTestDescription />
            </RequireAuth>
          }
        />
        <Route path="/test/with/answer" element={<TestWithAnswers />} />
        <Route path="/test/without/answer" element={<TestHavingNoAnswer />} />
        <Route
          path="/test/:subject/:topic/:level"
          element={
            <RequireAuth>
              <PremiumTestWithAnswer />
            </RequireAuth>
          }
        />
        <Route
          path="/test/result"
          element={
            <RequireAuth>
              <PremiumResult />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-details" element={<UserDetail />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="/category/paid-test" element={<SelectTest />} />
        <Route
          path="/admin-dashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
        <Route path="/view-table-subject" element={<ViewTableOfSub />} />
        <Route path="/view-table-year" element={<ViewTableOfYear />} />
        <Route path="/view-table-sub-topic" element={<Table_sub_topic />} />
        <Route
          path="/user-personal-details"
          element={<UserPersonalDetails />}
        />
        <Route path="/user-test-results" element={<UserTestResults />} />
        <Route path="/results" element={<TestResult />} />
        <Route path="/user-level" element={<Userlevel />} />
        <Route path="/subject/operations" element={<SubjectOperations />} />
        <Route path="*" element={<PageNtFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
