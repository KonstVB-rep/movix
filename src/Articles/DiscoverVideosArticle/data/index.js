export const optionsYears = [];

for (let i = 1901; i <= new Date().getFullYear(); i++) {
  const value = i;
  optionsYears.push({
    label: String(value),
    value: String(value),
    filter: "year",
  });
}


export const optionsSort = [
  {
    label: "Popularity Descending",
    value: "popularity.desc",
    filter: "sort_by"
  },
  { label: "Popularity Ascending", value: "popularity.asc",filter: "sort_by" },
  { label: "Rating Descending", value: "vote_average.desc",filter: "sort_by" },
  { label: "Rating Ascending", value: "vote_average.asc",filter: "sort_by" },
  {
    label: "Release Date Descending",
    value: "primary_release_date.desc",
    filter: "sort_by",
  },
  { label: "Release Date Ascending", value: "primary_release_date.asc",filter: "sort_by" },
  { label: "Title (A-Z)", value: "original_title.asc",filter: "sort_by" },
];

export const handleFilter = (input, option) => (option?.label ?? "").includes(input);

export const filterSort = (optionA, optionB) =>
  (optionA?.label ?? "")
    .toLowerCase()
    .localeCompare((optionB?.label ?? "").toLowerCase());

