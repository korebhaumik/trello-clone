import React from "react";
import { Stack, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";
import storeApi from "../../service/utils/storeApi.js";
import { useContext } from "react";

export default function MuiDatePicker({ setLastColor, specific, cards, aid }) {
  const [value, setValue] = useState(null);
  const [text, setText] = useState(null);
  // const { addSubDate } = useContext(storeApi);

  return (
    <div className="abc">
      <Stack spacing={1} sx={{ width: "110px" }}>
        <MobileDatePicker
          label="Due Date"
          // inputVariant="outlined"
          // orientation="landscape"
          disablePast={true}
          value={value}
          onChange={(newValue) => {
            let temp = null;
            temp = newValue.$d.toString();
            temp = `${temp.slice(0, 3)}, ${temp.slice(4, 11)}`;
            setValue(newValue);
            // addSubDate(temp, cards, specific, aid);
            setText(temp);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                label: { color: "#278AD1" },
                input: {
                  color: "#278AD1",
                },
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
}
