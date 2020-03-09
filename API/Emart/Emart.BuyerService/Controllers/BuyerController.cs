using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Authorization;

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
        public List<Items> Search(String name)
        {
            try
            {
                return _repo.SearchItem(name);
            }
            catch (Exception e)
            {
                //return NotFound(e.Message);
                return null;
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
                return NotFound(e.InnerException.Message);
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
        [Route("PurchaseHistory/{buyer_id}")]
        public IActionResult PurchaseHistory(int buyer_id)
        {
            try
            {
                return Ok(_repo.PurchaseHistory(buyer_id));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(Cart cart)
        {
            try
            {
                _repo.AddToCart(cart);
                return Ok();
            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("ViewCart/{buyerId}")]
        public IActionResult ViewCart(int buyerId)
        {
            try
            {
                return Ok(_repo.ViewCart(buyerId));
            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("RemoveFromCart/{cartid}")]
        public IActionResult RemoveFromCart(int cartid)
        {
            try
            {
                _repo.RemoveFromCart(cartid);
                return Ok();
            }
            catch (Exception e)
            {

                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetItem/{id}")]
        public IActionResult GetItem(int id)
        {
            try
            {
                return Ok(_repo.GetItem(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}