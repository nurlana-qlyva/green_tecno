import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useDispatch } from 'react-redux';
import { setSelectedPrice } from '../../../features/filter';

function valuetext(value) {
  return value;
}

export default function SliderRangeComp() {
  const [value, setValue] = useState([40, 100])

  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
    return dispatch(setSelectedPrice(value))
  }

  return (
    <Box sx={{ width: `100%` }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        min={0}
        max={500}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}

