import React, { Component } from 'react';
import {Fragment} from 'react'
//import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchProducts,fetchCart,addToCart} from './actions'
import ProductGrid from './components/componentGrid'
import CartTable from './components/componentCartTable'

class App extends Component {
  componentWillMount(){
    this.props.fetchProducts()
    this.props.fetchCart()
  }
  addToCart=(product)=>{
   
    this.props.addToCart(product._id,1)
    console.log('product button:',product)
  }
  render() {
    const {products,cart,isProductLoading}=this.props
    
    console.log('props',products)
    if(isProductLoading){
      return <h2>Loading...</h2>
    }
    return (
      <div className="App">
       SHOP APPLICATION:
       
       <Fragment>
         <ProductGrid products={products} addToCart={this.addToCart} />
         <CartTable cart={cart} />
       </Fragment>
      
      
        <div id="id1">radial</div>
        <div id="id2">transition</div>
        <header className="App-header">
        TEST
        <div className="column">

       <form> 
       <input type="reset" value="reset" />
       <input type="submit" value="SUBMIT ME" />
       <input type="submit" value="SUBMIT " />
       <input type="submit" value="SUBMIT " />
       </form>

        <p>Lorem ipsum <br />dolor sit amet, eam cu ipsum vitae conclusionemque, cu mel affert oratio. Partem laboramus scribentur cum ne, affert patrioque has at. Est ludus commune scriptorem an, per ea doctus rationibus. Aliquam ornatus in his, ex laudem minimum abhorreant mea. Et duo dicat decore dolorem. Vis te modo rebum populo, mea diceret noluisse ex. Ludus fabulas adipisci id ius.
        Ad mea debitis nostrum. An ius timeam alienum, sea eu habemus lucilius moderatius. Ex eos scripserit definitionem. At cum oportere forensibus definitiones, ne posse eirmod referrentur eam. Ne per mutat posidonium conclusionemque, an malorum forensibus eum, no brute commune delicatissimi eam.
        </p>
        <p>Usu dicant graeco luptatum no, duo quodsi diceret suscipiantur ei. Enim ullum facete ea qui, et cibo tibique inimicus nec, at vocent aeterno lucilius mel. Ea nam vero nullam, sit cu nominavi nominati. Etiam tation impetus cu ius, est ne solum imperdiet splendide. Est aperiri placerat ne. Vis munere sensibus reformidans ad, ex usu qualisque repudiandae.
        </p>
        
        <p>Vim ad noster consequat quaerendum, te sea dicit munere. Falli consul sententiae ea pro, timeam meliore deserunt no cum, consequat deseruisse mea in. Eros dolorum no usu. Has agam facilisis et, vel eu reque insolens. Minim viderer has ex, eam detraxit constituto expetendis ei, at mea ubique prompta epicuri. Ut autem labores consequuntur per, ne per integre efficiantur
        Ut affert audiam signiferumque vix, an est minim ponderum, debitis electram in qui. His eu elit dolorem, at porro splendide vix. Et mei alii suas, vis ex movet oratio. Eos ea blandit appareat.
        </p>
        
        </div>
        </header>
        <p className="p-styles">Some text from p ...</p>

        <h2 className="cat">Vim ad noster consequat quaerendum, te sea dicit munere. Falli consul sententiae ea pro, timeam meliore deserunt no cum, consequat deseruisse mea in. Eros dolorum no usu. Has agam facilisis et, vel eu reque insolens. Minim viderer has ex, eam detraxit constituto expetendis ei, at mea ubique prompta epicuri. Ut autem labores consequuntur per, ne per integre efficiantur
        Ut affert audiam signiferumque vix, an est minim ponderum, debitis electram in qui. His eu elit dolorem, at porro splendide vix. Et mei alii suas, vis ex movet oratio. Eos ea blandit appareat.
        </h2>
      </div>
    );
  }
}

const getProductById=(products,productId)=>products.find(p=>p._id===productId)
const populatesCartItems=(cart,products)=>({
  ...cart,
  items:cart.items.map(item=>({
    ...item,
    product:getProductById(products,item.productId)
  }))
})
const mapStateToProps=state=>({
  isProductLoading:state.products.isLoading,
  products:state.products.products,
  //cart:state.cart.cart
  cart:populatesCartItems(state.cart.cart,state.products.products)
})
const mapDispatchToProps={
  fetchProducts,
  fetchCart,
  addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
