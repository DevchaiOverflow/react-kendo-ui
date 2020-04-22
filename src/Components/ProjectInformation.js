import React from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
// Material ui
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  form: {
    padding: 20,
  }
});

const ProjectInformation = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper className={classes.form}>
          <Typography variant="h6" gutterBottom>Project Information</Typography>
          <Formik
            enableReinitialize
          // initialValues={initialFormHook.initialFormAdd(fieldData)}
          >
            {
              (props) => {
                return (
                  <Form>
                    <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

                    </Grid>
                  </Form>
                )
              }
            }
          </Formik>
        </Paper>
      </Container>
    </div>
  )
}

export default ProjectInformation
