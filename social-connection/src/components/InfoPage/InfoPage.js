import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { guidelines } from "../../data";

const InfoPage = () => {
  return (
    <Container>
      <Box>
        <h1>Hello, Welcome!</h1>
        <b>This app will find Degree Of Separation!</b>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ maxWidth: "80%", margin:"0 auto" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Please find general description for better experience:
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guidelines.map((row) => (
                <TableRow
                  key={row}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default InfoPage;
