using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHist = new HashSet<PurchaseHist>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Pwd { get; set; }
        public string CompanyName { get; set; }
        public string Gstin { get; set; }
        public string AbtCompany { get; set; }
        public string PostalAddr { get; set; }
        public string CompWebsite { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHist> PurchaseHist { get; set; }
    }
}
