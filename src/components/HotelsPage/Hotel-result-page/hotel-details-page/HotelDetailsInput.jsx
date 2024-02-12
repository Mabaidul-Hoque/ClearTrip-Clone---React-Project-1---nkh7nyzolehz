import { useEffect, useRef, useState } from "react";
import "./HotelDetailsPage.css";
import { Paper } from "@mui/material";
import { useHotelContext } from "../../../../UseContext/HotelDetailsProvider";
import { useLocation } from "react-router-dom";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const HotelDetailsInput = ({
  options,
  singleHotel,
  optionKey = "name",
  noOptionText = "No Items",
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
        className="hotel-result-input-box"
        ref={hotelSearchRef}
        placeholder={singleHotel.name}
        onFocus={() => {
          setSelected("");
          setFocus(true);
        }}
        value={selected || searchText}
        onChange={handleChange}
        style={{
          height: "44px",
          border: " 1px solid #D3D3D3",
          fontSize: "16px",
          borderBottomLeftRadius: searchText ? 0 : "",
          borderBottomRightRadius: searchText ? 0 : "",
          paddingLeft: "15px",
          fontWeight: "500",
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
export default HotelDetailsInput;
