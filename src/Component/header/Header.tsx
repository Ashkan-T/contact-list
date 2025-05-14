import {
  AppBar,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import Contacts from "@mui/icons-material/Contacts";
import { CSSProperties, useContext } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

interface HeaderProps {
  title: string;
  onLogoClick: () => void;
}

export default function Header({ title, onLogoClick }: HeaderProps) {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const CardStyle: CSSProperties = {
    color: darkMode ? "lightblue" : undefined,
    backgroundColor: darkMode ? "#333" : undefined,
  };

  return (
    <AppBar position="static" style={CardStyle}>
      <Toolbar>
        <IconButton
          style={darkMode ? { color: "lightblue" } : { color: "white" }}
          onClick={onLogoClick}
        >
          <Contacts />
        </IconButton>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <FormControlLabel
          label="DarkMode"
          control={
            <Switch
              checked={darkMode}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            />
          }
          labelPlacement="top"
        />
      </Toolbar>
    </AppBar>
  );
}
