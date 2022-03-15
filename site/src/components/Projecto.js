import * as React from "react";
// import ReactDOM from "react-dom";

import Box from "@mui/material/Box";
import {
    Autocomplete,
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    FormGroup,
    IconButton, 
    TextField,
    Typography
} from "@mui/material";

import {AddCircleOutline, DeleteOutline} from "@mui/icons-material";

// import NumberFormat from "react-number-format";

import "./Projecto.css";
import CountrySelect from "./Country";



// const add_image = document.getElementById("add_file");
let filesCounter = 1;

const RemoveFile = ()=> { 
    return  <IconButton className="delete" onClick={(e) => {
        let me = e.target;
        me.previousSibling.remove();
        me.nextSibling.remove();
        me.parentNode.remove();
        filesCounter -= 1;
        }} >
        <DeleteOutline />
    </IconButton>
}
    

let del = document.getElementsByName('delete');
    del.forEach((e) => {
        
        e.addEventListener('click', (me) => {
            window.location.href = `deleteProjecto/${me.target.dataset.id}`
            console.log(me.target.dataset.id);
        });
    });



const File = (e, i)=>{
    return (
        <div key={ i } id={i}>
            <input type={"file"} className="file" name="file" multiple required/>
                { e !== undefined ? e : ""}
            <br/>
        </div>
    )
}


export default function Projecto(props){

    const {currencies, visibility} = props;


    const [startdate, setStartDate] = React.useState("01/01/1982");
    const [enddate, setEndDate] = React.useState("01/31/1982");
    const [name, setName] = React.useState("");
    const [value, setValue] = React.useState(10.5);
    const [city, setCity] = React.useState("Tete")
    const [details, setDetails] = React.useState("")

    const [files, setFiles] = React.useState([File(undefined, filesCounter)]);

    const handleAddFile = () => {
        filesCounter +=  1;
        setFiles([...files, File(RemoveFile(), filesCounter)]);
    }
    
    
    const handleStartDateChange = (e) => {
        setStartDate( e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }
    

    const handNameChange = (e) => {
        setName(e.target.value);
    }

    const handValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleDetailsChange = (e) => {
        setDetails(e.target.value)
    }


    const options = () => {
        let _options = [];
        if ( typeof currencies === "undefined" ) {
                return _options.push("MZN")
        }

        return currencies;
    }

    const bindCredentials = (e) => {
        let form = e.target;
            form.credentials = "asdfsgdhfjgkhlj";
    }

    return (
        <Box
            visibility={visibility || false}
        >
            <Card>
                <CardHeader
                    // title="Projecto Information"
                    subheader={<Typography>Add or update projecto information here.</Typography>}
                    />
                <form id="projecto" method="POST" encType="multipart/form-data" action="/createProjecto" onSubmit={bindCredentials}> 
                <FormGroup className="Projecto" role={"form"}>
                    <TextField name="name" label="Projecto name" required style={{ width: "100%"}} 
                        value={name}
                        onChange={handNameChange}/>
                    <fieldset
                        className="ValueDate">
                        <div className="Value">
                            <TextField type="number" name="value" label="Projecto value" required
                                value={value}
                                onChange={handValueChange}
                                // InputProps={{
                                //     inputComponent: NumberFormatCustom,
                                //   }}
                            />
                            <Autocomplete
                                id="currency"
                                label="Currency"
                                variant="outlined"
                                options={options()}
                                renderInput={(params) => <TextField name="currency" {...params} label="Currency" />}>
                            </Autocomplete>
                        </div>
                        <div className="Date">
                            <TextField type="date" name="start" label="Projecto start date" value={startdate} required
                                onChange={handleStartDateChange}
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField type="date" name="end" label="Projecto end date" value={enddate} required
                                onChange={handleEndDateChange}
                                InputLabelProps={{ shrink: true }}    
                            />
                        </div>
                    </fieldset>
                    <fieldset className="Location">
                        <CountrySelect name="country" />
                        <TextField id="state" name="state" label="State/Province"
                            value={city}
                            onChange={handleCityChange}/>
                    </fieldset>
                    <fieldset style={{border: "1px dotted grey", borderRadius: 4}} >
                        <div id="files">
                           {files.map( file => file)}
                        </div>
                        <IconButton onClick={handleAddFile}>
                            <AddCircleOutline label="More" id="add_file" />
                        </IconButton>
                    </fieldset>     
                    <TextField type={"textarea"} multiline minRows={8} name="memo" variant="outlined" label="Projecto details"
                        value={details}
                        onChange={handleDetailsChange}/>
                    <ButtonGroup>
                        <Button type="submit">SUBMIT</Button>
                    </ButtonGroup>
                </FormGroup>
                </form>
                
            </Card>
        </Box>
    )
}