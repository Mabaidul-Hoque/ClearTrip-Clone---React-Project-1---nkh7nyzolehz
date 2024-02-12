import { useEffect, useRef, useState } from "react";
import "../Hotels.css";
import { Paper } from "@mui/material";
import { useHotelContext } from "../../../UseContext/HotelDetailsProvider";
import { useLocation } from "react-router-dom";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const HotelInputSection = ({
  options,
  onSelect,
  optionKey = "name",
  noOptionText = "No Items",
  hotelInputClass,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const [allOption, setAllOption] = useState(options || []);
  const hotelSearchRef = useRef();
  const { pathname } = useLocation();
  const { inputInfo } = useHotelContext();
  const { handleInputPlaceChange, focus, setFocus } = inputInfo;

  useEffect(() => {
    setAllOption(options);
    handleInputPlaceChange(selected.split(",")[0].trim().toLocaleLowerCase());

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [options, selected]);

  const handleOutsideClick = (event) => {
    if (
      hotelSearchRef.current &&
      !hotelSearchRef.current.contains(event.target)
    ) {
      setFocus(false);
    }
  };
  const selectHandle = (val) => {
    setSearchText("");

    if (onSelect) {
      onSelect(val);
      return;
    }
    setSelected(val[optionKey]);
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
    <div className="h-autoComplete">
      <input
        ref={hotelSearchRef}
        className={hotelInputClass}
        placeholder={
          pathname === "/hotels/results"
            ? `${localStorage
                .getItem("inputPlace")
                .substring(0, 1)
                .toLocaleUpperCase()}` +
              `${localStorage.getItem("inputPlace").substring(1)}`
            : "Enter locality, landmark, city or hotel"
        }
        onFocus={() => {
          setSelected("");
          setFocus(true);
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
                <FmdGoodOutlinedIcon fontSize="medium" htmlColor="gray" />
              </div>
            </div>
          ))
        )}
      </Paper>
    </div>
  );
};
export default HotelInputSection;
