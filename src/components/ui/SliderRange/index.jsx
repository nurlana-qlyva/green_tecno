import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedPrice } from './../../../features/filterProductsSlice'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

function valuetext(value) {
    return value;
}

const SliderRange = () => {
    // state
    const [value, setValue] = useState([0, 500])
    // dispatch
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

export default SliderRange
