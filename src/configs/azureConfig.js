const urlPrefix = 'http://brc-spring-demo.azurewebsites.net';
export const authenticate = () => `${urlPrefix}/api/v1/auth/authenticate`;
export const register = () => `${urlPrefix}/api/v1/auth/register`;
export const imageSearchByTitle = (page, decodedTitle) => `${urlPrefix}/api/v1/image/images-names-page/search/${page}/${decodedTitle}`;
export const imageSearchByUser = (page, decodedUser) => `${urlPrefix}/api/v1/image/images-names-page/user/${page}/${decodedUser}`;
export const imageSearchByProfile = (page) => `${urlPrefix}/api/v1/image/images-names-page/profile/${page}`;
export const imageSearchByLiked = (page) => `${urlPrefix}/api/v1/image/images-names-page/liked/${page}`;
export const imageSearchAll = (page) => `${urlPrefix}/api/v1/image/images-names-page/${page}`
export const imageUpload = () => `${urlPrefix}/api/v1/image/create`;
export const imageUploadBlob = () => `${urlPrefix}/api/v1/blob/upload`;
export const deleteImageById = (decodedImageId) => `${urlPrefix}/api/v1/image/delete/${decodedImageId}`;
export const imageGetDetails = (decodedImageId) => `${urlPrefix}/api/v1/image/image-get-details/${decodedImageId}`;
export const likeImageById = () => `${urlPrefix}/api/v1/like/like-image`;