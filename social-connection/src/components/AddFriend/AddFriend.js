import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const AddFriend = ({ persons, connectionsArr, showAlert }) => {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedConnection, setSelectedConnection] = useState("");

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ m: 1, minWidth: 200, mt: 2 }}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Person</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedPerson}
              label="Person"
              onChange={(e) => {
                console.log(e.target.value);
                if (e.target.value !== "") {
                  setSelectedPerson(parseInt(e.target.value));
                } else {
                  setSelectedPerson(e.target.value);
                }
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {persons.map((ele, i) => {
                return (
                  <MenuItem value={ele.id} key={i}>
                    {ele.label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>Select Person</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Friend</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedConnection}
              label="Friend"
              onChange={(e) => {
                console.log(e.target.value);
                if (e.target.value !== "") {
                  setSelectedConnection(parseInt(e.target.value));
                } else {
                  setSelectedConnection(e.target.value);
                }
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {persons.map((ele, i) => {
                return ele.id !== selectedPerson ? (
                  <MenuItem value={ele.id} key={i}>
                    {ele.label}
                  </MenuItem>
                ) : null;
              })}
            </Select>
            <FormHelperText>Select Friend</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, width: 200, mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  persons[selectedPerson].connections.indexOf(
                    persons[selectedConnection]
                  ) === -1
                ) {
                  persons[selectedPerson].connections.push(
                    persons[selectedConnection]
                  );
                  connectionsArr[selectedPerson].push(selectedConnection);
                  showAlert(true);
                  setTimeout(()=>{showAlert(false)}, 2000);
                }
                setSelectedPerson("");
                setSelectedConnection("");

              }}
              disabled={selectedPerson === "" || selectedConnection === ""}
            >
              Add
            </Button>
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};

export default AddFriend;
