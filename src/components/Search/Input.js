import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class ComposedTextField extends React.Component {
  state = {
    artist: 'Composed TextField',
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ artist: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
     
    <div>
        <FormControl  className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Search Artists</InputLabel>
          <Input id="component-simple"  value={this.props.input2} onChange={this.props.handleInput2} />
        </FormControl>
        
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);