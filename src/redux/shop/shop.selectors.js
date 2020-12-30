import { createSelector } from 'reselect';


const selectshop = state => state.shop;

export const selectedShopData = createSelector([selectshop], shop => shop.collections); //memorizes the selected collection state;

export const selectCollectionsForPreview = createSelector(
    [selectedShopData],
    collections => Object.keys(collections).map(key => collections[key])
    )
//[hats,jackats,mens,womens] collection object with key value pairs hats:{...}


export const selectCollection = collectionUrlPara => createSelector(
    [selectedShopData],
    collections => collections[collectionUrlPara]
) ;