using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;
namespace Emart.AccountService.Repositories
{
   public interface IAccountRepository
    {
        bool Login(string uname,string pwd,string user);
        void SellerRegister(Seller s);
        void BuyerRegister(Buyer b);
        List<Buyer> GetAll();
    }
}
