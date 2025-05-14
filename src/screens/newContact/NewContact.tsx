import {
  Box,
  Button,
  Card,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import {
  ContactInfo,
  contactsContext,
} from "../../data/contexts/ContactsDataContext";
import { Person, Person2, Person3, Person4 } from "@mui/icons-material";
import Profiles from "../../data/statics/ProfileIcons";

interface NewContactProps {
  afterAdd: (pageName: string) => void;
}

export default function NewContact({ afterAdd }: NewContactProps) {
  const icons = [<Person />, <Person2 />, <Person3 />, <Person4 />];
  const [iconIndex, setIconIndex] = useState(0);
  const { addContacts } = useContext(contactsContext);
  const [newContact, setNewContact] = useState<ContactInfo>({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const setContactProperty = (
    propertyName: "name" | "phoneNumber" | "email" | "iconIndex",
    value: any
  ) => {
    const newItem: any = { ...newContact };
    newItem[propertyName] = value;
    setNewContact(newItem);
  };
  const handleAddNewContact = () => {
    addContacts({ ...newContact, iconIndex });
    afterAdd("contactList");
  };

  return (
    <Card style={{ margin: 10 }}>
      <Box p={1}>
        <Typography variant="h5">New Contact</Typography>
        <TextField
          onChange={(e) => {
            setContactProperty("name", e.target.value);
          }}
          value={newContact.name}
          placeholder="Name..."
          variant="standard"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setContactProperty("phoneNumber", e.target.value);
          }}
          value={newContact.phoneNumber}
          placeholder="Phone Number..."
          variant="standard"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setContactProperty("email", e.target.value);
          }}
          value={newContact.email}
          placeholder="Email..."
          variant="standard"
          fullWidth
        />
        {Profiles.map((iconItem) => (
          <IconButton
            onClick={() => {
              setIconIndex(iconItem.id);
            }}
            color={iconItem.id === iconIndex ? "primary" : "default"}
            style={{ marginTop: 8 }}
          >
            {iconItem.icon}
          </IconButton>
        ))}
      </Box>
      <Box p={1}>
        <Button onClick={handleAddNewContact} fullWidth variant="outlined">
          Add
        </Button>
      </Box>
    </Card>
  );
}
