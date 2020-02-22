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

        public List<Items> ViewItems(int sid)
        {
            List<Items> items = _context.Items.Where(e => e.SellerId == sid).ToList();
            return items;
        }
    }
}
