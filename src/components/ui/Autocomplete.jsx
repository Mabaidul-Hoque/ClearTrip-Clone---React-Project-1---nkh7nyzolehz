import { useEffect, useRef, useState } from "react";
import "../HotelsPage/Hotels.css";
import { Paper } from "@mui/material";
import { useHotelContext } from "../../UseContext/HotelDetailsProvider"; 
import { useLocation } from "react-router-dom";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const Autocomplete = ({
  options,
  optionKey = "name",
  noOptionText = "No Items",
  hotelInputClass,
  width = "100%",
  height,
  displayValue = "",
  singleHotel,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(displayValue);
  const [allOption, setAllOption] = useState(options || []);
  const hotelSearchRef = useRef();
  const { pathname } = useLocation();
  const { inputInfo } = useHotelContext();
  const { inputPlace, handleInputPlaceChange, focus, setFocus } = inputInfo;

  useEffect(() => {
    setAllOption(options);

    handleInputPlaceChange(() => {
      const selectdValue = options.filter((element) =>
        element?.name === selected
          ? selected.split(",")[0].trim().toLocaleLowerCase()
          : ""
      );
      return selectdValue[0]?.name;
    });

    // change into custom hook
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [selected]);

  useEffect(() => {
    setSelected(displayValue);
  }, [singleHotel]);

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
    <>
      {/* <div style={{ width: width, height: height }}> */}
      <input
        ref={hotelSearchRef}
        className={hotelInputClass}
        placeholder={"Enter place"}
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
      {/* </div> */}
    </>
  );
};
export default Autocomplete;
