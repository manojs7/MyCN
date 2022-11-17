import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppMenu } from "$lib/menuContext";


export default function AutoSearch({ value,handleAdd,label}) {
  const { cuisines} = useAppMenu();

  const [data, setData] = React.useState([]);
  const [dataTwo, setDataTwo] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  React.useEffect(()=>{
    setData(value)
setDataTwo(value)


    
    

    

  },[value])


  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.name,
    
  };
  const handleOnChange = (e, value) => {
    console.log(value);
    handleAdd(value?.id)
  };

 
  return (
    // <Autocomplete
    // id="size-small-outlined"
    // size="small"
    
    //   {...defaultProps}
    //   onChange={handleOnChange}
    //   disablePortal
     
    //   options={data}
    //   sx={{ width: '100%',marginTop:'30px',}}
    //   renderInput={(params) => <TextField sx={{margin:0}} {...params} label="Choose Dessert" />}
    // />

    <Autocomplete
        id="size-small-outlined"
        size="small"
        onChange={handleOnChange}
        options={data}
        {...defaultProps}
        // defaultValue={data[0]}
        sx={{ width: '100%',marginTop:'20px',marginBottom:'30px'}}
        renderInput={(params) => (
          <TextField {...params} label={label}  />
        )}
      />
  );
}
