import { CategoryModel } from "../models"
import { CategoryInterface } from "../types/categoryType";

const createCategory = async (data : CategoryInterface) => {
    try {
        const category = await CategoryModel.create(data);
        return category
    } catch (error : any) {
        throw new Error(error);
    }
}

const editCategory = async (id : string, data : Object) => {
    try {
        return await CategoryModel.findByIdAndUpdate(id, data, {returnOriginal: false})
    } catch (error : any) {
        throw new Error(error);
    }
}

const deleteCategory = async (id : string) => {
    try {
        return await CategoryModel.findByIdAndDelete(id)
    } catch (error : any) {
        throw new Error(error);
    }
}


const getCategoryById = async (id: string) => {
    try {
        return await CategoryModel.findById(id);
    } catch (error : any) {
        throw new Error(error)
    }
}

export default {
    createCategory,
    editCategory,
    deleteCategory,
    getCategoryById
}
