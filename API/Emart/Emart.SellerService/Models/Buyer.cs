using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHist = new HashSet<PurchaseHist>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Pwd { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public DateTime? CreateDateTime { get; set; }

        public virtual ICollection<PurchaseHist> PurchaseHist { get; set; }
    }
}
