using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
namespace Emart.SellerService.Repositories
{
   public interface IItemInterface
    {
        void AddItem(Items item);
        void UpdateItem(Items item);
        Items GetItems(int id);
        List<Items> ViewItems(int sid, int subcat_id);
     
        void DeleteItem(int id);

        public List<SubCategory> GetSubCategories(int cat_id);
        public List<Category> GetCategories();

        Category GetCategoryById(int cat_id);
        SubCategory GetSubCategoryById(int subcat_id);


    }
}
