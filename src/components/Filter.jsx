import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSearchParams } from "react-router";

export default function Filter({
  title = "Filter",
  filterBy,
  defaultOption = "All",
  options,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterBy) || "";

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (!value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }
    setSearchParams(searchParams);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{ width: { xs: "100%", md: "25ch" } }}>
      <InputLabel>
        {title} by {filterBy}
      </InputLabel>
      <Select
        name={filterBy}
        value={filterValue}
        onChange={handleFilterChange}
        label={`${title} by ${filterBy}`}
        sx={{ width: "100%" }}>
        <MenuItem>{defaultOption}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
