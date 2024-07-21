import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.comonent';


import './shop.styles.scss'

const Shop = () => {
    return (
        <div className="shop-container">
            <Routes>
                <Route index element={<CategoriesPreview/>} />
                <Route path=':category' element={<Category/>} />
            </Routes>
        </div>
    );
}

export default Shop;