import React from "react";
import {Route} from 'react-router-dom';


import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {
    console.log(`${match.path}/hats`);
    return  (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryid`} component={CollectionPage} />
        </div>
    )
}


export default ShopPage;