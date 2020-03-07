using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        void AddCategories(Category cat);
        void AddSubCategories(SubCategory subCat);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int cat_id);
        List<Seller> GetSeller();
        List<Buyer> GetBuyer();
        void DeleteCategory(int cat_id);
        void DeleteSubCategory(int subCat_id);
        void UpdateCategory(Category cat);
        void UpdateSubCateory(SubCategory subcat);
        Category GetCategoryById(int cat_id);
        SubCategory GetSubCateoryById(int subcat_id);
        Category GetCategoryByName(string name);
        SubCategory GetSubCateoryByName(string name);

    }
}
