import { createContext, ReactNode, useEffect, useState } from "react";

export type ContactInfo = {
  name: string;
  phoneNumber: string;
  email: string;
  iconIndex?: number;
};
export type ContactsDataContextType = {
  contacts: ContactInfo[];
  addContacts: (contact: ContactInfo) => void;
  removeContactAt: (index: number) => void;
};
export const contactsContext = createContext<ContactsDataContextType>({
  contacts: [],
  addContacts: () => {},
  removeContactAt: () => {},
});

export default function ContactContextDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contacts, setContacts] = useState<ContactInfo[]>([]);
  const saveContactToLocalStorage = (contact: ContactInfo[]) => {
    const contactStr = JSON.stringify(contact);
    localStorage.setItem("contact", contactStr);
  };
  const loadContactFromLocalStorage = () => {
    const gotContact = localStorage.getItem("contact");
    if (gotContact) {
      const savedContact: ContactInfo[] = JSON.parse(gotContact);
      setContacts(savedContact);
    }
  };

  function handleAddContact(newContacts: ContactInfo) {
    const newContact = [...contacts, newContacts];
    setContacts(newContact);
    saveContactToLocalStorage(newContact);
  }
  function handleRemoveContactAt(index: number) {
    const newContact = [...contacts];
    newContact.splice(index, 1);
    setContacts(newContact);
    saveContactToLocalStorage(newContact);
  }
  useEffect(() => {
    loadContactFromLocalStorage();
  }, []);

  return (
    <contactsContext.Provider
      value={{
        contacts,
        addContacts: handleAddContact,
        removeContactAt: handleRemoveContactAt,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
}
