using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Cart
    {
        public int Cartid { get; set; }
        public string ItemName { get; set; }
        public string ItemDesc { get; set; }
        public int Price { get; set; }
        public string Img { get; set; }
        public int? BuyerId { get; set; }
        public int? ItemId { get; set; }

        public virtual Items Item { get; set; }
    }
}
