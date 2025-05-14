import "./App.css";
import Header from "./Component/header/Header";
import DarkModeProvider from "./data/contexts/DarkMode.context";
import ContactsDataContextProvider from "./data/contexts/ContactsDataContext";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import ContactList from "./screens/contactList/ContactList";
import NewContact from "./screens/newContact/NewContact";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const pageChange = (pageName: string) => {
    setCurrentPage(pageName);
    localStorage.setItem("currentPage", pageName);
  };

  const backHome = () => {
    pageChange("contactList");
  };
  useEffect(() => {
    const savePage = localStorage.getItem("currentPage");
    pageChange(savePage ?? "contactList");
  }, []);

  return (
    <DarkModeProvider>
      <ContactsDataContextProvider>
        <div className="App">
          <Header title="Contacts" onLogoClick={backHome} />
          {currentPage === "contactList" && <ContactList />}
          {currentPage === "newContact" && <NewContact afterAdd={pageChange} />}
          {currentPage === "contactList" && (
            <Fab
              onClick={() => {
                setCurrentPage("newContact");
              }}
              style={{ position: "fixed", bottom: 16, right: 16 }}
              color="primary"
              aria-label="add"
            >
              <Add />
            </Fab>
          )}
        </div>
      </ContactsDataContextProvider>
    </DarkModeProvider>
  );
}

export default App;
