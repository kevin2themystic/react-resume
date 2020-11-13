import SkillModel from "./SkillModel";

export default interface SkillCategoryModel {
    categoryID: number;
    category: string;
    skills: SkillModel[]
}