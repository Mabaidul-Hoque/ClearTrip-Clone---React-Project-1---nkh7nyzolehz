// import React, { forwardRef, useState } from "react";
// import { useAutocomplete } from "@mui/base/useAutocomplete";
// import { styled } from "@mui/system";
// import useFlightSectionStyles from "./FlightSearchCardStyles";
// import { Button, Box } from "@mui/material";
// import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";

// const Listbox = styled("ul")(({ theme }) => ({
//   width: 300,
//   maxHeight: 300,
//   margin: 0,
//   paddingTop: "20px",
//   paddingLeft: "2px",
//   paddingRight: "20px",
//   zIndex: 1,
//   position: "absolute",
//   listStyle: "none",
//   backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
//   overflow: "hidden",
//   borderRadius: "10px",
//   boxShadow: "-1px 4px 11px 5px rgba(211,211,211,1)",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// const DestinationCityInput = forwardRef(
//   (
//     { isSwitch, source, destination, handleDestinationChange, airportNames },
//     ref
//   ) => {
//     const {
//       getRootProps,
//       getInputLabelProps,
//       getInputProps,
//       getListboxProps,
//       getOptionProps,
//       groupedOptions,
//     } = useAutocomplete({
//       id: "use-autocomplete-source",
//       options: airportNames,
//       getOptionLabel: (option) => {
//         return `${option.iata_code} - ${option.city}, IN`;
//       },
//     });

//     const classes = useFlightSectionStyles();

//     return (
//       <div>
//         <div ref={ref} {...getRootProps()}>
//           <input
//             className={classes.whereFromInput}
//             // placeholder={destination}
//             // value={destination}
//             onChange={(e) => handleDestinationChange(e.target.value)}
//             style={{ paddingLeft: "5rem" }}
//             {...getInputProps()}
//             required
//           />
//         </div>
//         {groupedOptions.length > 0 ? (
//           <Listbox {...getListboxProps()}>
//             {groupedOptions.map((option, index) => (
//               <Box
//                 key={option.name}
//                 component="div"
//                 className={classes.airportNameCard}
//                 {...getOptionProps({ option, index })}
//                 // onClick={() => {
//                 //   handleDestinationChange(option.iata_code);
//                 // }}
//               >
//                 <Button
//                   sx={{
//                     color: "gray",
//                     "&:hover": {
//                       bgcolor: "#3366CC",
//                       color: "white",
//                     },
//                   }}
//                 >
//                   {option.iata_code}
//                 </Button>
//                 <span>{option.city}</span>
//                 <span>,</span>
//                 <span>IN</span>
//                 <span>-</span>
//                 <span
//                   style={{
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {option.name}
//                 </span>
//               </Box>
//             ))}
//           </Listbox>
//         ) : null}
//       </div>
//     );
//   }
// );

// export default DestinationCityInput;

// import React, { forwardRef, useEffect, useState } from "react";
// import { useAutocomplete } from "@mui/base/useAutocomplete";
// import { styled } from "@mui/system";
// import useFlightSectionStyles from "./FlightSearchCardStyles";
// import { Button, Box, TextField } from "@mui/material";

// const Label = styled("label")({
//   display: "block",
// });

// const Input = styled("input")(({ theme }) => ({
//   width: 200,
//   backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
//   color: theme.palette.mode === "light" ? "#000" : "#fff",
// }));

// const Listbox = styled("ul")(({ theme }) => ({
//   width: 300,
//   maxHeight: 300,
//   margin: 0,
//   paddingTop: "20px",
//   paddingLeft: "2px",
//   paddingRight: "20px",
//   zIndex: 1,
//   position: "absolute",
//   listStyle: "none",
//   backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
//   overflow: "hidden",
//   borderRadius: "10px",
//   boxShadow: "-1px 4px 11px 5px rgba(211,211,211,1)",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// const DepartCityInput = forwardRef(
//   (
//     { isSwitch, source, destination, handleSourceChange, airportNames },
//     ref
//   ) => {
//     const [val, setVal] = useState("");

//     const {
//       getRootProps,
//       getInputLabelProps,
//       getInputProps,
//       getListboxProps,
//       getOptionProps,
//       groupedOptions,
//     } = useAutocomplete({
//       id: "use-autocomplete-source",
//       options: airportNames,
//       getOptionLabel: (option) => {
//         return `${option.iata_code} - ${option.city}, IN`;
//       },
//     });

//     const classes = useFlightSectionStyles();

//     return (
//       <div>
//         <div
//           id="source-city-div"
//           {...getRootProps()}
//         >
//           <Input
//             value={val}
//             onChange={(e, newVal) => setVal(newVal)}
//             {...getInputProps()}
//           />
//         </div>
//         {groupedOptions.length > 0 ? (
//           <Listbox {...getListboxProps()}>
//             {groupedOptions.map((option, index) => (
//               <Box
//                 key={option.name}
//                 component="div"
//                 className={classes.airportNameCard}
//                 {...getOptionProps({ option, index })}
//               >
//                 <Button
//                   sx={{
//                     color: "gray",
//                     "&:hover": {
//                       bgcolor: "#3366CC",
//                       color: "white",
//                     },
//                   }}
//                 >
//                   {option.iata_code}
//                 </Button>
//                 <span>{option.city}</span>
//                 <span>,</span>
//                 <span>IN</span>
//                 <span>-</span>
//                 <span
//                   style={{
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {option.name}
//                 </span>
//               </Box>
//             ))}
//           </Listbox>
//         ) : null}
//       </div>
//     );
//   }
// );

// export default DepartCityInput;

import { useEffect, useState } from "react";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import "./FlightSearchCard.css";
import { Paper } from "@mui/material";
const DestinationCityInput = ({
  options,
  onSearch,
  onSelect,
  optionKey = "iata_code",
  optionCount = 5,
  noOptionText = "No Items",
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const [allOption, setAllOption] = useState(options || []);
  const [focus, setFocus] = useState(false);

  const contextValues = useFlightSearch();
  const { handleDestinationChange } = contextValues.sourceDestValue;

  useEffect(() => {
    setAllOption(options);
    handleDestinationChange(selected);
  }, [options, selected]);

  const selectHandle = (val) => {
    setFocus(false);
    setSearchText("");

    if (onSelect) {
      onSelect(val);
      return;
    }
    setSelected(`${val.iata_code} ${val.city}, IN`);
  };

  const handleChange = ({ target }) => {
    // setSearchText(target.value);
    // if (onSearch) {
    //   onSearch(target.value, (data) => setAllOption(data));
    //   setSearchText(target.value);
    //   return;
    // }

    let tempOptions = [...options];
    tempOptions = tempOptions.filter((obj) =>
      obj[optionKey]?.toLowerCase().includes(target.value?.toLowerCase())
    );
    setSearchText(target.value);
    setAllOption(tempOptions);
  };

  return (
    <div className="autoComplete">
      <input
        className="inputBox"
        placeholder="Where to?"
        value={selected || searchText}
        onFocus={() => {
          setSelected("");
          setFocus(true);
        }}
        onChange={handleChange}
        style={{
          borderBottomLeftRadius: searchText ? 0 : "",
          borderBottomRightRadius: searchText ? 0 : "",
        }}
      />
      <Paper
        className="flight-input-dropdown"
        style={{
          display: focus ? "flex" : "none",
          // oneOption Height * count - 1st borderTop (1px)
          // maxHeight: `${35 * optionCount - 1}px`,
        }}
      >
        {!allOption.length ? (
          <div> {noOptionText} </div>
        ) : (
          allOption.map((option, index) => (
            <div
              className="flight-option"
              key={`${index}`}
              onClick={() => selectHandle(option)}
            >
              <button>{option.iata_code}</button>
              <span>{option.city}</span>
              <span>,</span>
              <span>IN</span>
              <span>-</span>
              <span className="city-name">{option.name}</span>
            </div>
          ))
        )}
      </Paper>
    </div>
  );
};
export default DestinationCityInput;
