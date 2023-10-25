import list from './data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

const Showproduct = () => {

  const addtoCart = () =>{

  }

  return (
            <>
              <h1 style={{textAlign:'center', marginTop:'10px', marginBottom:'10px'}}>Product Detail Page</h1>
              <Container style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                  {
                    list.map((val)=>(
                      <Card key={val.id} sx={{ maxWidth: 345 , margin:'20px'}}>
                          <img src={val.image} alt={val.name} style={{width:'250px', height:'250px', display:'block', margin:'auto', paddingInline:'10px'}} />
                          <CardContent>
                            <Typography style={{textAlign:'center', marginTop:'0px', fontSize:'20px', fontWeight:'bold'}} >
                              {val.name}
                            </Typography>
                            <Typography style={{textAlign:'center', marginBottom:'0px'}} >
                              LKR: {val.price}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button onClick={addtoCart()} style={{display:'block', margin:'auto', backgroundColor:'#7CFC00', color:'black', marginBottom:'5px'}}>Add to Cart</Button>
                          </CardActions>
                        </Card>

                    ))
                  }

              </Container>
              
                    
            </>

          
  )
}

export default Showproduct