import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/commonHooks/useApi.js";
import InfinityScrollList from "../../components/InfinityScrollList/index.jsx";
import cn from "./DiscoverVideosSection.module.scss";
import { Select } from "antd";
import { useSelector } from "react-redux";

const optionsYears = [];

for (let i = 1901; i <= new Date().getFullYear(); i++) {
  const value = i;
  optionsYears.push({
    label: String(value),
    value: String(value),
    filter: "year",
  });
}

const optionsX = [];

for (let i = 10; i < 36; i++) {
  optionsX.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const options = [
  {
    label: "Popularity Descending",
    value: "popularity.desc",
  },
  { label: "Popularity Ascending", value: "popularity.asc" },
  { label: "Rating Descending", value: "vote_average.desc" },
  { label: "Rating Ascending", value: "vote_average.asc" },
  {
    label: "Release Date Descending",
    value: "primary_release_date.desc",
    filter: "sort_by",
  },
  { label: "Release Date Ascending", value: "primary_release_date.asc" },
  { label: "Title (A-Z)", value: "original_title.asc" },
];

const DiscoverVideosSection = () => {
  const { movieType } = useParams();
  const [selectedOption, setSelectedOption] = useState({});

  const optionsGenres = useSelector((state) => state.genres[movieType]);

  const {
    videos,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    total_results,
    dataPages,
  } = useApi().discover(`/discover/${movieType}` ,selectedOption,`discover_${movieType}`, selectedOption);

  useEffect(() => {
    setSelectedOption({})
  }, [movieType])

  const discoveryType = movieType === "tv" ? "TV Shows" : "Movies";

  const handleChangeSortBy = (value) => {
    if (value) {
      setSelectedOption((prev) => ({ ...prev, sort_by: value }));
    } else {
      setSelectedOption((prev) => {
        const { sort_by, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleChangeSortYear = (value) => {
    const option =
      movieType === "movie" ? "primary_release_year" : "first_air_date_year";
    if (value) {
      setSelectedOption((prev) => ({ ...prev, [option]: value }));
    } else {
      setSelectedOption((prev) => {
        const obj = { ...prev };
        delete obj[option];
        return obj;
      });
    }
  };

  const handleChangeSortGenres = (value) => {
    if (value?.length) {
      setSelectedOption((prev) => ({ ...prev, with_genres: String(value) }));
    } else {
      setSelectedOption((prev) => {
        const { with_genres, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleFilter = (input, option) => (option?.label ?? "").includes(input);

  const filterSort = (optionA, optionB) =>
    (optionA?.label ?? "")
      .toLowerCase()
      .localeCompare((optionB?.label ?? "").toLowerCase());

  return (
    <main className="main wrapper">
      <h1 className="title-article">Discovery {discoveryType}</h1>
      <div className={cn["select-group"]}>
        <Select
          key= {`${movieType}_sort`}
          showSearch
          allowClear
          placeholder="Sort by..."
          optionFilterProp="children"
          onChange={handleChangeSortBy}
          filterOption={handleFilter}
          filterSort={filterSort}
          options={options}
          className={cn.select}
        />

        <Select
          key= {`${movieType}_year`}
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
          key= {`${movieType}_genres`}
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
      <InfinityScrollList
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        data={videos}
        dataPages={dataPages}
      />
    </main>
  );
};

export default DiscoverVideosSection;
