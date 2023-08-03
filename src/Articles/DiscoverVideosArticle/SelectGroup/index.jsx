import { Select } from "antd";
import React, {memo} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useOnChangeSelect from "../../hooks/hooksDiscovery/useOnChangeSelect.js";
import cn from "../DiscoverVideosSection.module.scss";
import {
  filterSort,
  handleFilter,
  optionsSort,
  optionsYears,
} from "../data/index.js";

const SelectsGroup = memo(({ show, setSelectedOption }) => {
  const { movieType } = useParams();

  const optionsGenres = useSelector((state) => state.genres[movieType]);

  const { handleChangeSortBy, handleChangeSortYear, handleChangeSortGenres } =
    useOnChangeSelect(movieType, setSelectedOption);

  return (

    <div
      className={`${cn["select-group"]} ${!show && cn["select-group-hidden"]}`}
    >
      <Select
        key={`${movieType}_sort`}
        allowClear
        showSearch
        className={cn.select}
        filterOption={handleFilter}
        filterSort={filterSort}
        optionFilterProp="children"
        options={optionsSort}
        placeholder="Sort by..."
        onChange={handleChangeSortBy}
      />
      <Select
        key={`${movieType}_year`}
        allowClear
        showSearch
        className={cn.select}
        filterOption={handleFilter}
        filterSort={filterSort}
        optionFilterProp="children"
        options={optionsYears}
        placeholder="Select to year"
        onChange={handleChangeSortYear}
      />
      <Select
        key={`${movieType}_genres`}
        allowClear
        showSearch
        className={cn.select}
        filterOption={handleFilter}
        filterSort={filterSort}
        mode="multiple"
        optionFilterProp="children"
        options={optionsGenres}
        placeholder="Select to genres"
        onChange={handleChangeSortGenres}
      />
    </div>
  );
});

export default SelectsGroup;
