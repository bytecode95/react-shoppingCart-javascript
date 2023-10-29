import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const CartContent = ({cartItem, setCartItem, adding, removing}) => {
 


  const navigate = useNavigate();

  return (
    <Container style={{marginTop:'50px'}}>
      <h2 style={{textAlign:'center', color:'green'}}>CartContent</h2>
      <button onClick={()=>{navigate('/')}} style={{padding:'10px', paddingInline:'25px' ,backgroundColor:'black', borderRadius:'15px', color:'white', marginBottom:'15px', display:'block', margin:'auto', cursor:'pointer'}}>Continue Shopping</button>
       <TableContainer style={{marginTop:'50px'}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>name</TableCell>
              <TableCell>adjustment</TableCell>
              <TableCell>quantity</TableCell>
              <TableCell>price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItem.map((val, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell ><img style={{width:'50px', height:'50px'}} src={val.image}/></TableCell>
                <TableCell >{val.name}</TableCell>
                <TableCell>
                  <button  onClick={()=>adding(val, +1)} >+</button>
                  <button  >{val.qty}</button>
                  <button  onClick={()=>removing(val, -1)}>-</button>
                </TableCell>
                <TableCell >{val.qty}</TableCell>
                <TableCell >{val.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
   
  )
}

export default CartContent