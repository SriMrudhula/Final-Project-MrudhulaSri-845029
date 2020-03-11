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
        public void BuyerRegister(Buyer buyer)
        {
            _context.Buyer.Add(buyer);
            _context.SaveChanges();
        }

        public Seller LoginSeller(string uname, string pwd)
        { 
                Seller seller = _context.Seller.SingleOrDefault(e => e.Username == uname && e.Pwd == pwd);
                if (seller != null)
                {
                    return seller;
                }
            return null;
        }

        public Buyer LoginBuyer(string uname, string pwd) { 
            
                Buyer buyer = _context.Buyer.SingleOrDefault(e => e.Username == uname && e.Pwd == pwd);
                if (buyer != null)
                {
                    return buyer;
                }
            return null;
        }
        public List<Buyer> GetBuyer()
        {
            return _context.Buyer.ToList();
        }
        public List<Seller> GetSeller()
        {
            return _context.Seller.ToList();
        }
        public void SellerRegister(Seller s)
        {
            _context.Seller.Add(s);
            _context.SaveChanges();
        }

    }
}
