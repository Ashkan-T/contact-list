import { CSSProperties, useContext } from "react";
import Contact from "../../Component/contact/Contact";
import { contactsContext } from "../../data/contexts/ContactsDataContext";
import { Box, Card, Typography } from "@mui/material";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";
import Profiles from "../../data/statics/ProfileIcons";

export default function ContactList() {
  const { contacts } = useContext(contactsContext);

  return (
    <div>
      {contacts.map((contactItems, cidx) => {
        const newIcon = Profiles.find(
          (icn) => icn.id === contactItems.iconIndex
        );
        return (
          <Contact
            name={contactItems.name}
            phoneNumber={contactItems.phoneNumber}
            email={contactItems.email}
            icon={newIcon?.icon}
            contactIndex={cidx}
          />
        );
      })}
    </div>
  );
}
