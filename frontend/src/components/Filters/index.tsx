import React, { ReactEventHandler } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox as MuiCheckbox,
  FormControlLabel,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

const Filters = () => {
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <Box
      component="aside"
      flexDirection="column"
      alignItems="flex-start"
      p={2}
      position="sticky"
    >
      <Typography variant="h6">Filters</Typography>
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Price
        </Typography>
        <ButtonGroup size="small" onChange={handleChange}>
          <Button>$</Button>
          <Button>$$</Button>
          <Button>$$$</Button>
          <Button>$$$$</Button>
        </ButtonGroup>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Distance
        </Typography>
        <ButtonGroup size="small" onChange={handleChange}>
          <Button>1 km</Button>
          <Button>5 km</Button>
          <Button>10 km</Button>
          <Button>25 km</Button>
        </ButtonGroup>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Rating
        </Typography>
        <ButtonGroup size="small" onChange={handleChange}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonGroup>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Features
        </Typography>
        <Stack>
          <FormControlLabel control={<MuiCheckbox />} label="Free wifi" />
          <FormControlLabel control={<MuiCheckbox />} label="Parking" />
          <FormControlLabel control={<MuiCheckbox />} label="Restrooms" />
          <FormControlLabel control={<MuiCheckbox />} label="Open to all" />
        </Stack>
      </Box>
      <Button variant="contained" color="primary">
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
