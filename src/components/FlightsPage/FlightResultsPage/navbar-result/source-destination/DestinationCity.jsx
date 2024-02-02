import React from "react";
import { Button, Box } from "@mui/material";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";

const Listbox = styled("ul")(({ theme }) => ({
  width: 300,
  maxHeight: 300,
  margin: 0,
  paddingTop: "20px",
  paddingLeft: "2px",
  paddingRight: "20px",
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: "-1px 4px 11px 5px rgba(211,211,211,1)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

const DestinationCity = ({ airportNames }) => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-source",
    options: airportNames,
    getOptionLabel: (option) => {
      return `${option.iata_code} - ${option.city}, IN`;
    },
  });
  return (
    <div id="destination-city-input">
      <div {...getRootProps()}>
        <input
          className="result-source-input"
          placeholder={localStorage.getItem("destination")}
          value={localStorage.getItem("source")}
          style={{ border: "1px sloid red" }}
          {...getInputProps()}
          required
        />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <Box
              key={option.name}
              component="div"
              className="source-city-result-pop"
              {...getOptionProps({ option, index })}
            >
              <Button
                // ref={codebtnRef}
                sx={{
                  color: "gray",
                  "&:hover": {
                    bgcolor: "#3366CC",
                    color: "white",
                  },
                }}
              >
                {option.iata_code}
              </Button>
              <span>{option.city}</span>
              <span>,</span>
              <span>IN</span>
              <span>-</span>
              <span
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {option.name}
              </span>
            </Box>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
};

export default DestinationCity;
