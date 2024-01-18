import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

const styles = {
  formControl: {
    // m: 1,
    // minWidth: 120,
  },
  selectEmpty: {
    // mt: 2,
  },
}

export default function SelectExample() {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value)
  }

  return (
    <Masonry>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          label="Age"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl >
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          label="Age"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={styles.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl >
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={styles.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl disabled>
        <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
        <Select
          label="Name"
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error>
        <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
        <Select
          label="Name"
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          onChange={handleChange}
          renderValue={value => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl >
        <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
        <Select
          label="Name"
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl >
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          label="Age  "
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={styles.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required >
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          sx={styles.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" >
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Masonry>
  )
}
