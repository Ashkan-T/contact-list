import {
  Box,
  Card,
  CardActions,
  CSSProperties,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";
import { DeleteForever } from "@mui/icons-material";
import { contactsContext } from "../../data/contexts/ContactsDataContext";

interface ContactProps {
  name: string;
  phoneNumber: string;
  email: string;
  icon?: any;
  contactIndex: number;
}

export default function Contact({
  name,
  phoneNumber,
  email,
  icon,
  contactIndex,
}: ContactProps) {
  const { darkMode } = useContext(DarkModeContext);
  const { removeContactAt } = useContext(contactsContext);
  const CardStyle: CSSProperties = {
    color: darkMode ? "lightblue" : undefined,
    backgroundColor: darkMode ? "#444" : undefined,
  };
  return (
    <Grid p={1}>
      <Card style={CardStyle}>
        <Box p={1}>
          <Typography variant="h5">
            {icon}
            {name}
          </Typography>
          <Typography variant="subtitle1">{phoneNumber}</Typography>
          <Typography variant="subtitle1">{email}</Typography>
        </Box>
        <CardActions>
          <IconButton
            onClick={() => {
              removeContactAt(contactIndex);
            }}
          >
            <DeleteForever color="error" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
