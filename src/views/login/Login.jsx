import  React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Collapse from '@mui/material/Collapse'
import { createTheme, ThemeProvider } from '@mui/material/styles';


//REDUX
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import { fetchUsuario } from "../../redux/actions/login";

import shortid from "shortid";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DynamiteTeam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
{/* axxx */}
const theme = createTheme();


//LOGIN
const Login = ({fetchUsuario, error, data}) => {



//REDUX




  /* CARGAR DATOS */



  const [email, setUsuario] = useState('')
  const[errorMessage, setErrorMessage] = useState (null)
 



 
 
   const enviarUsuario =async (e) => {
    
    e.preventDefault()

  

  
    fetchUsuario(email)

    

  
    let filteredUsers = data.filter(datas => {
      
      return datas.email === email 
  });

  if (filteredUsers.length === 0) {
    
    return console.log("error")
  }

    console.log(filteredUsers)
 
     console.log("entro")
     window.location.href= `/Panel`
   } 

  


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />


        {/*  Imagen del LOGIN  */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://scontent.ffma3-1.fna.fbcdn.net/v/t39.30808-6/301177745_380791927563169_4358606101356264775_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4QPPdw-6PCMAX_wUPYV&tn=ViPpngCOQDQaiwnv&_nc_ht=scontent.ffma3-1.fna&oh=00_AT-HJpkU1fsLveoTfI9rfyfW_hPereTALdJa7x_AnULYcQ&oe=63334D03)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue'  }}/>
          
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"  sx={{ mt: 1 }}>
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setUsuario(e.target.value)}
                autoFocus
              />
      

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={enviarUsuario}
              >
                Sign In
              </Button>
              <br/>

              {error !== '' && <span className='text-danger'>error</span>}


           {/*    <p style={{color:"red"}}>{errorMessage}</p> */}
              
					

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


//SACAR DEL ESTADO 
const mapStateToProps = state => ({
  error: state.buscadorUsuario.error,
  data: state.buscadorUsuario.data
})

//{login} LO PASAMOS ARRIBA 
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE 
export default connect(mapStateToProps, { fetchUsuario })(Login)