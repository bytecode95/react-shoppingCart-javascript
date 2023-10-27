import list from './data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import {useMyContext} from '../context/quantty'



const Showproduct = () => {

  const navigate = useNavigate();
  const[cartItem, setCartItem] = useState([]);
  const[quantity, setQuantity] = useState(0);
  const { setValue } = useMyContext(0);
 
  
  useEffect(() => {
    // Load previous cart items from local storage on component mount
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItem(storedItems);

  }, []);
  
  const addtoCart = (item) =>{
    const productExist = cartItem.some(val => val.id === item.id);
    
    if(!productExist){
        setCartItem((prevCartItems) => {
        const updatedCart = [...prevCartItems, item];
        setQuantity((prevQuantity) => prevQuantity + 1);
        // Update local storage with the updated cart items
        localStorage.setItem('cart', JSON.stringify(updatedCart));
         // Call setValue with the updated quantity
        setValue(quantity + 1);
        return updatedCart;
      });
    }else{
      console.log("item already added!");
    }
   
    
    
  }

  return (
            <>
              <h1 style={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>Product Detail Page</h1>
              <Container style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                  {
                    list.map((val)=>(
                      <Card key={val.id} sx={{ maxWidth: 345 , margin:'20px'}}>
                        <div onClick={()=>{navigate(`/productdetail/${val.id}`)}} style={{cursor:'pointer'}}>
                          <img src={val.image} alt={val.name} style={{width:'250px', height:'250px', display:'block', margin:'auto', paddingInline:'10px'}} />
                          <CardContent>
                            <Typography style={{textAlign:'center', marginTop:'0px', fontSize:'20px', fontWeight:'bold'}} >
                              {val.name}
                            </Typography>
                            <Typography style={{textAlign:'center', marginBottom:'0px'}} >
                              LKR: {val.price}
                            </Typography>
                          </CardContent>
                        </div>
                          
                          <CardActions>
                            <Button onClick={()=>{addtoCart(val)}} style={{display:'block', margin:'auto', backgroundColor:'#7CFC00', color:'black', marginBottom:'5px'}}>Add to Cart</Button>
                          </CardActions>
                        </Card>

                    ))
                  }

              </Container>
              
                    
            </>

          
  )
}

export default Showproduct