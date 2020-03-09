using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
namespace Emart.Test
{
    [TestFixture]
    public class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo =new AdminRepository(new EmartContext());
        }
        [Test]
        public void TestAddCategories()
        {
            _repo.AddCategories(new Category()
            {
                CatId=450,
                CatName="Sports",
                CatDesc="Good",
            });
            var result = _repo.GetCategoryById(450);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetCategoryById()
        {
            var result = _repo.GetCategoryById(1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetCategoryByName()
        {
            var result = _repo.GetCategoryByName("FootWear");
            Assert.NotNull(result);
        }

        [Test]
        public void TestAddSubCategories()
        {
            _repo.AddSubCategories(new SubCategory()
            {
                SubCatId = 450,
                SubCatName = "Clothes",
                SubCatDesc = "Good",
                CatId=3,
            });
            var result = _repo.GetSubCateoryById(450);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetSubCategoryById()
        {
            var result = _repo.GetSubCateoryById(1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetSubCategoryByName()
        {
            var result = _repo.GetSubCateoryByName("Mobiles");
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.GreaterOrEqual(result.Count,4);
        }
        [Test]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories(1);
            Assert.GreaterOrEqual(result.Count, 2);
        }
        [Test]
        public void TestGetSeller()
        {
            var result = _repo.GetSeller();
            Assert.GreaterOrEqual(result.Count,4);
        }
        [Test]
        public void TestGetBuyer()
        {
            var result = _repo.GetBuyer();
            Assert.GreaterOrEqual(result.Count, 5);
        }
        [Test]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(450);
            var result = _repo.GetCategoryById(450);
            Assert.Null(result);

        }
        [Test]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory(450);
            var result = _repo.GetSubCateoryById(450);
            Assert.Null(result);

        }

        [Test]
        public void TestUpdateCategories()
        {
            Category cat = _repo.GetCategoryById(138);
             cat.CatDesc= "Good Products";
            _repo.UpdateCategory(cat);
            Category cat1 = _repo.GetCategoryById(138);
            Assert.AreSame(cat, cat1);

        }
        [Test]
        public void TestUpdateSubCategories()
        {
            SubCategory subcat = _repo.GetSubCateoryById(2);
            subcat.SubCatDesc = "Good Products";
            _repo.UpdateSubCateory(subcat);
            SubCategory subcat1 = _repo.GetSubCateoryById(2);
            Assert.AreSame(subcat, subcat1);

        }
    }
}
