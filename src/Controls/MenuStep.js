import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  card: {
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: '#fafafa',
  },
  imgChecked: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1)
  },
}))

const MenuStep = props => {

  const classes = useStyles()
  const menuStep = [
    {
      id: 1,
      img: 'https://cdn5.vectorstock.com/i/1000x1000/11/19/green-grunge-check-mark-correct-answer-checking-vector-22351119.jpg',
      title: 'Project Info'
    },
    {
      id: 2,
      img: 'https://cdn5.vectorstock.com/i/1000x1000/11/19/green-grunge-check-mark-correct-answer-checking-vector-22351119.jpg',
      title: 'Project Request'
    },
    {
      id: 3,
      img: 'https://cdn5.vectorstock.com/i/1000x1000/11/19/green-grunge-check-mark-correct-answer-checking-vector-22351119.jpg',
      title: 'Installation Detial'
    },
    {
      id: 4,
      img: 'https://cdn5.vectorstock.com/i/1000x1000/11/19/green-grunge-check-mark-correct-answer-checking-vector-22351119.jpg',
      title: 'Request Detial'
    },
    {
      id: 'End',
      img: 'https://cdn5.vectorstock.com/i/1000x1000/11/19/green-grunge-check-mark-correct-answer-checking-vector-22351119.jpg',
      title: 'Summary'
    }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container direction="row" alignItems="flex-end">

          <Grid item xs={2}>
            <Button variant="contained" startIcon={<GpsFixedIcon />} style={{ textTransform: 'none', backgroundColor: '#20af80', color: '#FFFFFF' }}>Initial Project</Button>
          </Grid>
          <Grid item xs={10}>

            <Grid container direction="row" justify="flex-end">

              {
                menuStep.map((item, index) => {
                  return (
                    <Grid item xs={2} key={index}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardContent style={{ padding: '0px', paddingBottom: '16px' }}>
                            <Typography gutterBottom variant="caption" component="h2">
                              [{item.id}]
                            </Typography>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                              <img src={item.img} className={classes.imgChecked} />
                              <span style={{ font: '11.3333px Arial' }}>{item.title}</span>
                            </Grid>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                })
              }

            </Grid>
          </Grid>

        </Grid>
      </Container>
    </div>)
}

export default MenuStep
