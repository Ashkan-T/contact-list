import { ChangeEvent, useContext, useState } from "react";
import { ContactsContext } from "../../data/contexts/ContactsDataContext";
import {
  Box,
  Button,
  Card,
  CardActions,
  CSSProperties,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Person, Person2, Person3, Person4 } from "@mui/icons-material";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

interface NewContactListProps {
  onAddButtonClick: (pageName: string) => void;
}

export default function NewContactList({
  onAddButtonClick,
}: NewContactListProps) {
  const handleAddClick = (pageName: string) => {
    onAddButtonClick(pageName);
  };
  const { contacts, addContact } = useContext(ContactsContext);
  const [newContact, setNewContact] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmial] = useState("");
  const [newIcon, setNewIcon] = useState("");
  function handleNameTextField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setNewContact(event.target.value);
  }
  function handlePhoneTextField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setNewPhone(event.target.value);
  }
  function handleEmailTextField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setNewEmial(event.target.value);
  }
  function handleAddcontact() {
    addContact({
      name: newContact,
      phoneNumber: newPhone,
      email: newEmail,
    });
    handleAddClick("contactList");
  }
  const { darkMode } = useContext(DarkModeContext);
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#444", color: "lightblue" }
    : {};

  return (
    <Grid p={1}>
      <Card style={cardstyle}>
        <Typography p={1} variant="h5">
          NewContact
        </Typography>
        <Box p={1}>
          <TextField
            value={newContact}
            onChange={handleNameTextField}
            fullWidth
            placeholder="Name:"
            variant="standard"
          />
          <TextField
            value={newPhone}
            onChange={handlePhoneTextField}
            fullWidth
            placeholder="PhoneNumber:"
            variant="standard"
          />
          <TextField
            value={newEmail}
            onChange={handleEmailTextField}
            fullWidth
            placeholder="Email:"
            variant="standard"
          />
        </Box>
        <CardActions>
          <Button
            onClick={handleAddcontact}
            fullWidth
            style={
              darkMode
                ? { backgroundColor: "lightgray", color: "gray" }
                : { backgroundColor: "lightblue" }
            }
          >
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
