using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
using Microsoft.AspNetCore.Authorization;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ItemController : ControllerBase
    {
        private readonly IItemInterface _repo;
        public ItemController(IItemInterface repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetItem/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repo.GetItems(id));
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
        [HttpPost]
        [Route("AddItem")]
        public IActionResult Add(Items item)
        {
            try
            {
                _repo.AddItem(item);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteItem/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult Update(Items item)
        {
            try
            {
                _repo.UpdateItem(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sellerid}/{subcat_id}")]
        public IActionResult ViewItems(int sellerid, int subcat_id)
        {
            try
            {
                return Ok(_repo.ViewItems(sellerid,subcat_id));
            }
            catch(Exception e)
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
                return Ok(_repo.GetSubCategoryById(subcatId));
            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
        }
    }
}