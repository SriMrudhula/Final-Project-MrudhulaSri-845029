using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;
namespace Emart.Test
{
    [TestFixture]
    public class TestAccountService
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EmartContext());
        }
        [Test]
        public void TestBuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Id = 405,
                Username = "Mrudhula1",
                Pwd = "4545",
                Mobile = "9876543210",
                CreateDateTime = DateTime.Now,
                Email = "Sri1@gmail.com",
            });
            var result = _repo.LoginBuyer("Mrudhula", "4545");
            Assert.NotNull(result);
        }

        [Test]
        public void TestLoginBuyer()
        {
            var result = _repo.LoginBuyer("tarun", "4545");
            Assert.NotNull(result);
        }
        [Test]
        public void TestSellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Id =405,
                Username = "Mrudhula1",
                Pwd = "5454",
                CompanyName = "Emart",
                CompWebsite = "www.emart.com",
                Email="sri1@gmail.com",
                AbtCompany="Good",
                Gstin="E34567",
                Mobile="9876543210",
                PostalAddr="chennai"
            });
            var result = _repo.LoginSeller("Mrudhula", "5454");
            Assert.NotNull(result);

        }
        [Test]
        public void TestLoginSeller()
        {
            var result = _repo.LoginSeller("Mrudhula", "5454");
            Assert.NotNull(result);
        }
    }
}
