using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly EmartContext _context;
        public AccountRepository(EmartContext context)
        {
            _context=context;
        }
        public void BuyerRegister(Buyer b)
        {
            _context.Buyer.Add(b);
            _context.SaveChanges();
        }

        public bool Login(string uname, string pwd, string user)
        {
            if(user=="Seller"|| user=="seller")
            {
                Seller s = _context.Seller.SingleOrDefault(e => e.Username == uname && e.Pwd == pwd);
                if(s != null)
                {
                    return true;
                }
            }
            else if(user=="Buyer" || user=="buyer")
            {
                Buyer s = _context.Buyer.SingleOrDefault(e => e.Username == uname && e.Pwd == pwd);
                if (s != null)
                {
                    return true;
                }
              
            }
            return false;
        }

        public void SellerRegister(Seller s)
        {
            _context.Seller.Add(s);
            _context.SaveChanges();
        }
        public List<Buyer> GetAll()
        {
            return _context.Buyer.ToList();
        }
    }
}
