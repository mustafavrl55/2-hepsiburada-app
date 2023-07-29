import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LinkContext } from "../context/link-context";

const Content = () => {
  const [sortType, setSortType] = useState();

  const { linkData, setLinkData } = useContext(LinkContext);

  const handleChange = (event) => {
    setSortType(event.target.value);
    const copyData = [...linkData];
    if(event.target.value === "mostVoted"){
      
        copyData.sort((a, b) => (b.linkName > a.linkName ? 1 : -1))
    }else{
      copyData.sort((a, b) => (b.linkName > a.linkName ? 1 : -1))
    }
    console.log(copyData)
    setLinkData(copyData)
  };

  const upVote = (index) => {
    const copyData = [...linkData];
    copyData[index].points += 1;
    setLinkData(copyData);
  };

  const downVote = (index) => {
    const copyData = [...linkData];
    if (copyData[index].points <= 0) {
      return;
    }
    copyData[index].points -= 1;

    setLinkData(copyData);
  };

  return (
    <div className="content">
      <Link to="/add">
        <div className="submit">
          <button>
            <AddIcon className="icon" />
          </button>
          <h4>SUBMIT A LINK</h4>
        </div>
      </Link>
      <hr />
      <div className="main-product">
        <div className="select">
          <Box sx={{ maxWidth: 180 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Order by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortType}
                onChange={handleChange}
              >
                <MenuItem value={"mostVoted"}>Most Voted (Z-A)</MenuItem>
                <MenuItem value={"lessVoted"}>Less Voted (A-Z)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="product">
          <ul>
            {linkData
              ?.sort((a, b) => (b.points > a.points ? 1 : -1))
              .map((item, index) => (
                <li key={index} className="product__item">
                  <div className="product__item__point">
                    <span>{item.points}</span>
                    <div>POINTS </div>
                  </div>
                  <div className="product__item__content">
                    <h2 className="title">{item.linkName}</h2>
                    <Link href="#" className="link">
                      ({item.linkUrl})
                    </Link>
                    <div className="buttons">
                      <div className="up" onClick={() => upVote(index)}>
                        <ArrowUpwardIcon />
                        <span>Up Vote</span>
                      </div>
                      <div className="down" onClick={() => downVote(index)}>
                        <ArrowDownwardIcon />
                        <span>Down Vote</span>
                      </div>
                    </div>
                  </div>
                  <RemoveCircleIcon className="remove-icon" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
