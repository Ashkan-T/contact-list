import { Person } from "@mui/icons-material";
import { createContext, ReactNode, useState } from "react";

type Contact = {
  name: string;
  phoneNumber: string;
  email: string;
};
type ContactContextType = {
  contacts: Contact[];
  addContact: (newContacts: Contact) => void;
  removeContactAt: (index: number) => void;
};
export const ContactsContext = createContext<ContactContextType>({
  contacts: [],
  addContact: () => {},
  removeContactAt: () => {},
});

export default function ContactsDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      name: "Ashkan",
      phoneNumber: "09300740962",
      email: "ashkanap629@gmail.com",
    },
  ]);
  const addContact = (newContacts: Contact) => {
    setContacts([...contacts, newContacts]);
  };
  const removeContactAt = (index: number) => {
    const contact = [...contacts];
    contact.splice(index, 1);
    setContacts(contact);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, removeContactAt }}>
      {children}
    </ContactsContext.Provider>
  );
}
