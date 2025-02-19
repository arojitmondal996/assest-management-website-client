import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useSearchParams } from "react-router";

export default function Search({ query }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const debounce = (cb, delay = 1000) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => cb(...args), delay);
    };
  };

  const handleSearch = debounce((e) => {
    if (!e.target.value) {
      searchParams.delete(query);
    } else {
      searchParams.delete("page");
      searchParams.set(query, e.target.value);
    }
    setSearchParams(searchParams);
  });
  return (
    <FormControl
      sx={{ width: { xs: "100%", md: "25ch" } }}
      variant="outlined"
      onChange={handleSearch}>
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}
