import React from "react";
import { styled, TextField, Stack, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: 0,
  },
});

interface Props {
  mb?: number;
  mr?: number;
}

const SearchField: React.FC<Props> = ({ mb, mr }) => {
  return (
    <Stack spacing={0} direction="row" flexGrow={1} mb={mb || 0} mr={mr}>
      <StyledTextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ minWidth: "80%" }}
      />
      <Button variant="contained" color="error" sx={{ borderRadius: 0 }}>
        <Search />
      </Button>
    </Stack>
  );
};

export default SearchField;
