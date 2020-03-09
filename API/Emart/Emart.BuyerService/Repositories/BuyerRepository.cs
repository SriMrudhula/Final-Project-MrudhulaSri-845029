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
        public Category GetCategoryByName(string name)
        {
            return _context.Category.SingleOrDefault(e => e.CatName == name);
        }

        public SubCategory GetSubCateoryByName(string name)
        {
            return _context.SubCategory.SingleOrDefault(e => e.SubCatName == name);
        }

        public List<Items> SearchItem(string name)
        {
            Category cat = GetCategoryByName(name);
            SubCategory subcat = GetSubCateoryByName(name);
            if (cat != null)
            {
                List<Items> items = _context.Items.Where(e => e.CatId == cat.CatId).ToList();
                return items;
            }
            else if (subcat != null)
                return _context.Items.Where(e => e.SubCatId == subcat.CatId).ToList();
            else
                return _context.Items.Where(e => e.ItemName == name).ToList();


        }
        public List<PurchaseHist> PurchaseHistory(int bid)
        {
            List<PurchaseHist> item = _context.PurchaseHist.Where(e => e.BuyerId == bid).ToList();
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
        public void AddToCart(Cart cart)
        {
            _context.Cart.Add(cart);
            _context.SaveChanges();
        }

        public List<Cart> ViewCart(int buyerId)
        {
            return _context.Cart.Where(e => e.BuyerId == buyerId).ToList();
        }

        public void RemoveFromCart(int cartid)
        {
            Cart cart = _context.Cart.Find(cartid);
            _context.Remove(cart);
            _context.SaveChanges();
        }
        public Items GetItem(int id)
        {
            return _context.Items.Find(id);
        }
    }
}
