import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import list from '../components/data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Productdetail = ({updateCart}) => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  const [amount, setAmount] = useState(1);

  


  useEffect(()=>{
    const getProductbyID = ()=>{
      const data = list.find((val)=>{return val.id === id});
      
      setProduct(data);
    }
    
    getProductbyID();
   
  },[id])





  return (
    <Container style={{marginTop:'70px',display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Card sx={{ maxWidth: 400 }}>
            <img style={{width:'400px', height:'400px'}} src={product.image} alt={product.name}/>
            <CardContent>
              <Typography style={{fontSize:'30px', textAlign:'center', fontWeight:'bold'}}>
                {product.name}
              </Typography>
              <Typography style={{fontSize:'20px', textAlign:'center', fontWeight:'bold'}} >
                {product.price}
              </Typography>
              <div>
                <input type="number" id="typeNumber" onChange={(val) => {
                    setAmount(val.target.value)
                }} defaultValue={1} min={1} max={product.quantity} style={{marginTop:'5px', marginBottom:'5px', marginInline:'150px', fontSize:'18px'}}/>
              </div>
              <Typography style={{fontSize:'20px', textAlign:'center', fontWeight:'bold'}} >
              {product.decription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>{updateCart(product,amount)}} style={{display:'block', margin:'auto', backgroundColor:'Yellow', color:'black', fontWeight:'bold'}}>Update cart</Button>
            </CardActions>
        </Card>

    </Container>
    
  )
}

export default Productdetail