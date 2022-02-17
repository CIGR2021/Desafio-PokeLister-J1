import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function Pagination({
  pages,
  currentPage,
  setCurrentPage,
  itensPerPage,
  setItensPerPage
}) {
  return (
    <ul className="pagination">
        <FormControl
          sx={{ width: 150, textAlign: 'center' }}
          className="pagination">
          <InputLabel id="Quantidade por página">Quantidade por página</InputLabel>
          <Select
            labelId="Quantidade por página"
            id="Quantidade por página"
            defaultValue={itensPerPage}
            label="Quantidade por página"
            onChange={({ target }) => setItensPerPage(Number(target.value))}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </FormControl>
        <InputLabel sx={{ marginLeft: 2 }}>
          Pages
          {Array.from(Array(pages), (item, index) => {
            return (
              <FormControl className="pagination">
                <li>
                  <ButtonGroup
                    sx={{ marginLeft: 2 }}
                    disableElevation
                    variant={index === currentPage ? 'contained' : 'text'}
                  >
                    <Button
                      value={index}
                      onClick={({ target }) => setCurrentPage(Number(target.value))}
                    >
                      {index + 1}
                    </Button>
                  </ButtonGroup>
                </li>
              </FormControl>
            )
          })}
        </InputLabel>
      </ul>
  )
}

export default Pagination;
