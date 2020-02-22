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
        List<Items> ViewItems(int sid);
        void DeleteItem(int id);

    }
}
