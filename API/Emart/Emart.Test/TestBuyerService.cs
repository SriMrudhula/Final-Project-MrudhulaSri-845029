using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;

namespace Emart.Test
{
    class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EmartContext());
        }
        [Test]
        public void TestEditProfile()
        {
            Buyer buyer = _repo.GetProfile(2);
            buyer.Pwd = "5454";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.GetProfile(2);
            Assert.AreSame(buyer, buyer1);
        }
        [Test]
        public void TestGetProfile()
        {
            Buyer buyer = _repo.GetProfile(1);
            Assert.NotNull(buyer);
        }
        [Test]
        public void TestGetCategoryByName()
        {
            var result = _repo.GetCategoryByName("FootWear");
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
            Assert.GreaterOrEqual(result.Count, 4);
        }
        [Test]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories(1);
            Assert.GreaterOrEqual(result.Count, 2);
        }
        [Test]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHist()
            {
                Id = 504,
                SellerId = 1,
                BuyerId = 1,
                DateTime = DateTime.Now,
                ItemId = 451,
                NoOfItems = 2,
                Remarks = "No Remarks",
                TransStatus = "Success",
                TransType ="card"
            });
            var result = _repo.PurchaseHistory(1);
            Assert.GreaterOrEqual(result.Count, 14);
        }
        [Test]
        public void TestPurchaseHistory()
        {
            var result = _repo.PurchaseHistory(1);
            Assert.GreaterOrEqual(result.Count, 14);
        }
        [Test]
        public void TestSearch()
        {
            var result = _repo.SearchItem("LG");
            Assert.GreaterOrEqual(3, result.Count);
        }
        [Test]
        public void TestGetItem()
        {
            var result = _repo.GetItem(451);
            Assert.NotNull(result);
        }
        [Test]
        public void TestAddToCart()
        {
            _repo.AddToCart(new Cart()
            {
            Cartid=405,
        ItemName= "Dell",
        ItemDesc= "Good",
        Price= 43566,
        Img="LG.jpg",
        BuyerId= 1,
        ItemId= 514,
            });
            var result = _repo.ViewCart(1);
            Assert.GreaterOrEqual(result.Count, 3);
        }
        [Test]
        public void TestViewCart()
        {
            var result = _repo.ViewCart(1);
            Assert.GreaterOrEqual(result.Count, 3);
        }
        [Test]
        public void TestRemoveFromCart()
        {
            _repo.RemoveFromCart(405);
            var result = _repo.ViewCart(1);
            Assert.AreEqual(result.Count, 2);
        }
    }

    }
