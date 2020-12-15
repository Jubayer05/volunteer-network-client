import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./VolunteerEvent.css";
import { Link } from 'react-router-dom';
import { Volunteering } from '../../App';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const VolunteerEvent = (props) => {
    const {volunteerInfo, selectedEvent} = useContext(Volunteering);
    const [info, setInfo] = volunteerInfo;
    
    const handleCardData = (e) => {
      const newInfo = {...info, ...e};
      setInfo(newInfo);
    }

    const {image, eventName} = props.item;
    console.log(image, eventName);
    const classes = useStyles();
    return (
      
        <Card className="card-effect" onClick={() => handleCardData(props.item)}>
        <CardActionArea >
        <Link to="/register" >
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {eventName}
            </Typography>
          </CardContent>
          </Link>
        </CardActionArea>
      </Card>
      
    );
};

export default VolunteerEvent;