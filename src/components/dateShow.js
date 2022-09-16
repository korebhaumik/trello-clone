import React from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";
import storeApi from "../utils/storeApi";
import { useContext } from "react";

export default function MuiDatePicker({ setLastColor, specific, cards, aid }) {
  const [value, setValue] = useState(null);
  const [text, setText] = useState(null);
  const { addSubDate } = useContext(storeApi);

  // console.log(value);
  // console.log(text);
  return (
    <div className="abc">
      <Stack spacing={1} sx={{ width: "110px" }}>
        <MobileDatePicker
          label="Due Date"
          // inputVariant="outlined"
          disablePast={true}
          // orientation="landscape"
          value={value}
          // defaultCalendarMonth={true}
          // defaultValue={Date.now()}
          // defaultValue={}
          onChange={(newValue) => {
            let k = null;
            k = newValue.$d.toString();
            // let t = "Wed, 21 Sep";
            k = `${k.slice(0, 3)}, ${k.slice(4, 11)}`;
            setValue(newValue);
            addSubDate(k, cards, specific, aid);
            setText(k);
            // setLastColor(Math.random());
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                label: { color: "#278AD1" },
                input: {
                  color: "#278AD1",
                },
                // outlineColor: { color: "rgba(255, 255, 255, 0.77)" },
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}

// sx={{ width: "250px" }}
