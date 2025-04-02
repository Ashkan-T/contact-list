import "./App.css";
import Header from "./Component/header/Header";
import DarkModeProvider from "./data/contexts/DarkMode.context";
import ContactsDataContextProvider from "./data/contexts/ContactsDataContext";
import Contact from "./Component/contact/Contact";
import { useState } from "react";
import ContactList from "./screens/contact-list/ContactList";
import NewContactList from "./screens/new-contact-list/NewContactList";

function App() {
  const [currentPage, setCurrentPage] = useState("contactList");
  const pageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };
  const backHome = () => {
    setCurrentPage("contactList");
  };

  return (
    <DarkModeProvider>
      <ContactsDataContextProvider>
        <div className="App">
          <Header title="Contacts" onLogoClick={backHome} />
          {currentPage == "contactList" && (
            <ContactList onNewContactClick={pageChange} />
          )}
          {currentPage == "newContact" && (
            <NewContactList onAddButtonClick={pageChange} />
          )}
        </div>
      </ContactsDataContextProvider>
    </DarkModeProvider>
  );
}

export default App;
