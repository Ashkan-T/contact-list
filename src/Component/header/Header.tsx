import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Contacts from "@mui/icons-material/Contacts";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <Contacts />
        </IconButton>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
