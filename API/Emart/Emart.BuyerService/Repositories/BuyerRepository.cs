using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartContext _context;
        public BuyerRepository(EmartContext context)
        {
            _context = context;
        }
        public void BuyItem(PurchaseHist item)
        {
            _context.PurchaseHist.Add(item);
            _context.SaveChanges();
        }

        public void EditProfile(Buyer buyer)
        {
            _context.Buyer.Update(buyer);
            _context.SaveChanges();
        }

        public Buyer GetProfile(int bid)
        {
            return _context.Buyer.Find(bid);
        }

        public List<Items> SearchItem(string name)
        {
            List<Items> item = _context.Items.Where(e => e.ItemName == name).ToList();
                return item;
        }

        public List<PurchaseHist> PurchaseHistory(int bid)
        {
            List<PurchaseHist> item = _context.PurchaseHist.Where(e => e.Id == bid).ToList();
            return item;
        }
        public List<Category> GetCategories()
        {
            List<Category> cat = _context.Category.ToList();
            return cat;
        }
        public List<SubCategory> GetSubCategories(int cat_id)
        {
            List<SubCategory> subCat = _context.SubCategory.Where(e=>e.CatId==cat_id).ToList();
            return subCat;
        }
        public List<Items> ViewCart()
        {
            return _context.Items.ToList();
        }

        public List<Category> GetCategoryByName(string name)
        {
            return _context.Category.Where(e => e.CatName == name).ToList();
        }

        public List<SubCategory> GetSubCateoryByName(string name)
        {
            return _context.SubCategory.Where(e => e.SubCatName == name).ToList();
        }

        public List<Items> ItemSearch(int id)
        {
            return _context.Items.Where(e => e.SubCatId == id).ToList();
        }
    }
}
