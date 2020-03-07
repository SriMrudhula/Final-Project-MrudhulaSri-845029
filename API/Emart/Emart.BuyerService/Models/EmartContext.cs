using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.BuyerService.Models
{
    public partial class EmartContext : DbContext
    {
        public EmartContext()
        {
        }

        public EmartContext(DbContextOptions<EmartContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHist> PurchaseHist { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-KHFT6CK\\SQLEXPRESS;Initial Catalog=Emart;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Buyer__A9D10534A7DAAECC")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("UQ__Buyer__536C85E4F77610E0")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreateDateTime).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Pwd)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.Property(e => e.Cartid).ValueGeneratedNever();

                entity.Property(e => e.Img)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDesc)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.ItemId).HasColumnName("Item_id");

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__cart__Item_id__4E88ABD4");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PK__Category__26E351405D89665F");

                entity.HasIndex(e => e.CatName)
                    .HasName("UQ__Category__B46D3EC371E7E2F3")
                    .IsUnique();

                entity.Property(e => e.CatId)
                    .HasColumnName("Cat_Id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CatDesc)
                    .HasColumnName("Cat_Desc")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.CatName)
                    .IsRequired()
                    .HasColumnName("Cat_Name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__items__52020FDD18D90F8C");

                entity.ToTable("items");

                entity.Property(e => e.ItemId)
                    .HasColumnName("item_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CatId).HasColumnName("Cat_id");

                entity.Property(e => e.Img)
                    .IsRequired()
                    .HasColumnName("img")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDesc)
                    .HasColumnName("Item_Desc")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("Seller_id");

                entity.Property(e => e.SubCatId).HasColumnName("SubCat_id");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FK__items__Cat_id__36B12243");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__items__Seller_id__38996AB5");

                entity.HasOne(d => d.SubCat)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubCatId)
                    .HasConstraintName("FK__items__SubCat_id__37A5467C");
            });

            modelBuilder.Entity<PurchaseHist>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.BuyerId).HasColumnName("Buyer_id");

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("datetime");

                entity.Property(e => e.ItemId).HasColumnName("Item_id");

                entity.Property(e => e.NoOfItems).HasColumnName("No_of_items");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("Seller_id");

                entity.Property(e => e.TransStatus)
                    .HasColumnName("Trans_Status")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TransType)
                    .IsRequired()
                    .HasColumnName("Trans_Type")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHist)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__PurchaseH__Buyer__3B75D760");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHist)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__PurchaseH__Item___3D5E1FD2");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHist)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__PurchaseH__Selle__3C69FB99");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Seller__A9D1053412F82221")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("UQ__Seller__F3DBC57269F1605E")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AbtCompany)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.CompWebsite)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddr)
                    .HasColumnName("postalAddr")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Pwd)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasKey(e => e.SubCatId)
                    .HasName("PK__SubCateg__2EBB15C1473C78DF");

                entity.HasIndex(e => e.SubCatName)
                    .HasName("UQ__SubCateg__D44F504C00C11079")
                    .IsUnique();

                entity.Property(e => e.SubCatId)
                    .HasColumnName("SubCat_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CatId).HasColumnName("Cat_id");

                entity.Property(e => e.Gst).HasColumnName("gst");

                entity.Property(e => e.SubCatDesc)
                    .HasColumnName("SubCat_Desc")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.SubCatName)
                    .IsRequired()
                    .HasColumnName("SubCat_Name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FK__SubCatego__Cat_i__1BFD2C07");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
