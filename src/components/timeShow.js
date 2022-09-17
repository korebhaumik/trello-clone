import React from "react";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import storeApi from "../utils/storeApi";
import { useContext } from "react";

export default function MuiTimePicker({ setLastColor, specific, cards, aid }) {
  const [value, setValue] = useState(null);
  const [text, setText] = useState(null);
  const { addSubTime } = useContext(storeApi);
  return (
    <div className="abc">
      <Stack spacing={1} sx={{ width: "100px" }}>
        <MobileTimePicker
          label="Due Time"
          // orientation="portrait"
          value={value}
          onChange={(newValue) => {
            let temp = null;
            temp = newValue.$d.toString();
            let t = "AM";
            if (newValue.$H >= 12) t = "PM";
            temp = `${temp.slice(16, 21)} ${t}`;
            setValue(newValue);
            addSubTime(temp, cards, specific, aid);
            setText(temp);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                label: { color: "#278AD1" },
                input: { color: "#278AD1" },
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}
