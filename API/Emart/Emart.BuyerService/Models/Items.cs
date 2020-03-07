using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHist = new HashSet<PurchaseHist>();
        }

        public int ItemId { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDesc { get; set; }
        public int? StockNumber { get; set; }
        public string Remarks { get; set; }
        public string Img { get; set; }
        public int? CatId { get; set; }
        public int? SubCatId { get; set; }
        public int? SellerId { get; set; }

        public virtual Category Cat { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubCat { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHist> PurchaseHist { get; set; }
    }
}
