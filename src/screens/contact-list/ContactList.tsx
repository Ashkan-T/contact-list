import { useContext } from "react";
import { ContactsContext } from "../../data/contexts/ContactsDataContext";
import {
  Box,
  Card,
  CardActions,
  CSSProperties,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, DeleteForever } from "@mui/icons-material";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

interface ContactListProps {
  onNewContactClick: (pageName: string) => void;
}

export default function ContactList({ onNewContactClick }: ContactListProps) {
  const { contacts, removeContactAt } = useContext(ContactsContext);
  const handleNewContactList = (pageName: string) => {
    onNewContactClick(pageName);
  };
  function handleRemoveContact(idx: number) {
    removeContactAt(idx);
  }
  const { darkMode } = useContext(DarkModeContext);
  const cardstyle: CSSProperties = darkMode
    ? { backgroundColor: "#444", color: "lightblue" }
    : {};

  return (
    <div>
      {contacts.map((contactName, contactIndex) => {
        return (
          <Grid p={1}>
            <Card style={cardstyle}>
              <Box p={2}>
                <Typography p={0.5} variant="h5">
                  {contactName.name}
                </Typography>
                <Typography p={0.5}>{contactName.phoneNumber}</Typography>
                <Typography p={0.5}>{contactName.email}</Typography>
              </Box>
              <CardActions>
                <IconButton
                  onClick={() => {
                    handleRemoveContact(contactIndex);
                  }}
                >
                  <DeleteForever color="error" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
      <Fab
        onClick={() => {
          handleNewContactList("newContact");
        }}
        style={{ position: "fixed", bottom: 16, right: 16 }}
        color="primary"
        aria-label="add"
      >
        <Add />
      </Fab>
    </div>
  );
}
