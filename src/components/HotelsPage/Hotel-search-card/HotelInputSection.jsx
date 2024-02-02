import { useEffect, useState } from "react";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import "./HotelSearchCard.css";
import { Paper } from "@mui/material";
import { useHotelContext } from "../../../UseContext/HotelDetailsProvider";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useLocation } from "react-router-dom";

const HotelInputSection = ({
  options,
  onSearch,
  onSelect,
  optionKey = "name",
  optionCount = 5,
  noOptionText = "No Items",
  hotelInputClass,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const [allOption, setAllOption] = useState(options || []);

  const { pathname } = useLocation();

  const { inputInfo } = useHotelContext();

  const { handleInputPlaceChange, inputPlace, handleFocus, focus } = inputInfo;

  useEffect(() => {
    setAllOption(options);
    handleInputPlaceChange(selected.split(",")[0].trim().toLocaleLowerCase());
  }, [options, selected]);

  const selectHandle = (val) => {
    handleFocus(false);
    setSearchText("");

    if (onSelect) {
      onSelect(val);
      return;
    }
    setSelected(val[optionKey]);
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
        className={hotelInputClass}
        placeholder={
          pathname === "/hotels/results"
            ? `${localStorage
                .getItem("inputPlace")
                .substring(0, 1)
                .toLocaleUpperCase()}` +
              `${localStorage.getItem("inputPlace").substring(1)}`
            : "Enter hotel name..."
        }
        onFocus={() => {
          setSelected("");
          handleFocus(true);
        }}
        value={selected || searchText}
        onChange={handleChange}
        style={{
          borderBottomLeftRadius: searchText ? 0 : "",
          borderBottomRightRadius: searchText ? 0 : "",
        }}
      />
      <Paper
        className="dropdown"
        style={{
          display: focus ? "flex" : "none",
        }}
      >
        <p className="top-text">Popular destinations</p>
        {!allOption.length ? (
          <div> {noOptionText} </div>
        ) : (
          allOption.map((option, index) => (
            <div
              className="place-option"
              key={`${index}`}
              onClick={() => selectHandle(option)}
            >
              <div style={{ marginLeft: "30px" }}>{option[optionKey]}</div>
              <div className="location-icon">
                <PlaceOutlinedIcon fontSize="medium" htmlColor="orange" />
              </div>
            </div>
          ))
        )}
      </Paper>
    </div>
  );
};
export default HotelInputSection;
