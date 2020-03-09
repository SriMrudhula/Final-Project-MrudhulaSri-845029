using System;
using System.Collections.Generic;
using System.Text;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    class TestSellerService
    {
        SellerRepository srepo;
        ItemRepository irepo;
        [SetUp]
        public void SetUp()
        {
            srepo = new SellerRepository(new EmartContext());
            irepo = new ItemRepository(new EmartContext());
        }
        [Test]
        public void TestEditProfile()
        {
            Seller s = srepo.GetProfile(1);
            s.Pwd = "4545";
            srepo.EditProfile(s);
            Seller s1 = srepo.GetProfile(1);
            Assert.AreSame(s, s1);
        }
        [Test]
        public void TestGetProfile()
        {
            Seller s = srepo.GetProfile(1);
            Assert.NotNull(s);
        }
        [Test]
        public void TestAddItems()
        {
            irepo.AddItem(new Items()
            {
                ItemId=540,
                CatId=1,
                SellerId=1,
                SubCatId=1,
                ItemName="hai",
            ItemDesc="good",
            Img="img.jpg",
            Price=5400,
            Remarks="no",
            StockNumber=564
            });
            var result = irepo.GetItems(540);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetItem()
        {
            var result = irepo.GetItems(514);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetCategoryById()
        {
            var result = irepo.GetCategoryById(1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetSubCategoryById()
        {
            var result = irepo.GetSubCategoryById(1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetCategories()
        {
            var result = irepo.GetCategories();
            Assert.GreaterOrEqual(result.Count, 4);
        }
        [Test]
        public void TestGetSubCategories()
        {
            var result = irepo.GetSubCategories(1);
            Assert.GreaterOrEqual(result.Count, 2);
        }
        [Test]
        public void TestViewItems()
        {
            var result = irepo.ViewItems(2,1);
            Assert.NotNull(result);
        }
        [Test]
        public void TestUpdateItem()
        {
            Items item = irepo.GetItems(451);
            item.ItemDesc = "Good Products";
            irepo.UpdateItem(item);
            Items item1 = irepo.GetItems(451);
            Assert.AreSame(item, item1);
        }
        [Test]
        public void TestDeleteItem()
        {
            irepo.DeleteItem(540);
            var result = irepo.GetItems(540);
            Assert.Null(result);
        }
    }
}
