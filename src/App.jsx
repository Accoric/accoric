import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";
import Home from "./pages/home/home";
import AccoricManagement from "./pages/accoricManagement/accoricManagement";
import About from "./pages/about/about";
import Support from "./pages/support/support";
import GettingStarted from "./pages/support/childPages/GettingStarted";
import DashcardAndAccount from "./pages/support/childPages/DashcardAndAccount";
import CertificationReminders from "./pages/support/childPages/CertificationReminders";
import ManageYourCertifications from "./pages/support/childPages/ManageYourCertifications";
import UsingTheEmployeeTable from "./pages/support/childPages/UsingTheEmployeeTable";
import SearchingForEmployees from "./pages/support/childPages/SearchingForEmployees";
import AddingEmployee from "./pages/support/childPages/AddingEmployees";
import AddingCertifications from "./pages/support/childPages/AddingCertifications";
import UpdatingEmployee from "./pages/support/childPages/UpdatingEmployee";
import ExpiredCertificationTables from "./pages/support/childPages/ExpiredCertificationTables";
import ActiveInActiveEmployee from "./pages/support/childPages/ActiveInActiveEmployee";
import UsingNotes from "./pages/support/childPages/UsingNotes";
import UsingCategories from "./pages/support/childPages/UsingCategories";
import GeneratingSpreadsheets from "./pages/support/childPages/GeneratingSpreadsheets";
import SecondaryUsers from "./pages/support/childPages/SecondaryUsers";
import ForgotPassword from "./pages/support/childPages/ForgotPassword";
import CreatingAutomatedEmailReminders from "./pages/support/childPages/CreatingAutomatedEmailReminders";
import ViewingRequestingAndDeletingDashcards from "./pages/support/childPages/ViewingRequestingAndDeletingDashcards";
import TermsOfService from "./pages/termsOfService/termsOfService";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy";

function App() {
  return (
    <BrowserRouter>
    <Toaster
      position="top-right"
      containerStyle={{
        zIndex: 2147483647,
      }}
    />
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/accoric-management" element={<AccoricManagement />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />



          <Route path="/support/getting-started" element={<GettingStarted />} />
          <Route path="/support/manage-your-certifications" element={<ManageYourCertifications />} />
          <Route path="/support/certifications-reminders" element={<CertificationReminders />} />
          <Route path="/support/dashcard-and-account" element={<DashcardAndAccount />} />

          <Route path="/support/using-the-employee-table" element={<UsingTheEmployeeTable />} />
          <Route path="/support/searching-for-employees" element={<SearchingForEmployees />} />
          <Route path="/support/adding-employees" element={<AddingEmployee />} />
          <Route path="/support/adding-certifications" element={<AddingCertifications />} />
          <Route path="/support/updating-employee" element={<UpdatingEmployee />} />
          <Route path="/support/expired-certification-tables" element={<ExpiredCertificationTables />} />
          <Route path="/support/active-inactive-status" element={<ActiveInActiveEmployee />} />
          <Route path="/support/using-notes" element={<UsingNotes />} />
          <Route path="/support/using-categories" element={<UsingCategories />} />
          <Route path="/support/generating-spreadsheets" element={<GeneratingSpreadsheets />} />
          <Route path="/support/secondary-users" element={<SecondaryUsers />} />
          <Route path="/support/forgot-password" element={<ForgotPassword />} />
          <Route path="/support/creating-automated-email-reminders" element={<CreatingAutomatedEmailReminders />} />
          <Route path="/support/viewing-requesting-and-deleting-dashcard" element={<ViewingRequestingAndDeletingDashcards />} />

     
        </Route>

      </Routes>

    </BrowserRouter>
    
  );
}

export default App;