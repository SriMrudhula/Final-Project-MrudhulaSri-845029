using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
                return NotFound(e.Message);
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
        [Route("ViewItems/{id}")]
        public IActionResult ViewItems(int id)
        {
            try
            {
                return Ok(_repo.ViewItems(id));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}