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
        void DeleteCategory(Category cat_id);
        void DeleteSubCategory(SubCategory subCat_id);


    }
}
