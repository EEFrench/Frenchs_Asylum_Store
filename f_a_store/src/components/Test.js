  
export default Cart.js;

useEffect(() => {
  let finalSizeArray = props.product.variants[0].options.map(option => {
    let sizeInfo = {}

    sizeInfo.key = option.name
    sizeInfo.text = option.name
    sizeInfo.value = option.id

    return sizeInfo
  })

  setSizes(finalSizeArray)
}, [])