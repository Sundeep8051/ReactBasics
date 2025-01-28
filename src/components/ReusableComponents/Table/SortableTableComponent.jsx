import React from "react";
import TableComponent from "./TableComponent.jsx";
import useSort from "../../../hooks/useSort.jsx";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const SortableTableComponent = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, handleClick, sortedData } = useSort(data, config);

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

  return (
    <div>
      {sortOrder} - {sortBy}
      <TableComponent {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

export default SortableTableComponent;
