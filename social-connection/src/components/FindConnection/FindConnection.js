import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { findPath } from "../../services";

const FindConnection = ({ persons, connectionsArr }) => {
  const [selectedPerson2, setSelectedPerson2] = useState("");
  const [selectedConnection2, setSelectedConnection2] = useState("");
  const [foundPath, setFoundPath] = useState(null);

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ m: 1, minWidth: 200, mt: 2 }}>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Person #1
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedPerson2}
              label="Person"
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedPerson2(parseInt(e.target.value));
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
            <FormHelperText>Select Person #1</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Person #2
            </InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedConnection2}
              label="Person"
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedConnection2(parseInt(e.target.value));
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {selectedPerson2 !== "" &&
                persons.map((ele, i) => {
                  return ele.id !== selectedPerson2 ? (
                    <MenuItem value={ele.id} key={i}>
                      {ele.label}
                    </MenuItem>
                  ) : null;
                })}
            </Select>
            <FormHelperText>Select Person #2</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: 200, mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => {
                try {
                  let foundPaths = findPath(
                    selectedPerson2, // source
                    selectedConnection2, // index
                    connectionsArr // graph
                  );
                  let foundPathsNames = new Array(foundPaths.length);
                  foundPaths.forEach((ele, i) => {
                    let names = ele.map((e) => {
                      console.log(e);
                      return persons[e].label;
                    });
                    foundPathsNames[i] = names.join(" > ");
                  });
                  setFoundPath(foundPathsNames);
                  setSelectedPerson2("");
                  setSelectedConnection2("");
                } catch (e) {
                  setSelectedPerson2("");
                  setSelectedConnection2("");
                  alert("Something went wrong. Please refresh the page.");
                }
              }}
              disabled={selectedPerson2 === "" || selectedConnection2 === ""}
            >
              Find
            </Button>
          </FormControl>
        </Box>
        {foundPath &&
          (foundPath.length !== 0 ? (
            <Box>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                sx={{ fontSize: "1rem" }}
              >
                Connection Found
              </Typography>
              {foundPath.map((e, i) => {
                return <b key={i}>{e}<br/></b>;
              })}
            </Box>
          ) : (
            <Box>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                sx={{ fontSize: "2rem" }}
              >
                Connection Not Found
              </Typography>
            </Box>
          ))}
      </Container>
    </div>
  );
};

export default FindConnection;
