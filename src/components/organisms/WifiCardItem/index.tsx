import React from 'react'
// import styled from 'styled-components'
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
} from '@material-ui/core';

interface IProps {
  title: string
  ghz: string
  password: string
}

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
});

const WifiCardItem: React.SFC<IProps> = props => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}  
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.ghz}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigator.clipboard.writeText(props.password)}
        >
          パスワードをコピー
        </Button>
      </CardActions>
    </Card>
  )
}
export default WifiCardItem