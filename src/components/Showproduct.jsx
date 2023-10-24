import list from './data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";

const Showproduct = () => {
  return (
            <>
              <h1 style={{textAlign:'center', marginTop:'10px', marginBottom:'10px'}}>Product Detail Page</h1>
              <Container style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                  {
                    list.map((val)=>(
                      <Card key={val.id} sx={{ maxWidth: 345 , margin:'20px'}}>
                          <img src={val.image} alt={val.name} style={{width:'300px', height:'250px', display:'block', margin:'auto'}} />
                          <CardContent>
                            <Typography style={{textAlign:'center', marginTop:'0px'}}  gutterBottom variant="h5">
                              {val.name}
                            </Typography>
                            <Typography style={{textAlign:'center', marginBottom:'0px'}} gutterBottom variant="h6">
                              {val.price}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button style={{display:'block', margin:'auto', backgroundColor:'green', color:'black', marginBottom:'5px'}}>Add to Cart</Button>
                          </CardActions>
                        </Card>

                    ))
                  }

              </Container>
              
                    
            </>

          
  )
}

export default Showproduct