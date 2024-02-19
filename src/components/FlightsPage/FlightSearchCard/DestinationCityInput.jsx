import { useEffect, useState } from "react";
import { useFlightSearch } from "../../../UseContext/FlightsSearchProvider";
import "../FlightPage.css";
import FlightCityDrowpdown from "../../ui/FlightCityDrowpdown";
const DestinationCityInput = ({ options, noOptionText = "No Items",inputStyleClass, destination }) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(destination);
  const [allOption, setAllOption] = useState(options || []);
  const [focus, setFocus] = useState(false);

  const contextValues = useFlightSearch();
  const { handleDestinationChange, destinationRef } =
    contextValues.sourceDestValue;

  useEffect(() => {
    setAllOption(options);
    handleDestinationChange(selected);

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [options, selected]);

  const handleOutsideClick = (event) => {
    if (
      destinationRef.current &&
      !destinationRef.current.contains(event.target)
    ) {
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
        ref={destinationRef}
        className={`inputBox ${inputStyleClass}`}
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
      <FlightCityDrowpdown
        allOption={allOption}
        noOptionText={noOptionText}
        selectHandle={selectHandle}
        focus={focus}
      />

    </div>
  );
};
export default DestinationCityInput;
