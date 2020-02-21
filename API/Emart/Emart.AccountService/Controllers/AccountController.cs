using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountService.Repositories;
using Emart.AccountService.Models;
namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Login/{uname}/{pwd}/{user}")]
        public IActionResult Login(string uname,string pwd,string user)
        {
            try
            {
                return Ok(_repo.Login(uname, pwd, user));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetBuyer")]
        public IActionResult Get()
        {
            try
            {
               
                return Ok(_repo.GetAll());

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult SellerRegister(Seller s)
        {
            try
            {
                _repo.SellerRegister(s);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult BuyerRegister(Buyer b)
        {
            try
            {
                _repo.BuyerRegister(b);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

    }
}