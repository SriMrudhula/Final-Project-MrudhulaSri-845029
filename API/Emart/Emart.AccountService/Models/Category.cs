using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int CatId { get; set; }
        public string CatName { get; set; }
        public string CatDesc { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
