

const SET_IMAGEURL = "SET_IMAGEURL"


const defaulStore = {
    imageUrl: 'https://citaty.info/files/no_avatar.png',
    
}

export default function imageUploadReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_IMAGEURL:
            return {
                ...state,
                
                imageUrl: action.payload
            }
        

        default:
            return state
    }

}
export const setImageUrl = (imageUrl) => ({
    type: SET_IMAGEURL,
    payload: imageUrl

})