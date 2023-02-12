import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Time } from './Atom';

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState(dayjs(Date()));
    //dayjs('2014-08-18T21:11:54')

    const [counter, setCounter] = useRecoilState(Time);

    const handleChange = (newValue: any) => {
        setValue(newValue);
        setCounter(newValue);
    };

    let valuable = Object.values(value);
    let propsvalue = valuable[2];
    // // let objecttostring = Object.entries(propsvalue);
    // let objecttostring = JSON.stringify(propsvalue);

    useEffect(() => {
        console.log('value', valuable);
        console.log('Atomvalue', valuable);
        // handleChange(() => {});
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} valuable={valuable}>
            <Stack spacing={3}>
                {/* <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                /> */}
                <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}
