import React, {  useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router-dom';
import { setAddMoreProducts } from '../../reducers/cartReducer';
import "./ListPage.css"
import CustomButton from '../CustomButton/CustomButton';
import CategoryBar from '../CategoryBar/CategoryBar';
import { v4 as uuidv4 } from 'uuid';

const ListPage = () => {
    const {category}= useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchedValue , setSearchedValue] = useState('');
    
    const product = useSelector(state=> state.products.items)

    const filterItemsAndSort = useMemo(() => {
        let filteredItems;
        filteredItems = product.filter(item => item.title.toLowerCase().includes(searchedValue));
        if(category) filteredItems = filteredItems.filter(item => item.category === category);
        return sortByRating(filteredItems);
     }, [product, searchedValue, category]);
    

    function sortByRating(arr){
        const temp = JSON.parse(JSON.stringify(arr))
        temp.sort((a,b)=>a.rating.rate < b.rating.rate ? 1 : -1)
        return temp
    }


    const goBack = ()=>navigate(-1)
    return (
        <div className='content-products'>
            <SearchBar setSearchedValue={setSearchedValue} />
            <div className='filter'>
                <CategoryBar/>
                <div className='listOfProductsItem'>
                 {
                 category
                 ? 
                 <>
                 
                 <div className='btn-and-products'>
                    <button className='list-btn' onClick={goBack}>Go back</button>
                    {
                        
                        filterItemsAndSort.map(product=>
                            <div >
                                <Product key={uuidv4()} prod={product}>
                                 <CustomButton  clickHandler={() =>dispatch(setAddMoreProducts(product.id , product.price)) } />
                                </Product>
                           </div>  
                        )

                    }
                 </div>
                 </>
                :
                filterItemsAndSort.map(product=>
                    <div>
                        <Product key={uuidv4()} prod={product}>
                            <CustomButton clickHandler={() =>dispatch(setAddMoreProducts(product.id , product.price)) } />
                        </Product>
                   </div>  
                    )
               
                
                }
                </div>
            </div>
        </div>
    );
};

export default ListPage;