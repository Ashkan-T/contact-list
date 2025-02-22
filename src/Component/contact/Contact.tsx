import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Person from "@mui/icons-material/Person";
import Person2 from "@mui/icons-material/Person2";
import Person3 from "@mui/icons-material/Person3";

export default function Home() {
  return (
    <Paper>
      <Grid2 padding={2}>
        <Card component="div">
          <CardActionArea>
            <IconButton color="inherit">
              <Person /> <span>Ashkan</span>
            </IconButton>
            <CardContent>
              <Typography height={30} variant="h6">
                +989300740962
              </Typography>
              <Typography paddingBottom={2} variant="h6">
                ashkana629@gmail.com
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid2>
      <Grid2 padding={2}>
        <Card>
          <CardActionArea>
            <IconButton color="inherit">
              <Person2 /> Taha
            </IconButton>
            <CardContent>
              <Typography height={30} variant="h6">
                +989123456789
              </Typography>
              <Typography paddingBottom={2} variant="h6">
                imtaha.ir@gmail.com
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid2>
      <Grid2 padding={2}>
        <Card>
          <CardActionArea>
            <IconButton color="inherit">
              <Person3 /> Ati
            </IconButton>
            <CardContent>
              <Typography height={30} variant="h6">
                +989123456789
              </Typography>
              <Typography paddingBottom={2} variant="h6">
                ati@gmail.com
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid2>
    </Paper>
  );
}
