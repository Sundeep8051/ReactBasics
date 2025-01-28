import React, { useState } from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import TableComponent from "./TableComponent.jsx";

const SortableTableComponent = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }
    if (sortOrder == null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100 m-0 p-0"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center m-0">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //Only sort data if sortOrder && sortBy are not null
  //Make a copy of the 'data' prop
  //Find the correct sortValue function and use it for sorting

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = updatedConfig.find(
      (column) => column.label === sortBy,
    );

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      return (valueA - valueB) * reverseOrder;
    });
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <TableComponent {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div className="m-0 p-0">
        <GoTriangleUp /> <GoTriangleDown />
      </div>
    );
  }

  if (sortOrder === null)
    return (
      <div className="m-0 p-0">
        <GoTriangleUp /> <GoTriangleDown />
      </div>
    );
  else if (sortOrder === "asc")
    return (
      <div className="m-0 p-0">
        <GoTriangleUp />
      </div>
    );
  else if (sortOrder === "desc")
    return (
      <div className="m-0 p-0">
        <GoTriangleDown />
      </div>
    );
};
export default SortableTableComponent;
