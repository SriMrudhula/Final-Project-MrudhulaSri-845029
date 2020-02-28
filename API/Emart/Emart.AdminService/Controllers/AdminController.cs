using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCat(Category cat)
        {
            try
            {
                _repo.AddCategories(cat);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCat(SubCategory subCat)
        {
            try
            {
                _repo.AddSubCategories(subCat);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCat()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{catId}")]
        public IActionResult GetSubCat(int catId)
        {
            try
            {
                return Ok(_repo.GetSubCategories(catId));
            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSeller")]
        public IActionResult GetSeller()
        {
            try
            {
                return Ok(_repo.GetSeller());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetBuyer")]
        public IActionResult GetBuyer()
        {
            try
            {
                return Ok(_repo.GetBuyer());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{cat_id}")]
        public IActionResult DeleteCategory(int cat_id)
        {
            try
            {
                _repo.DeleteCategory(cat_id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubcategory/{subCat_id}")]
        public IActionResult DeleteSubcategory(int subCat_id)
        {
            try
            {
                _repo.DeleteSubCategory(subCat_id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("UpdateCategory")]
        public IActionResult UpdateCategory(Category cat)
        {
            try
            {
                _repo.UpdateCategory(cat);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("UpdateSubcategory")]
        public IActionResult UpdateSubcategory(SubCategory subcat)
        {
            try
            {
                _repo.UpdateSubCateory(subcat);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategoryById/{cat_id}")]
        public IActionResult GetCategoryById(int cat_id)
        {
            try
            {
                return Ok(_repo.GetCategoryById(cat_id));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategoryById/{subcatId}")]
        public IActionResult GetSubCateoryById(int subcatId)
        {
            try
            {
                return Ok(_repo.GetSubCateoryById(subcatId));
            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
        }
    }
}