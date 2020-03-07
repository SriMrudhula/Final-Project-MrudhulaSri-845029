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
        public List<Category> GetCategories()
        {
            List<Category> cat = _context.Category.ToList();
            return cat;
        }
        public List<Seller> GetSeller()
        {
            return _context.Seller.ToList();
        }
        public List<Buyer> GetBuyer()
        {
            return _context.Buyer.ToList();
        }
        public List<SubCategory> GetSubCategories(int cat_id)
        {
            List<SubCategory> subCat = _context.SubCategory.Where(e => e.CatId == cat_id).ToList();
            return subCat;
        }
        public void DeleteCategory(int cat_id)
        {
            Category cat = _context.Category.Find(cat_id);
            _context.Remove(cat);
            _context.SaveChanges();
        }
        public void DeleteSubCategory(int subCat_id)
        {
            SubCategory subCat = _context.SubCategory.Find(subCat_id);
            _context.Remove(subCat);
            _context.SaveChanges();
        }
        void IAdminRepository.UpdateCategory(Category cat)
        {
                _context.Category.Update(cat);
                _context.SaveChanges();

            }
        public Category GetCategoryByName(string name)
        {
            return _context.Category.SingleOrDefault(e => e.CatName == name);
        }

        public SubCategory GetSubCateoryByName(string name)
        {
            return _context.SubCategory.SingleOrDefault(e => e.SubCatName == name);
        }

        void IAdminRepository.UpdateSubCateory(SubCategory subcat)
        {
            _context.SubCategory.Update(subcat);
            _context.SaveChanges();
        }

        Category IAdminRepository.GetCategoryById(int cat_id)
        {
            return _context.Category.Find(cat_id);
        }

        SubCategory IAdminRepository.GetSubCateoryById(int subcat_id)
        {
            return _context.SubCategory.Find(subcat_id);
        }
    }
}
