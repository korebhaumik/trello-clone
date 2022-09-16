import React from "react";
import { Stack, TextField } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import storeApi from "../utils/storeApi";
import { useContext } from "react";

export default function MuiTimePicker({ setLastColor, specific, cards, aid }) {
  const [value, setValue] = useState(null);
  const [text, setText] = useState(null);
  const { addSubTime } = useContext(storeApi);
  // console.log(text);
  // console.log(value);
  return (
    <div className="abc">
      <Stack spacing={1} sx={{ width: "100px" }}>
        <MobileTimePicker
          label="Due Time"
          // orientation="portrait"
          // openTo="minutes"
          // orientation="landscape"
          value={value}
          onChange={(newValue) => {
            let k = null;
            k = newValue.$d.toString();
            let t = "AM";
            if (newValue.$H >= 12) t = "PM";
            k = `${k.slice(16, 21)} ${t}`;
            setValue(newValue);
            addSubTime(k, cards, specific, aid);
            setText(k);
            // setLastColor(Math.random());
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

// sx={{ width: "250px" }}
