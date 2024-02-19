import { useEffect, useRef, useState } from "react";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import "../FlightPage.css";
import FlightCityDrowpdown from "../../ui/FlightCityDrowpdown";

const DepartCityInput = ({ options, noOptionText = "No Items" ,inputStyleClass, source}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(source);
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
    setSelected(`${val.iata_code} ${val.city}, IN`);
  };

  const handleChange = ({ target }) => {
    let tempOptions = [...options];
    tempOptions = tempOptions.filter(
      (obj) =>
        obj.city?.toLowerCase().includes(target.value?.toLowerCase()) ||
        obj.iata_code?.toLowerCase().includes(target.value?.toLowerCase()) ||
        obj.name?.toLowerCase().includes(target.value?.toLowerCase())
    );
    setSearchText(target.value);
    setAllOption(tempOptions);
  };

  return (
    <div className="autoComplete">
      <input
        ref={sourceRef}
        className={`inputBox ${inputStyleClass}`}
        placeholder="Where from?"
        value={selected || searchText}
        onChange={handleChange}
        onFocus={() => {
          setSelected("");
          setFocus(true);
        }}
        style={{
          borderBottomLeftRadius: searchText ? 0 : "",
          borderBottomRightRadius: searchText ? 0 : "",
        }}
      />
      <FlightCityDrowpdown  
        allOption={allOption}
        noOptionText={noOptionText}
        selectHandle={selectHandle}
        focus={focus}
      />

    </div>
  );
};
export default DepartCityInput;
