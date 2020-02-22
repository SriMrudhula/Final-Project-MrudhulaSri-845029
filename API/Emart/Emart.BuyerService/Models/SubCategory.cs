using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int SubCatId { get; set; }
        public string SubCatName { get; set; }
        public string SubCatDesc { get; set; }
        public int? Gst { get; set; }
        public int? CatId { get; set; }

        public virtual Category Cat { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
