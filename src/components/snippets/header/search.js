import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveBlog, setActiveBlog } from "features/activeBlogSlice";

export default function CustomizedInputBase(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let category = useSelector(selectActiveBlog);
  const [value, setValue] = useState("");

  function updateSearchParams() {
    const params = {
      category: category,
      search_query: value,
    };
    const options = {
      pathname: "/",
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
    setValue("");
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (newValue) => {
    dispatch(setActiveBlog(newValue));
    updateSearchParams();
  };

  const handleSearch = () => {
    updateSearchParams();
  };

  return (
    <Paper
      size="small"
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: "1px solid rgba(0,0,0,0.09)",
        padding: "0px",
        boxShadow: "none",
      }}
    >
      <IconButton
        className="d-block"
        sx={{ p: "0px" }}
        aria-label="menu"
        onClick={(e) => {
          // props.handleClickOpen();
        }}
      >
        <Select
          onChange={(e) => {
            handleSearchChange(e.target.value);
          }}
          size="small"
          value={category}
        >
          <MenuItemCustom value={"programs"}>
            <span>Programs</span>
          </MenuItemCustom>
          <MenuItemCustom value={"blog"}>
            <span>Blog</span>
          </MenuItemCustom>
          <MenuItemCustom value={"applications"}>
            <span>Case Study</span>
          </MenuItemCustom>
          <MenuItemCustom value={"support"}>
            <span>support</span>
          </MenuItemCustom>
        </Select>
      </IconButton>
      <InputBase
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={value}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "Search Talent" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon
          onClick={(e) => {
            handleSearch();
          }}
        />
      </IconButton>
    </Paper>
  );
}

const MenuItemCustom = styled(MenuItem)`
  img {
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #0f1d45;
  }
`;
