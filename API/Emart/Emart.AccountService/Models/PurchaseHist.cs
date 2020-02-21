﻿using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class PurchaseHist
    {
        public int Id { get; set; }
        public int NoOfItems { get; set; }
        public DateTime? DateTime { get; set; }
        public string TransType { get; set; }
        public int? BuyerId { get; set; }
        public int? SellerId { get; set; }
        public int? ItemId { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
