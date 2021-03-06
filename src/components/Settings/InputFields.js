import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 20,
        marginRight: 20,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
}));

const currencies = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Prefer not to say',
        label: 'Prefer not to say',
    },
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Other',
        label: 'Other',
    },
];

function OutlinedTextFields(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(event.target.value)
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-dense"
                label="First Name"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={(e)=>props.handleFirstName(e.target.value)}
            />
            <TextField
                id="outlined-dense"
                label="Last Name"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={(e)=>props.handleLastName(e.target.value)}
            />
            <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={(e)=>props.handleEmail(e.target.value)}
            />
            <TextField
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                helperText="140 characters limit"
                onChange={(e)=>props.handleBio(e.target.value)}
            />
            <TextField
                id="outlined-select-currency"
                select
                label="Gender"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange('currency')}
                onChange={(e)=>props.handleGender(e.target.value)}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select your gender"
                margin="normal"
                variant="outlined"
            >
                {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="outlined-dense"
                label="Banner img url"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                fullWidth
                onChange={(e)=>props.handleBanner(e.target.value)}
            />
             <TextField
                id="outlined-dense"
                label="Profile pic img url"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                fullWidth
                onChange={(e)=>props.handleProfilePic(e.target.value)}
            />

        </form>
    );
}

export default OutlinedTextFields;