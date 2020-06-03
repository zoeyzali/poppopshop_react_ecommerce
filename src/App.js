import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { Header } from './components/Header'
import { GlobalProvider } from './context/GlobalContext'
import { EditDetails } from './components/EditDetails'
import { ProductsList } from './components/Products'
import { CartProvider } from './context/CartContext'
import { CartList } from './components/CartList'
import { ApparelsList } from './components/popupShopEx/ApparelsList'
import { ApparelDetails } from './components/popupShopEx/ApparelDetails'

function App() {
    const [isEditing, setEditing] = useState( false )

    const EditButton = () => (
        <button className="navlinks__item edit__btn" onClick={() => setEditing( prevValue => !prevValue )}>{!isEditing ? "Edit Info" : "Save Info"}
        </button> )
    return (
        <Router>
            <GlobalProvider>
                <CartProvider>
                    <div className="container">
                        <Header EditButton={EditButton} />
                        <Switch>
                            {!isEditing ?
                                <Route exact path="/" component={HomePage} />
                                :
                                <Route exact path="/" component={EditDetails} />
                            }
                            <Route exact path="/products" component={ProductsList} />
                            <Route exact path="/cart" component={CartList} />
                            <Route exact path="/fashion" component={ApparelsList} />
                            <Route exact path="/fashion/:handle" component={ApparelDetails} />

                        </Switch>
                    </div>
                </CartProvider>
            </GlobalProvider>
        </Router>
    )
}

export default App

/**   <footer>
     <span>Eh some stuff@2020</span>
  </footer>

   <Route path="/fashion/:handle" render={( props ) => <ApparelDetails data={props.product} {...props} />} />
  */
