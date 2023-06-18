import { TextField } from "@mui/material";

export const DefaultTextField = (props) => {
    const {name, control} = props;

    return <TextField {...register(name)}/>
}