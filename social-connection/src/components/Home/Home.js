import Person from "../../templates/Person";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import AddPerson from "../AddPerson/AddPerson";
import AddFriend from "../AddFriend/AddFriend";
import FindConnection from "../FindConnection/FindConnection";
import { Alert, Stack } from "@mui/material";
import InfoPage from "../InfoPage/InfoPage";

let persons = [
  new Person(0, "Sameer"),
  new Person(1, "Aayushi"),
  new Person(2, "Bhaskar"),
  new Person(3, "Kamalnath Sharma"),
  new Person(4, "Shanti Kumar Saha"),
];
let connectionsArr = [[], [], [], [], []];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <>
      <Container>
        <Box>
          {show && (
            <Stack sx={{ width: "40%", margin: "1rem auto", position:"absolute", left: 0, right:0, top:0 }} spacing={2}>
              <Alert severity="success" color="info">
                Added Successfully
              </Alert>
            </Stack>
          )}
        </Box>
      </Container>
      <div style={{ marginTop: "10vh" }}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#ddd", minHeight: "4rem", padding: "1rem" }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              sx={{ ml: 1, mr: 1 }}
            >
              <Button
                onClick={() => {
                  setActiveIndex(1);
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  setActiveIndex(2);
                }}
              >
                Add Person
              </Button>
              <Button
                onClick={() => {
                  setActiveIndex(3);
                }}
              >
                Add Friend
              </Button>
              <Button
                onClick={() => {
                  setActiveIndex(4);
                }}
              >
                Find Connection
              </Button>
            </ButtonGroup>
          </Box>
        </Container>
      </div>
      <Container>
        <Box>
          {activeIndex === 1 && <InfoPage />}
          {activeIndex === 2 && ( // Add People
            <AddPerson
              persons={persons}
              connectionsArr={connectionsArr}
              showAlert={setShow}
            />
          )}
          {activeIndex === 3 && ( // Add Friend
            <AddFriend
              persons={persons}
              connectionsArr={connectionsArr}
              showAlert={setShow}
            />
          )}
          {activeIndex === 4 && ( // Find Connection
            <FindConnection
              persons={persons}
              connectionsArr={connectionsArr}
              showAlert={setShow}
            />
          )}
        </Box>  
      </Container>
    </>
  );
};

export default Home;
