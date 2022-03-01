import { setIsLoading } from '../redux/app/slice';
import { setImages } from '../redux/images/slice';
import { api } from './apiConfig';

export const getImages = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await api.get('/images');
            dispatch(setImages(data));
            return data
        } catch (e) {
            console.log({ e });
            throw e;
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}

export const getNewImages = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await api.get('/images/update');
            dispatch(setImages(data));
            return data
        } catch (e) {
            console.log({ e });
            throw e;
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}