import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  // Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { getPosts, deletePost } from "../actions/posts";

// import { customersData, customersGrid } from '../data/dummy';
import { customersGrid } from "../Config/config";
import { Header } from "../components";

const Customers = ({ currentId, setCurrentId }) => {
  const selectionsettings = { persistSelection: false };
  //const toolbarOptions = [ 'Add', 'Edit', 'Delete', 'Search' ];
  const toolbarOptions = [
    { text: "Add", tooltipText: "Add", id: "Add" },
    { text: "Edit", tooltipText: "Edit", id: "Edit" },
    { text: "Delete", tooltipText: "Delete", id: "Delete" },
    "Search",
  ];
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
    showDeleteConfirmDialog: true,
  };
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const [currentGrid, setGrid] = useState();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const clickHandler = (args) => {
    if (args.item.id === "Add") {
      setCurrentId(0);
      navigate("/inventarioe");
    }
    if (args.item.id === "Edit") {
      //setCurrentId(0);
      navigate("/inventarioe");
    }
    if (args.item.id === "Delete") {
      //setCurrentId(0);
      dispatch(deletePost(currentId));
      //console.log('2')
      //navigate('/inventaroe');
    }
  };

  const rowSelected = () => {
    //console.log(currentGrid.getSelectedRowIndexes());
    //console.log(currentGrid.getSelectedRecords());
    setCurrentId(currentGrid.getSelectedRecords()[0]._id);
    console.log(currentGrid.getSelectedRecords()[0]._id);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Inventario" />
      <GridComponent
        dataSource={posts}
        enableHover={false}
        pageSettings={{ pageSize: 10 }}
        selectionSettings={selectionsettings}
        editSettings={editing}
        toolbar={toolbarOptions}
        toolbarClick={clickHandler}
        allowSorting={true}
        allowPaging={true}
        selectedRowIndex={1}
        ref={setGrid}
        rowSelected={rowSelected}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
