export function handleApiErrors(result){
  if (result.code != 200){
    return {
      error : {message :'Unknown api error'}
    };
  }
}



export function transfromApiProductsToLocalProducts(products){
  return products.map((product,i)=>{
    let {id, price, product_name, product_image, description} = product;
    return {
      id: id,
      price:  price,
      productName: product_name,
      description: description,
      productImage: product_image
    }
  })
}
