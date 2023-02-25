/* eslint-disable array-callback-return */
import React, {createContext, useEffect, useState} from 'react';
import {propertyData} from '../data'

// send emai 


export const PropertyContext = createContext();
const PropertyContextProvider = ({ children}) => {

      const [houses, setHouses] = useState(propertyData)
      const [location, setLocation] = useState('Location (any)')
      const [locations, setLocations] =useState([])
      const [property, setProperty] = useState('Property Type (any)')
      const [properties, setProperties] = useState([])
      const [price, setPrice] = useState('Price range (any)')
      const [loading, setLoading] = useState(false)

// Location 
// all location 
useEffect(() => {
  const allLocations = houses.map((loc) => {
    return loc.location
  })

  // remove location duplicat 
  const uniqueLocations = ['Location (any)', ...new Set(allLocations)]
  
  setLocations(uniqueLocations)
}, [houses])

// property 
// all property 
useEffect(() => {
  const allProperties = houses.map((pry) => {
    return pry.type
  })

// remove duplicat property 
const uniqueProperties = ['Property (any)', ...new Set(allProperties)]

setProperties(uniqueProperties)
}, [houses])

const handleClick = () => {
    //  seting default product 
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    }

    //! funcion untuk mencari harga terkecil dan terbesar dari range yang ada 
    //? mencari harga paling kecil dari range 
    const minPrice = parseInt(price.split(' ')[0])
    //? mencari harga paling besar dari range 
    const maxPrice = parseInt(price.split(' ')[2])
       

    const searchProduct = propertyData.filter(function (product) {
      const productPrice = parseInt(product.price);

      if (product.location === location &&
        product.type === property &&
        productPrice >= minPrice &&
        productPrice <= maxPrice) {
        return product;
      }

      /* ? default unutk pertama kali muncul maka product dimunculkan semua jika posisi any maka
      akan muncul semua
      ! isDefault = stop
      ! !isDefault = start harus meilih pilihan jika tidak data akan tidak ditemukan
      */
      // ? single 

      // ! default
      if (isDefault(location) && isDefault(property) && isDefault(price)) {
        return product
      }
      
      //!location
      else if (!isDefault(location) && isDefault(property) && isDefault(price)) {
        return product.location === location
      }
      //! property
      else if (isDefault(location) && !isDefault(property) && isDefault(price)){
        return product.type === property
      }
    
    //!price
      else if ( isDefault(location) && isDefault(property) && !isDefault(price)){
      return productPrice >= minPrice && productPrice <= maxPrice
    }
      //! not singgle
    else if (!isDefault(location) && !isDefault(property) && isDefault(price)) {
      return product.location === location && product.type === property
    } 
    else if (!isDefault(location) && isDefault(property) && !isDefault(price)) {
      return product.location === location && productPrice >= minPrice && productPrice <= maxPrice
    } 
    else if (isDefault(location) && !isDefault(property) && !isDefault(price)) {
      return product.type === property && productPrice >= minPrice && productPrice <= maxPrice
    } 

    //! all 

    else if (!isDefault(location) && !isDefault(property) && !isDefault(price)) {
      return product.location === location && product.type === property && productPrice >= minPrice && productPrice <= maxPrice
    } 


    });
    setLoading(!loading)
    // set timout
    setTimeout(() => {
      return( 
        
         // jika ptoduct tidak ada maka set kosong jika ada muncul semua atau yang hanya dipilih oleh user saja
      searchProduct.length < 1 ? setHouses([]) 
     
      : setHouses(searchProduct),
      setLoading((state) => !state)
      )
     
    } ,1000)

  //  kirim email 



  }
  return (
    <PropertyContext.Provider value={{
      houses, 
      setHouses,
      location,
      setLocation,
      locations,
      setLocations,
      property,
      properties,
      setProperties,
      setProperty,
      setPrice,
      price,
      setLoading,
      handleClick,
      loading
    }}
    
    > {children}</PropertyContext.Provider>
  )
}
  


export default PropertyContextProvider;
