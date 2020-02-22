using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetProfile/{bid}")]
        public IActionResult Get(int bid)
        {
            try
            {
                return Ok(_repo.GetProfile(bid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult Edit(Buyer buyer)
        {
            try
            {
                _repo.EditProfile(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult Search(String name)
        {
            try
            {
                return Ok(_repo.SearchItem(name));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHist item)
        {
            try
            {
                _repo.BuyItem(item);
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
                return NotFound(e.Message);
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
        [Route("GetTransactionHistory/{bid}")]
        public IActionResult PurchHist(int buyer_id)
        {
            try
            {
                return Ok(_repo.PurchaseHistory(buyer_id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }


    }
}