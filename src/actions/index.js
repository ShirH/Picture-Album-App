export const NEW_PHOTOS = "NEW_PHOTOS";
export const CHANGE_MODAL_STATE = "CHANGE_MODAL_STATE";

export function fetchPhotos(){
    const photos = getPhotos();
    return {
        type: NEW_PHOTOS,
        payload: photos
    };

}

export function changeModalVisibility(bCurrenState){
    return {
        type: CHANGE_MODAL_STATE,
        payload: !bCurrenState
    };
}

function getPhotos(){
    return {
        img1: "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
        img2: "http://telegraphsun.com/wp-content/uploads/2016/11/1-2.jpg",
        img3: "http://www.apartmentguide.com/blog/wp-content/uploads/2009/09/How-To-Walk-A-Dog-In-Your-Apartment-Community-Take-Advantage-of-Nearby-Green-Spaces.jpg",
        img4: "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
        img5: "http://telegraphsun.com/wp-content/uploads/2016/11/1-2.jpg",
        img6: "http://www.apartmentguide.com/blog/wp-content/uploads/2009/09/How-To-Walk-A-Dog-In-Your-Apartment-Community-Take-Advantage-of-Nearby-Green-Spaces.jpg",
        img7: "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
        img8: "http://telegraphsun.com/wp-content/uploads/2016/11/1-2.jpg",
        img9: "http://www.apartmentguide.com/blog/wp-content/uploads/2009/09/How-To-Walk-A-Dog-In-Your-Apartment-Community-Take-Advantage-of-Nearby-Green-Spaces.jpg",
        img10: "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
        img11: "http://telegraphsun.com/wp-content/uploads/2016/11/1-2.jpg",
        img12: "http://www.apartmentguide.com/blog/wp-content/uploads/2009/09/How-To-Walk-A-Dog-In-Your-Apartment-Community-Take-Advantage-of-Nearby-Green-Spaces.jpg"
    }
}