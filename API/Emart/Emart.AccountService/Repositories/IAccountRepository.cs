using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;
namespace Emart.AccountService.Repositories
{
   public interface IAccountRepository
    {
        public Seller LoginSeller(string uname, string pwd);
        public Buyer LoginBuyer(string uname, string pwd);
        void SellerRegister(Seller s);
        void BuyerRegister(Buyer b);
    
    }
}
