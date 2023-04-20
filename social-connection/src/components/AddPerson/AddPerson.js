import { Button, Container, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Person from "../../templates/Person";

const AddPerson = ({ persons, connectionsArr, showAlert }) => {
  const [inpName, setInpName] = useState("");

  let id = persons.length;
  function handleClick() {
    let tempId = id++;
    persons.push(new Person(tempId, inpName));
    connectionsArr[tempId] = [];
    setInpName("");
    showAlert(true);
    setTimeout(() => {
      showAlert(false);
    }, 3000);
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ m: 1, minWidth: 200, mt: 2 }}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={inpName}
            onChange={(e) => {
              setInpName(e.target.value);
              showAlert(false);
            }}
            sx={{ width: 200 }}
          />
          <FormControl sx={{ m: 1, width: 100, mt: 2 }}>
            <Button variant="outlined" onClick={handleClick}>
              Add
            </Button>
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};
export default AddPerson;
