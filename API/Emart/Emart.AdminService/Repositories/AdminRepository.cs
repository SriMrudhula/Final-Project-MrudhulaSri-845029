using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartContext _context;
        public AdminRepository(EmartContext context)
        {
            _context = context;
        }
        public void AddCategories(Category cat)
        {
            _context.Category.Add(cat);
            _context.SaveChanges();
        }

        public void AddSubCategories(SubCategory subCat)
        {
            _context.SubCategory.Add(subCat);
            _context.SaveChanges();
        }
    }
}
