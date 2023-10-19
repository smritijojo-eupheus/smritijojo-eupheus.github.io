import * as React from "react";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import { useState } from "react";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {[
        { value: "a", color: "primary" },
        { value: "b", color: "danger" },
        { value: "c", color: "success" },
        { value: "d", color: "warning" },
      ].map((item: any) => {
        return (
          <Radio
            checked={selectedValue === item.value}
            onChange={handleChange}
            value={item.value}
            color={item.color}
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
        );
      })}
      {/* <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'A' } }}
      /> */}
      {/* <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'B' } }}
      /> */}
    </Box>
  );
}
