import { useEffect, useRef, useState } from "react";
import { useFlightSearch } from "../../../../../UseContext/FlightsSearchProvider";
import "../ResultNavbar.css";
import { Paper, Stack } from "@mui/material";

const ResultDepartCity = ({
  options,
  onSelect,
  optionKey = "iata_code",
  noOptionText = "No Items",
  source,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const [allOption, setAllOption] = useState(options || []);
  const [focus, setFocus] = useState(false);

  const { sourceDestValue } = useFlightSearch();
  const { handleSourceChange, sourceRef } = sourceDestValue;

  useEffect(() => {
    setAllOption(options);
    handleSourceChange(selected);

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [options, selected]);

  const handleOutsideClick = (event) => {
    if (sourceRef.current && !sourceRef.current.contains(event.target)) {
      setFocus(false);
    }
  };

  const selectHandle = (val) => {
    setFocus(false);
    setSearchText("");
    if (onSelect) {
      onSelect(val);
      return;
    }
    setSelected(val[optionKey]);
    setSelected(`${val.iata_code} ${val.city}, IN`);
  };

  const handleChange = ({ target }) => {
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
        ref={sourceRef}
        className="result-input-source"
        placeholder={source}
        value={selected || source}
        onChange={handleChange}
        onFocus={() => {
          setSelected("");
          setFocus(true);
        }}
        style={{
          width: "14vw",
          height: "40px",

          borderBottomLeftRadius: searchText ? 0 : "",
          borderBottomRightRadius: searchText ? 0 : "",
        }}
      />
      <Paper
        className="flight-input-dropdown"
        style={{
          display: focus ? "flex" : "none",
        }}
      >
        {!allOption.length ? (
          <div> {noOptionText} </div>
        ) : (
          allOption.map((option, index) => (
            <div
              className="flight-option"
              key={`${index}`}
              onClick={() => {
                selectHandle(option);
              }}
            >
              <button className="option-btn">{option.iata_code}</button>
              <Stack
                flexDirection={"row"}
                sx={{ textAlign: "left", width: "80%" }}
              >
                <span>{option.city}</span>
                <span>,</span>
                <span>IN</span>
                <span>-</span>
                <span className="city-name">{option.name}</span>
              </Stack>
            </div>
          ))
        )}
      </Paper>
    </div>
  );
};
export default ResultDepartCity;