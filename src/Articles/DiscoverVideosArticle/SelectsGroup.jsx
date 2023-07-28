import React from "react";
import cn from "./DiscoverVideosSection.module.scss";
import { Select } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {filterSort, handleFilter, optionsSort, optionsYears} from "./data/index.js";
import useOnChangeSelect from "../hooks/hooksDiscovery/useOnChangeSelect.js";


const SelectsGroup = ({ show, setSelectedOption }) => {
  const { movieType } = useParams();

  const optionsGenres = useSelector((state) => state.genres[movieType]);

  const {handleChangeSortBy,handleChangeSortYear,handleChangeSortGenres} =useOnChangeSelect(movieType,setSelectedOption)


  return (
    <div
      className={`${cn["select-group"]} ${!show && cn["select-group-hidden"]}`}
    >
      <Select
        key={`${movieType}_sort`}
        showSearch
        allowClear
        placeholder="Sort by..."
        optionFilterProp="children"
        onChange={handleChangeSortBy}
        filterOption={handleFilter}
        filterSort={filterSort}
        options={optionsSort}
        className={cn.select}
      />
      <Select
        key={`${movieType}_year`}
        showSearch
        allowClear
        placeholder="Select to year"
        optionFilterProp="children"
        onChange={handleChangeSortYear}
        filterOption={handleFilter}
        filterSort={filterSort}
        options={optionsYears}
        className={cn.select}
      />
      <Select
        key={`${movieType}_genres`}
        showSearch
        allowClear
        mode="multiple"
        placeholder="Select to genres"
        optionFilterProp="children"
        onChange={handleChangeSortGenres}
        filterOption={handleFilter}
        filterSort={filterSort}
        options={optionsGenres}
        className={cn.select}
      />
    </div>
  );
};

export default SelectsGroup;
