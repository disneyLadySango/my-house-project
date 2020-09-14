import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core'
import media from 'styled-media-query'
import { TopImageLink } from '../../../const/Image'

interface IProps {
  value: LoginProps
  onChange: Function
  login: Function
}
interface LoginProps {
  id: string
  password: string
  watchword: String
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage: React.FC<IProps> = props => {
  const [count, setCount] = useState(0)
  const [imageCount, setImageCount] = useState(0)
  const classes = useStyles();
  const loginCheck = () => {
    if (count !== 5) {
      return
    }
    if (imageCount !== 1) {
      return
    }
    if (props.value.id !== '') {
      return
    }
    if (props.value.password !== 'わんたろう') {
      return
    }
    if (props.value.watchword !== 'わんたろう') {
      return
    }
    props.login(true)
  }
  return (
    <Component>
      <CssBaseline />
      <Image onClick={() => setImageCount(imageCount + 1)} />
      <DetailContainer>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <FormContainer>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="ユーザID"
            type="text"
            autoFocus
            value={props.value.id}
            onChange={(e) => props.onChange(e.target.value, 'id')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="パスワード"
            type="text"
            value={props.value.password}
            onChange={(e) => props.onChange(e.target.value, 'password')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="合言葉"
            type="text"
            value={props.value.watchword}
            onChange={(e) => props.onChange(e.target.value, 'watchword')}
          />
          <Button
            onClick={() => setCount(count + 1)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Typography onClick={loginCheck} variant="body2" color="textSecondary" align="center">
            ログイン方法については管理者にご確認ください
          </Typography>
        </FormContainer>
      </DetailContainer>
    </Component>
  )
}

export default LoginPage

const Component = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Image = styled.div`
  background-image: url(${TopImageLink[Math.floor( Math.random() * TopImageLink.length ) ]});
  background-repeat: no-repeat;
  background-color: #E5E5E5;
  background-size: cover;
  background-position: center;
  ${media.lessThan('medium')`
    width: 100%;
    height: 200px;
  `}
  ${media.greaterThan('medium')`
    width: 50%;
    height: 100%;
  `}
`
const DetailContainer = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('medium')`
    width: 100%;
  `}
  ${media.greaterThan('medium')`
    width: 50%;
  `}  
`
const FormContainer = styled.form`
  width: 100%;
`