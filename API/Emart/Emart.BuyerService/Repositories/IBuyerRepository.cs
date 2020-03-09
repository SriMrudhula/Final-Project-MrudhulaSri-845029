using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
namespace Emart.BuyerService.Repositories
{
    public interface IBuyerRepository
    {
        void EditProfile(Buyer buyer);
        Buyer GetProfile(int bid);
        void BuyItem(PurchaseHist item);
        List<Items> SearchItem(String name);
        List<PurchaseHist> PurchaseHistory(int bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int cat_id);
        Category GetCategoryByName(string name);
        SubCategory GetSubCateoryByName(string name);
        

        void AddToCart(Cart cart);
        List<Cart> ViewCart(int buyerId);
        void RemoveFromCart(int cartid);
        public Items GetItem(int id);
    }
}
