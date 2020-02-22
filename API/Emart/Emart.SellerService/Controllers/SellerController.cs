using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult Edit(Seller seller)
        {
            try
            {
                _repo.EditProfile(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSeller/{sid}")]
        public IActionResult Get(int sid)
        {
            try
            {
                return Ok(_repo.GetProfile(sid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}