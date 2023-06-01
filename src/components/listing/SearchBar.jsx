import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";

const SearchBar = ({ submitSearch, search }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Box
        sx={{
          bgcolor: "#d0d0d0",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Search for your favourite books
          </Typography>

          {/* Search Bar */}
          <form onSubmit={handleSubmit(submitSearch)}>
            <TextField
              id="search"
              maxWidth="md"
              type="search"
              label="Search"
              defaultValue={search}
              {...register("search", { required: true })}
              sx={{width:"100%", marginTop: "15px", bgcolor: "#fff" }}
              InputLabelProps={{
                style: {
                  backgroundColor: "#fff",
                  padding: "0 5px",
                  borderRadius: "5px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Container>
      </Box>
    </>
  );
};

export default SearchBar;
