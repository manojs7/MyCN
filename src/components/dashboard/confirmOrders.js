import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Pagination from "../Pagination";
import { X } from "feather-icons-react/build/IconComponents";
import {format} from 'date-fns';
import { paginate } from "../paginate";


const ConfirmOrder = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const paginatedPosts = paginate(products, currentPage, pageSize);
  


 const onPageChange = (page) => {
   setCurrentPage(page);

 };
  //calling the data from database
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData=async ()=>{
    await fetch("/api/saveCompletedOrderDetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (a) {
        return a.json();
      }).then(function (json) {
        // console.log("prodcuts2",json.data)
       setProducts(json.data)
      })
    }
    

  return (
    <BaseCard title="Orders Submitted" sx={{
      overflow: "auto",
    }}>
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Contact
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                PAX
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Event Details
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Budget
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                CreatedAt
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {paginatedPosts?
          paginatedPosts.map((product) => (
            <TableRow key={product.createdAt}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.name}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.mobileno}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                     {product.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                {(product.people)}[{product.veg_c}v+{product.nonveg_c} nv]

                </Typography>
              </TableCell>
              <TableCell>
                {/* <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: product.pbg,
                    color: "#fff",
                  }}
                  size="small"
                  label="{product.priority}"
                ></Chip> */}


<Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.time} {format(new Date(product.date), 'dd/MM/yyyy')}
                      
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                     <select style={{maxWidth:"120px"}}>
                            <option value="">Selected Menu</option>
                            {product.appetizer.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            

                            {product.mainCourse.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            {product.breadRice.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            {product.dessert.map((item,index)=>(
                                <option value={item.name}>{item.name} [<b>{item.quantity} {item.Qtype}</b>]</option>    
                            ))}
                            
                        </select>
                    </Typography>
                    
                  </Box>
                </Box>
                
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">{product.grandTotal}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">{format(new Date(product.createdAt), 'p, dd/MM/yyyy')}</Typography>
              </TableCell>
              <TableCell>
              <Typography variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}>
                      <button className="btn btn-primary">
                        Punch to Clappia
                      </button>
                    </Typography>
              </TableCell>
            </TableRow>
          ))
          :""}
        </TableBody>
      </Table>
      <Pagination
       items={products.length} // 100
       currentPage={currentPage} // 1
       pageSize={pageSize} // 10
       onPageChange={onPageChange}
        />
    </BaseCard>
    
  );
};

export default ConfirmOrder;
