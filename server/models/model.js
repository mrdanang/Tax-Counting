
class Model {
  static TaxCounting (params) {
    //params.imported = Boolean(params.imported)
    console.log(params, 'di model')
    // params.price = +params.price
    // params.qty = +params.qty
    let tax
    if(params.imported === 'true'){
      if(params.type === 'food' || params.type === 'books' || params.type === 'medical'){
        tax = (params.price * (5/100))
      }else{
        tax = (params.price * (15/100))
      }
    }else{
      if(params.type === 'food' || params.type === 'books' || params.type === 'medical'){
        tax = 0
      }else{
        tax = (params.price * (10/100))
      }
    }
    return {
      "name" : params.name,
      "type" : params.type,
      "price" : params.price,
      "qty" : params.qty,
      "imported": params.imported,
      "tax" : (tax * params.qty).toFixed(2),
      "subTotal" : ((params.price + tax) * params.qty).toFixed(2)
    }
  }
}

module.exports = Model