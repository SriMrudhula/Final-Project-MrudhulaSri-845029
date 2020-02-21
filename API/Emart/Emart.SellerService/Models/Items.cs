using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHist = new HashSet<PurchaseHist>();
        }

        public int ItemId { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDesc { get; set; }
        public int? StockNumber { get; set; }
        public string Remarks { get; set; }
        public int? CatId { get; set; }
        public int? SubCatId { get; set; }

        public virtual Category Cat { get; set; }
        public virtual SubCategory SubCat { get; set; }
        public virtual ICollection<PurchaseHist> PurchaseHist { get; set; }
    }
}
