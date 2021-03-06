import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipsArray extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          chipData: props.array,
        };
    }

    componentDidUpdate(prevprops){
        if(prevprops.array !== this.props.array){
            this.setState({
                chipData: this.props.array
            })
        }
    }

  handleDelete = data => (props) => {
    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);

    this.props.chipDelete(chipToDelete)

    this.setState(state => {
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
    
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let icon = null;

          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }

          return (
            <Chip
              key={data.key}
              icon={icon}
              label={data.label}
              onDelete={this.handleDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);