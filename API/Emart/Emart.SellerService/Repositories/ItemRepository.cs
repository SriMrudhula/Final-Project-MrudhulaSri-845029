using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Emart.SellerService.Repositories
{
    public class ItemRepository : IItemInterface
    {
        private readonly EmartContext _context;
        public ItemRepository(EmartContext context)
        {
            _context = context;
        }
        public List<Category> GetCategories()
        {
            List<Category> cat = _context.Category.ToList();
            return cat;
        }
        public List<SubCategory> GetSubCategories(int cat_id)
        {
            List<SubCategory> subCat = _context.SubCategory.Where(e => e.CatId == cat_id).ToList();
            return subCat;
        }
        public void AddItem(Items i)
        {
            _context.Items.Add(i);
            _context.SaveChanges();
        }

        public void DeleteItem(int id)
        {
            Items i = _context.Items.Find(id);
            _context.Items.Remove(i);
            _context.SaveChanges();
        }

        public Items GetItems(int id)
        {
            return _context.Items.Find(id);
        }

        public void UpdateItem(Items i)
        {
            _context.Items.Update(i);
            _context.SaveChanges();
        }
        public List<Items> ViewItems(int sid,int subcat_id)
        {
            List<Items> items = _context.Items.Where(e => e.SellerId == sid && e.SubCatId==subcat_id).ToList();
            return items;
        }

        Seller IItemInterface.GetIdByName(string name)
        {
            return _context.Seller.SingleOrDefault(e => e.Username == name);
        }
        Category IItemInterface.GetCategoryById(int cat_id)
        {
            return _context.Category.Find(cat_id);
        }

        SubCategory IItemInterface.GetSubCategoryById(int subcat_id)
        {
            return _context.SubCategory.Find(subcat_id);
        }
    }
}
